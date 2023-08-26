import Image from 'next/image';

interface AvatarProps {
  photo: string;
  mirror?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ photo, mirror }) => {
  return (
    <div
      className={`hidden xl:flex xl:max-w-none ${
        mirror ? 'transform -scale-x-100' : ''
      }`}
    >
      <Image
        src={photo}
        width={500}
        height={378}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
