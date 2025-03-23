import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col max-w-7xl mx-auto">
        <Hero />
        <ServicesSection />
      </main>
    </SmoothScroll>
  );
}
