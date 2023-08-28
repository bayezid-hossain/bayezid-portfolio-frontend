import { BsArrowDown } from 'react-icons/bs';

const ScrollButton = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-[5%] mb-[10%]">
      <BsArrowDown className="animate-bounce text-[30px] xl:text-[56px]" />
      <h2 className="animate-pulse text-accent text-[12px] md:text-[20px]">
        Scroll Down
      </h2>
    </div>
  );
};

export default ScrollButton;
