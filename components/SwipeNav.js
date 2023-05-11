import Image from "next/image";
import Link from "next/link";

function SwipeNav({ currentArtwork, swiper }) {
  console.log("current:", currentArtwork);

  function slideBack() {
    swiper.current.swiper.slidePrev();
  }

  function slideForward() {
    swiper.current.swiper.slideNext();
  }

  function setFavorite() {
    console.log("ADD TO FAVORITE");
    slideForward();
  }

  return (
    <div className="layout-swipe-nav">
      <Image
        src="/../public/SwipeNavWhite/GobackSwipe.png"
        alt="GoBack"
        width={60}
        height={60}
        onClick={() => slideBack()}
      />
      <Image
        src="/../public/SwipeNavWhite/NextSwipe.png"
        alt="Next"
        width={60}
        height={60}
        onClick={() => slideForward()}
      />
      <Link href={"/home"}>
        <Image
          src="/../public/SwipeNavWhite/HomeSwipe.png"
          alt="Home"
          width={60}
          height={60}
        />
      </Link>

      <Image
        src="/../public/SwipeNavWhite/HeartSwipe.png"
        alt="Favourites"
        width={60}
        height={60}
        onClick={() => setFavorite()}
      />

      <Link href={"/about"}>
        <Image
          src="/../public/SwipeNavWhite/About.png"
          alt="About"
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
}

export default SwipeNav;
