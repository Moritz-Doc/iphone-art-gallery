import Image from "next/image";
//import Link from "next/link";

export default Footer;

function Footer() {
  return (
    <footer className="layout-footer">
      <Image
        src="/../public/FooterNav/About.png"
        alt="Account"
        width={60}
        height={60}
      />
      <div className="wrapper right">
        <Image
          src="/../public/FooterNav/Twitter.png"
          alt="Account"
          width={60}
          height={60}
        />
        <Image
          src="/../public/FooterNav/Instagram.png"
          alt="Art"
          width={60}
          height={60}
        />
      </div>
    </footer>
  );
}
