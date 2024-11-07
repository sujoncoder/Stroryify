import BlogList from "@/components/home/BlogList";
import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BlogList />
      <Footer />
    </div>
  );
}
