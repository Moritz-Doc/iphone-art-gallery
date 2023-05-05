import Header from "./Header";
import Card from "./Card";
//import ArtistProfile from "./ArtistProfile";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <container>{children}</container>
      <Footer />
    </>
  );
}
