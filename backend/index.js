require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const admin = require("firebase-admin");
const port = process.env.PORT || 3000;
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString(
  "utf-8"
);
const serviceAccount = JSON.parse(decoded);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://b12-m11-session.web.app",
    ],
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());

// jwt middlewares
const verifyJWT = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).send({ message: "Unauthorized Access!" });
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.tokenEmail = decoded.email;
    console.log(decoded);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Unauthorized Access!", err });
  }
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const db = client.db("styleDecorDB");
    const servicesCollection = db.collection("services");
    const ordersCollection = db.collection("orders");
    const usersCollection = db.collection("users");
    // const decoratorRequestsCollection = db.collection('decoratorRequests')

      ("sellerRequests");
    // Save a services data in db
    app.post("/services", async (req, res) => {
      const serviceData = req.body;
      console.log(serviceData);
      const result = await servicesCollection.insertOne(serviceData);
      res.send(result);
    });

    // get all services from db
    app.get("/services", async (req, res) => {
      const result = await servicesCollection.find().toArray();
      res.send(result);
    });
    // get all  services from db
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const result = await servicesCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    

    

    // get all services from db
    app.get("/services", async (req, res) => {
      const result = await servicesCollection.find().toArray();
      res.send(result);
    });

    // Payment endpoints
    app.post("/create-checkout-session", async (req, res) => {
      const paymentInfo = req.body;
      console.log(paymentInfo);
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: paymentInfo?.name,
                description: paymentInfo?.description,
                images: [paymentInfo.image],
              },
              unit_amount: paymentInfo?.price * 100,
            },
            quantity: paymentInfo?.quantity,
          },
        ],
        customer_email: paymentInfo?.customer?.email,
        mode: "payment",
        // Accept either `serviceId` or legacy `plantId` (frontend used `plantId` before)
        metadata: {
          serviceId: paymentInfo?.serviceId,
          customer: paymentInfo?.customer.email,
        },
        success_url: `${process.env.CLIENT_DOMAIN}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_DOMAIN}/service/${paymentInfo?.serviceId}`,
      });
      res.send({ url: session.url });
    });

    app.post("/payment-success", async (req, res) => {
      const { sessionId } = req.body;
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      console.log("payment-success: retrieved session", session.id);
      // find service using metadata.serviceId (introduced above in session creation)
      const service = await servicesCollection.findOne({
        _id: new ObjectId(session.metadata?.serviceId),
      });
      const order = await ordersCollection.findOne({
        transactionId: session.payment_intent,
      });

      // Stripe may report either `payment_status: 'paid'` or `status: 'complete'`
      const paid =
        session.payment_status === "paid" || session.status === "complete";

      if (paid && service && !order) {
        // save order data in db
        const orderInfo = {
          serviceId: session.metadata.serviceId,
          transactionId: session.payment_intent,
          customer: session.metadata.customer,
          status: "pending",
          seller: service.seller,
          name: service.name,
          category: service.category,
          quantity: 1,
          price: session.amount_total / 100,
          image: service?.image,
        };
        const result = await ordersCollection.insertOne(orderInfo);
        console.log("payment-success: inserted order", result.insertedId);
        // update service quantity
        await servicesCollection.updateOne(
          {
            _id: new ObjectId(session.metadata.serviceId),
          },
          { $inc: { quantity: -1 } }
        );

        return res.send({
          transactionId: session.payment_intent,
          orderId: result.insertedId,
        });
      }
      // If an order already exists, return it; otherwise return a helpful message
      if (order) {
        return res.send({
          transactionId: session.payment_intent,
          orderId: order._id,
        });
      }

      console.log("payment-success: no order created for session", session.id);
      return res.status(400).send({
        message:
          "No new order created. Payment not confirmed or service missing on session metadata.",
        session,
      });
    });

    // get all orders for a customer by email
    app.get("/my-orders", async (req, res) => {
      const result = await ordersCollection
        .find(/* { customer: req.tokenEmail } */)
        .toArray();
      res.send(result);
    });

    // get all orders for a seller by email
    app.get(
      "/manage-orders/:email",
      /* verifyJWT,
      verifySELLER, */
      async (req, res) => {
        const email = req.params.email;

        const result = await ordersCollection
          .find(/* { 'seller.email': email } */)
          .toArray();
        res.send(result);
      }
    );

    // get all plants for a seller by email
    app.get(
      "/my-inventory/:email",
      /*  verifyJWT,
      verifySELLER, */
      async (req, res) => {
        const email = req.params.email;

        const result = await servicesCollection
          .find(/* { "seller.email": email } */)
          .toArray();
        res.send(result);
      }
    );

    // save or update a user in db
    app.post('/user', async (req, res) => {
      const userData = req.body
      userData.created_at = new Date().toISOString()
      userData.last_loggedIn = new Date().toISOString()
      userData.role = 'customer'

      const query = {
        email: userData.email,
      }

      const alreadyExists = await usersCollection.findOne(query)
      console.log('User Already Exists---> ', !!alreadyExists)

      if (alreadyExists) {
        console.log('Updating user info......')
        const result = await usersCollection.updateOne(query, {
          $set: {
            last_loggedIn: new Date().toISOString(),
          },
        })
        return res.send(result)
      }

      console.log('Saving new user info......')
      const result = await usersCollection.insertOne(userData)
      res.send(result)
    })
    // get a user's role
    app.get("/user/role", verifyJWT, async (req, res) => {
      const result = await usersCollection.findOne({ email: req.tokenEmail });
      res.send({ role: result?.role });
    });

    // get all users for admin
    app.get("/users", /* verifyJWT, verifyADMIN,  */async (req, res) => {
      // const adminEmail = req.tokenEmail;
      const result = await usersCollection
        .find(/* { email: { $ne: adminEmail } } */)
        .toArray();
      res.send(result);
    });

    // update a user's role
    app.patch("/update-role",/*  verifyJWT, verifyADMIN, */ async (req, res) => {
      const { email, role } = req.body;
      const result = await usersCollection.updateOne(
        { email },
        { $set: { role } }
      );
      // await sellerRequestsCollection.deleteOne({ email });

      res.send(result);
    });




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Server..");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
