'use client';

import Image from 'next/image';
const timelineData = [
  {
    image: '/t-avt-1.png',
    title: 'Graduation',
    time: '2021',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    title: 'Flutter Developer',
    time: '2022',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    title: 'Full Stack Developer',
    time: '2023',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Timeline = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      exit="hidden"
      animate="show"
      className=" text-gray-800 w-full items-center justify-center flex flex-col"
    >
      {/* heading */}
      <motion.h2
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        exit="hidden"
        animate="show"
        className="h2 mt-10 mb-4 text-accent"
      >
        Timeline
      </motion.h2>
      <motion.div className=" relative container mx-auto px-6 flex flex-col space-y-8">
        {/* the vertical line */}
        <div className="absolute w-2 z-0 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        {timelineData.map((item, index) => {
          return (
            <div key={index}>
              {/* image */}
              <Image
                src={item.image}
                width={100}
                height={100}
                alt=""
                className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
              />

              {/* triangle and text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: index % 2 == 0 ? [150, 0] : [-150, 0],
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.01 }}
                className={`relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 ${
                  index % 2 == 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'
                }`}
              >
                {/* triangle */}
                <div
                  className={`h-4 w-4 transform rotate-45 bg-white absolute inset-0 left-10 xs:top-11 xs:left-26 ${
                    index % 2 == 0 ? 'md:left-14' : 'md:left-auto md:right-14'
                  } `}
                  area-hidden="true"
                ></div>
                {/* text */}
                <div className="bg-white p-6 rounded-md shadow-md">
                  <span className="tracking-wide text-indigo-600">
                    {item.time}
                  </span>
                  <h1 className="text-2xl text-accent font-bold pt-1">
                    {item.title}
                  </h1>
                  <p className="pt-1 text-[#000000]"> {item.message}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
        {/* image and content*/}
      </motion.div>
    </motion.div>
  );
};

export default Timeline;
