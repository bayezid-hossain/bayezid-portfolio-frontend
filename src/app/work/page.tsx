import Transition from '@/components/Transition';
import Work from './main';

export const metadata = {
  title: 'My Works',
  description: 'Checkout my Projects',
};
const WorkPage = () => {
  return (
    <div>
      <Transition />
      <Work />
    </div>
  );
};

export default WorkPage;
