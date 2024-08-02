import Image from "next/image";
import WriteBlog from '@/components/WriteBlog';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <Header />
        <WriteBlog />
        <Footer />
    </div>
  );
}

