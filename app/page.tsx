import Footer from "./ui/footer";
import WelcomeBlurb from "./ui/welcome-blurb";
import LinksGallery from "./ui/links-gallery/links-gallery";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen border-red-300">
      <div className="border-green-300 pt-16 px-8 sm:px-16 justify-center mb-auto sm:mx-16">
        <WelcomeBlurb/>
        <LinksGallery/>
      </div>
      <Footer/>
    </main>
  );
}
