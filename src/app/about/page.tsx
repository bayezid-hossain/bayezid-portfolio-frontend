import Timeline from '@/components/Timeline';
import About from './main';
import Link from 'next/link';
import ScrollButton from '@/components/Scrollbutton';
export const metadata = {
  title: 'About',
  description: 'About Bayezid',
};

const AboutPage = () => {
  return (
    <div className=" py-32 text-center xl:text-left">
      <About />
    </div>
  );
};
export default AboutPage;
