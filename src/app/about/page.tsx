import Timeline from '@/components/Timeline';
import About from './main';
import Transition from '@/components/Transition';
import ScrollButton from '@/components/Scrollbutton';
export const metadata = {
  title: 'About',
  description: 'About Bayezid',
};

const AboutPage = () => {
  return (
    <div className=" py-32 text-center xl:text-left">
      <Transition />
      <About />
      <ScrollButton />

      <Timeline />
    </div>
  );
};
export default AboutPage;
