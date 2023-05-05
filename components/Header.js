import Image from "next/image";
//import Link from "next/link";

export default Header;

function Header() {
  return (
    <div className="layout-header">
      <Image
        src="/../public/NavIcons/ArtNav.png"
        alt="Account"
        width={45}
        height={45}
      />
    </div>
  );
}
