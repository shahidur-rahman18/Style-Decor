import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import heroImage from '../../assets/hero-decoration.jpg';
const stats = [
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Users, value: '2,500+', label: 'Happy Clients' },
  { icon: Calendar, value: '5,000+', label: 'Events Decorated' },
];

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury interior decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5DCCF] text-primary text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-primary" />
              Premium Decoration Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Transform Your Space Into
            <span className="text-gradient-gold block">Something Extraordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg"
          >
            From intimate home makeovers to grand wedding celebrations, our expert 
            decorators bring your vision to life with elegance and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            {/* <Button variant="hero" asChild>
              <Link to="/services">
                Book Decoration Service
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>

            <Button variant="hero-outline" asChild>
              <Link to="/about">Explore Our Work</Link>
            </Button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl shadow-elegant animate-float">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background"
                />
              ))}
            </div>
            <div>
              <div className="text-sm font-medium">500+ Projects</div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    );
};

export default Hero;








