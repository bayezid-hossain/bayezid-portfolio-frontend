import Image from 'next/image';

interface AvatarProps {
  photo: string;
}

const Avatar: React.FC<AvatarProps> = ({ photo }) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
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
