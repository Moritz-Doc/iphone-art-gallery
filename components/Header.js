import Image from "next/image";
//import Link from "next/link";

export default Header;

function Header() {
  return (
    <div className="layout-header">
      Im the header
      <Image
        scr="../NavIcons/Account.png"
        width={45}
        height={45}
        alt="Account"
      />
    </div>
  );
}
