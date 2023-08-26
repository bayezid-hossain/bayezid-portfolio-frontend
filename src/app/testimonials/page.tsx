import Transition from '@/components/Transition';
import Testimonials from './main';

export const metadata = {
  title: "Peoples' opinion",
  description: 'What people say about me',
};
const TestimonialsPage = () => {
  return (
    <div>
      <Transition />
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;
