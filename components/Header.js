import Image from "next/image";
//import Link from "next/link";

export default Header;

function Header() {
  return (
    <div className="layout-header">
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
