import { Sora } from '@next/font/google';
import { ReactNode } from 'react'; // Import ReactNode type
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';

interface LayoutProps {
  children: ReactNode; // Use ReactNode type for the children prop
}
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
