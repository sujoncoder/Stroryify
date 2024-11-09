import BlogList from "@/components/home/BlogList";
import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Header />
      <Hero />
      <BlogList />
      <Footer />
    </div>
  );
}
