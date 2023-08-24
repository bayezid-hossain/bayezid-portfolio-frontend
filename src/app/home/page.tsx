'use client';
import TypeWriterText from '@/components/BlinkingText/TypeWriterText';

import Transition from '@/components/Transition';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
const HomePage = () => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={'home'} className="h-full">
        <Transition />
        Home
      </motion.div>
    </AnimatePresence>
  );
};
export default HomePage;
