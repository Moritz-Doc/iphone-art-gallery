import Image from "next/image";
//import Link from "next/link";

export default SwipeNav;

function SwipeNav() {
  return (
    <div className="layout-swipe-nav">
      <Image
        src="/../public/SwipeNav/GobackSwipe.png"
        alt="Art"
        width={100}
        height={100}
      />
      <Image
        src="/../public/SwipeNav/NextSwipe.png"
        alt="Account"
        width={100}
        height={100}
      />
      <Image
        src="/../public/SwipeNav/HomeSwipe.png"
        alt="Account"
        width={100}
        height={100}
      />
      <Image
        src="/../public/SwipeNav/LikeSwipe.png"
        alt="Account"
        width={100}
        height={100}
      />
      <Image
        src="/../public/SwipeNav/FavouritesSwipe.png"
        alt="Account"
        width={100}
        height={100}
      />
    </div>
  );
}
