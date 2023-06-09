import Image from "next/image";

export default function About() {
  return (
    <section className="">
      <div>
        <Image
          src="/../public/Images/iphone-art-wallpapers-info.jpg"
          alt="iphone art wallpaper example"
          width={750}
          height={550}
        />
      </div>
      <div className="entry-content">
        <h2>Custom-made wallpapers to fit perfectly on your iPhone!</h2>

        <h2>F.A.Q. / Help</h2>
        <div>
          <p>
            I did not receive my wallpaper after I made my purchase. What should
            I do?
          </p>

          <p>
            The most likely reason is that the e-mail may have gone to your
            “Junk Mail” folder. Please check to see if it did. (If you locate
            the mail message, you can add us to your address book to ensure that
            you will receive your artwork in your Inbox the next time you place
            an order). If you cannot find the e-mail, please contact us at:
            hello@iphoneartwallpapers.com
          </p>

          <p>Why do I have to give my address to buy a wallpaper artwork? </p>

          <p>
            It allow us to pay the appropriate taxes applied to the customer. By
            default, all applicable VAT to the our prints and digital downloads
            are included in the price according to German VAT.
          </p>

          <p>How do I purchase a iPhone Art Wallpaper on the app? </p>

          <p>
            Once you have picked the wallpaper you like, please select the right
            wallpaper for for your particular device. Click on the purchase link
            to your cart, which you can access by clicking on the cart link in
            the top right menu.
          </p>

          <p>
            How soon can I get my order? With our smartphone wallpapers, you
            will receive artwork almost immediately. As soon as payment is
            confirmed you will receive a confirmation of your order by email
            with your attached artwork. If you do not receive an email, please
            contact us at: hello@iphoneartwallpapers.com
          </p>

          <p>I bought a art wallpaper, how do I download it? </p>

          <p>
            When you completed your purchase, you should have received an email
            from us that says, “iPhone Art Wallpapers: Your Download link for
            Order ####&lsquo;?&lsquo; If you have the email, look for the text
            that says, THIS IS YOUR LINK TO DOWNLOAD YOUR ARTWORK. Click on the
            link next to this text. The process involved in changing your
            wallpaper are very simple and take just a few steps.
          </p>

          <p>How do I set my Wallpaper as my home/lock screen on my iPhone?</p>

          <p>
            1. Go to Settings &gt; Wallpaper &gt; Choose a New Wallpaper. 2.
            Select your artwork from Photos or the folder you save your artwork
            to. 3. Tap Set. 4. Choose from the Set options - Set Lock Screen,
            Set Home Screen, or Set Both.
          </p>

          <p>
            If you&lsquo;re not satisfied iPhone Art Wallpaper, email us at
            hello@iphoneartwallpapers.com along with information about the type
            of phone you have. We&lsquo;ll be happy to customise the design so
            it looks best for you.
          </p>
        </div>
      </div>
    </section>
  );
}
