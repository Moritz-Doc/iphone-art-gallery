import Image from "next/image";
//import Link from "next/link";

export default SwipeNav;

function SwipeNav() {
  return (
    <div className="layout-swipe-nav">
      <Image
        src="/../public/NavIcons/ArtNav.png"
        alt="Art"
        width={60}
        height={60}
      />
      <Image
        src="/../public/NavIcons/Account.png"
        alt="Account"
        width={60}
        height={60}
      />
      <Image
        src="/../public/NavIcons/CartNav.png"
        alt="Account"
        width={60}
        height={60}
      />
    </div>
  );
}
