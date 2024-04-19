import FirstBanner from "./components/banner1/page";
import NewsBlogpage from "./components/banner10/page";
import SecondBanner from "./components/banner2/page";
import ThirdBanner from "./components/banner3/page";
import FourthBanner from "./components/banner4/page";
import FifthBanner from "./components/banner5/page";
import SixthBanner from "./components/banner6/page";
import SeventhBanner from "./components/banner7/page";
import EightBanner from "./components/banner8/page";
import Testimonial from "./components/banner9/page";
import Carousel from "./components/carousel/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import "./styles.css";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen">
        <div className="hidden md:block">
          <div
            className="flex justify-center py-2"
            style={{ backgroundColor: "#FEE7D6" }}
          >
            <div className="banner flex justify-center w-4/5">
              <p className="text-[12px] tracking-[.20em] lg:tracking-[.25em] font-medium">
                FLAT 10% OFF
                shop above Rs. 1500
              </p>
            </div>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <FirstBanner />
        </div>
        <div>
          <SecondBanner />
        </div>
        <div>
          <FifthBanner />
        </div>
        <div>
        <Testimonial />
        </div>
        
<div>
  <Footer />
</div>
      </main>
    </>
  );
}
