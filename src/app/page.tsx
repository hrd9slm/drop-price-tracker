import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";


export default function Home() {
  return (<>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <Hero/>
  </main>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <Features/>
  </main>



</>
   
    
  );
}
