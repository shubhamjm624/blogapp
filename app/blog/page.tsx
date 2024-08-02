import Image from "next/image";
import WholeBlog from '@/components/WholeBlog';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <Header />
        <WholeBlog />
        <Footer />
    </div>
  );
}

