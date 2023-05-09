import Image from "next/image";
//import Link from "next/link";

function SwipeNav() {
  return (
    <div className="layout-swipe-nav">
      <Image
        src="/../public/SwipeNavWhite/GobackSwipe.png"
        alt="Art"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNavWhite/NextSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNavWhite/HomeSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNavWhite/HeartSwipe.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/SwipeNavWhite/About.png"
        alt="Account"
        width={60}
        height={60}
      />
    </div>
  );
}

export default SwipeNav;
