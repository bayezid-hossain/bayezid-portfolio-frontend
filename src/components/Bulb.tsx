import Image from 'next/image';

const Bulb = () => {
  return (
    <div className="absolute -right-20 -top-0 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[150px] xl:w-[200px]">
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        className="w-full h-full -rotate-[60deg]"
        alt=""
      />
    </div>
  );
};

export default Bulb;
