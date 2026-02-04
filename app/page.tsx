import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";

export default function Home() {
  return <div className='flex min-h-screen flex-col bg-white px-16 py-8 mb-4'>
    <Navbar/>
    <Hero/>
  </div>;
}
