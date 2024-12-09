import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedContent from "@/components/featured-content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedContent />
      </main>
      <Footer />
    </div>
  );
}
