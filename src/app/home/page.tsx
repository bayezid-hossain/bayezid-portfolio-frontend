'use client';

import ParticlesContainer from '../../components/ParticlesContainer';
import ProjectsBtn from '../../components/ProjectsBtn';
import Avatar from '../../components/Avatar';
import { fadeIn } from '../../../variants';
import Transition from '../../components/Transition';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
const HomePage = () => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={'home'} className="h-full">
        <Transition />
        <div className="bg-primary/60 h-full">
          {/*text*/}
          <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
            <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto z-30">
              {/*title*/}
              <motion.h1
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
              >
                Bringing Concepts <br /> Into{' '}
                <span className="text-accent">Reality</span>
              </motion.h1>
              {/*subtitle*/}
              <motion.p
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              >
                lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                mostrum quam reprehendrit vero, tenetur voluptatem nulla aut
                aspernatur dolores ut.
              </motion.p>
              {/*btn*/}
              <motion.div
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex justify-center xl:hidden relative"
              >
                <ProjectsBtn />
              </motion.div>
              <motion.div
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
          </div>
          {/*image*/}
          <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
            {/*bg img*/}
            <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          </div>
          {/*particles*/}
          <div className="w-full h-1/2 absolute top-0 xl:w-1/2 xl:h-full right-0 bottom-0 translate-z-0">
            <ParticlesContainer />
          </div>
          {/*Avatar img*/}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default HomePage;
