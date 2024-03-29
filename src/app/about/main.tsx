'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
// icons
import Transition from '../../components/Transition';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';
import Circles from '../../components/Circles';

import CountUp from 'react-countup';
import ScrollButton from '@/components/Scrollbutton';
import Timeline from '@/components/Timeline';
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="fahtml5" />,
          <FaCss3 key="facss3" />,
          <FaJs key="fajs" />,
          <FaReact key="fareact" />,
          <SiNextdotjs key="sinextdotjs" />,
          <SiFramer key="siframer" />,
          <FaWordpress key="fawordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="fafigma" />,
          <SiAdobexd key="siadobexd" />,
          <SiAdobephotoshop key="siadobephotoshop" />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        time: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        time: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        time: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        time: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        time: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        time: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        time: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        time: '2006',
      },
    ],
  },
];
const scrollIntoTheView = (id: string) => {
  let element = document.getElementById(id) as HTMLElement;
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',

    inline: 'nearest',
  });
};

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className=" ">
      <Transition />
      <Circles />

      <div className="xs:container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-16 ">
        {/*text*/}
        <div className="flex-1 flex flex-col justify-center z-50 ">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 special:text-[35px] "
          >
            Captivating <span className="text-accent">stories</span> create
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 py-10 xl:py-0"
          >
            About 3 years ago, I began freelancing as a developer. Since then, I
            have done remote work for agencies, consulted for startups and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/*counters*/}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/*experience*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  z-50">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="  text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] z-100">
                  Years of experience
                </div>
              </div>
              {/*clients*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  z-50">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="  text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] z-100">
                  Satisfied Clients
                </div>
              </div>
              {/*Finished projects*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  z-50">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={90} duration={5} />+
                </div>
                <div className="  text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] z-100">
                  Finished projects
                </div>
              </div>{' '}
              {/*awards*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  z-50">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="  text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] z-100">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/*info*/}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-full"
        >
          <div className="flex gap-x-10 xl:gap-x-12 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-10 xl:gap-y-4  items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/*title*/}
                  <div className="font-light my-6  md:mb-0">{item.title}</div>
                  <div className="hidden md:flex mt-6">-</div>
                  {'time' in item && <div className="mt-6">{item.time}</div>}
                  {'icons' in item && (
                    <div className="flex gap-x-4 mt-6">
                      {item.icons.map((icon, itemIndex) => (
                        <div key={itemIndex} className="text-2xl text-white ">
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => scrollIntoTheView('timeline')}
      >
        <ScrollButton />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default About;
