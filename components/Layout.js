import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <container>{children}</container>
      <Footer />
    </>
  );
};

export default RootLayout;
