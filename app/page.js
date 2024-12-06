import Horizon from "@/components/Horizon";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Image from "next/image";
import Grid from "@/components/Grid";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div >
 <Navbar />
 <Slider />
<Horizon />
<Grid />
<Brand />
<Footer />
  </div>
  );
}
