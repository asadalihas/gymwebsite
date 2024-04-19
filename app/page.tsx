import About from "@/components/About";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
   <main className="bg-white">
    <Hero />
    <About />
    <Classes />
    <Membership />
    <Testimonial />
   </main>
  );
}
