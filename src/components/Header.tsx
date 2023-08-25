import Image from 'next/image';
import Link from 'next/link';

import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute w-full flex items-center h-full justify-between pt-[2.5%] xl:px-20 xl:h-[90px] ">
      <div className="container mx-auto max-w-[100%]">
        <Link
          href={'/'}
          className="absolute z-30 w-full items-center top-5 justify-center left-0 flex xl:hidden"
        >
          <Image src={'/logo.png'} width={220} height={20} alt="" priority />
        </Link>
        <div className="flex flex-col xl:flex-row justify-between items-end gap-y-2">
          {/*logo*/}
          <Link href={'/'} className="hidden xl:flex">
            <Image src={'/logo.png'} width={220} height={20} alt="" priority />
          </Link>
          {/*socials*/}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
