import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaCode, FaEnvelope, FaQuoteLeft, FaUser } from "react-icons/fa6";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Projects", link: "#projects", icon: <FaCode /> },
    { name: "Testimonials", link: "#testimonials", icon: <FaQuoteLeft /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-cols mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Grid/>
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
      </div>
    </main>
  );
}
