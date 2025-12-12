import { Link } from "react-router";
import { Star } from "lucide-react";
import Reveal from "../Animation/Reveal";

const Card = ({service}) => {
  const { _id, name, image, price, category,
description } = service || {}
  return (
    <Reveal>
      <div className=" transition delay-150 rounded-xl duration-500 ease-in-out hover:scale-110 hover:rounded-2xl ">
        <Link
          to={`/service/${_id}`}
          className="max-w-sm w-full rounded-2xl overflow-hidden "
        >
          {/* Image */}
          <div className="h-48 w-full rounded-t-2xl overflow-hidden">
            <img
              src={image}
              alt="Service"
              className="group-hover:scale-110  h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 bg-base-300 rounded-b-2xl ">
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-yellow-200 text-yellow-700 font-medium">
              {category}
            </span>

            {/* Title */}
            <h2 className="mt-3 text-xl font-semibold text-primary">
             {name}
            </h2>

            {/* Description */}
            <p className="mt-1 text-gray-500 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Bottom Row */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-bold text-black">
                ৳ {price} <span className="text-sm text-gray-500">/per room</span>
              </p>

              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="font-medium text-gray-700">4.9</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Reveal>
  );
};

export default Card;

/* <Link
      to={`/plant/1`}
      className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src='https://i.ibb.co.com/rMHmQP2/money-plant-in-feng-shui-brings-luck.jpg'
            alt='Plant Image'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>Money Plant</div>
        <div className='font-semibold text-lg'>Category: Indoor</div>
        <div className='font-semibold text-lg'>Quantity: 10</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'> Price: 15$</div>
        </div>
      </div>
    </Link> */
