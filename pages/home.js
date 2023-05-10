import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/../public/Images/iphone-art-wallpapers.jpg"
        alt="iphone art wallpaper example"
        width={750}
        height={550}
      />
    </div>
  );
}
