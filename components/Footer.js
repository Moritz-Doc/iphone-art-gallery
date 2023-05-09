import Image from "next/image";
import Link from "next/link";

export default Footer;

function Footer() {
  return (
    <footer className="layout-footer">
      <div className="wrapper right">
        <Link
          href="https://www.instagram.com/iphoneartwallpapers"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <>
            <Image
              className="layout-footer"
              src="/../public/FooterNav/Favourites.png"
              alt="Instagram iPhone Art Wallpapers"
              width={60}
              height={60}
            />
          </>
        </Link>

        <Link
          href="https://www.instagram.com/iphoneartwallpapers"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <>
            <Image
              className="layout-footer"
              src="/../public/FooterNav/Instagram.png"
              alt="Instagram iPhone Art Wallpapers"
              width={60}
              height={60}
            />
          </>
        </Link>

        <Link
          href="https://twitter.com/iPhoneArtWall"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <>
            <Image
              className="layout-footer"
              src="/../public/FooterNav/Twitter.png"
              alt="Twitter iPhone Art Wallpapers"
              width={60}
              height={60}
            />
          </>
        </Link>
      </div>
    </footer>
  );
}
