import Image from "next/image";

import Footer from "./components/footer";
import WelcomePage from "./components/welcome-blurb";
import LinksGallery from "./components/links-gallery/links-gallery";

export default function Home() {
  return (
    <main className="flex flex-col justify-start min-h-screen border-red-300 p-16">
      <WelcomePage/>
      <LinksGallery/>
      <Footer/>
    </main>
  );
}
