import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/../public/Images/iphone-art-wallpapers.jpg"
          alt="iphone art wallpaper example"
          width={750}
          height={550}
        />
      </div>
      <div>
        <h2 className="art">
          <Link href="/">iPhoneArtWallpapers.com</Link>
        </h2>
      </div>

      <div>
        <Link href={"/"}>
          <Image
            src="/../public/TopNav/Art.png"
            alt="Account"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </>
  );
}
