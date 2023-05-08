import Image from "next/image";
//import Link from "next/link";

function SwipeNav() {
  return (
    <div className="layout-swipe-nav">
      <Image
        src="/../public/SwipeNav/GobackSwipe.png"
        alt="Art"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNav/NextSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNav/HomeSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNav/LikeSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNav/FavouritesSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
    </div>
  );
}

export default SwipeNav;
