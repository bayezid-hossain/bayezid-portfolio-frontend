'use client';

import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import Transition from '../../components/Transition';

const Work = () => {
  return (
    <div>
      <Transition />
      <div className="h-screen bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/*text*/}
            <div className="text-center flex xl:w-[30vw] flex-col md:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                exit="hidden"
                animate="show"
                className="h2 xl:mt-12"
              >
                My Work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                exit="hidden"
                animate="show"
                className="mb-4 max-w-[400px] mx-auto md:mx-0"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                expedita odit beatae, cupiditate saepe quam officia aut placeat
                quas neque!,
              </motion.p>
            </div>
            {/*slider*/}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              exit="hidden"
              animate="show"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
