import Image from "next/image";
import Link from "next/link";

export default Header;

function Header() {
  return (
    <header className="layout-header">
      <nav>
        <Link href={"/account"}>
          <Image
            src="/../public/TopNav/Account.png"
            alt="Account"
            width={60}
            height={60}
          />
        </Link>

        <Link href={"/"}>
          <Image
            src="/../public/TopNav/Art.png"
            alt="Account"
            width={60}
            height={60}
          />
        </Link>

        <Link href={"cart"}>
          <Image
            src="/../public/TopNav/Cart.png"
            alt="Art"
            width={60}
            height={60}
          />
        </Link>
      </nav>
    </header>
  );
}
