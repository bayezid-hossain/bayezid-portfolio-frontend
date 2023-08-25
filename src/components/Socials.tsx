import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiTwitterLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center flex-row rounded-full py-2 mt-[5px] px-4 bg-white/10 backdrop-blur-sm xl:backdrop-blur-none  xl:flex-row gap-x-5 xl:gap-x-5 text-lg xl:p-0 xl:bg-transparent xl:rounded-none z-30">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>{' '}
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>{' '}
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>{' '}
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>{' '}
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
