import Image from "next/image";

import { TypeAnimation } from 'react-type-animation'
import Footer from "./components/footer";
import WelcomePage from "./components/welcome-blurb";

export default function Home() {
  return (
    <main className="flex flex-col justify-start min-h-screen border border-green-300 p-16">
      <WelcomePage/>
      <Footer/>
    </main>
  );
}
