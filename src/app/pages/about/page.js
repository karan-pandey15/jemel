
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar/page";
import "./Aboutpagestyle.css"
import firstImg from "../../../../public/about-1.jpg";
import thirdImg from "../../../../public/about-3.jpg";
import fourthImg from "../../../../public/about-7.jpg";


import fifthImg from "../../../../public/jemelproduct.jpg";
import sixthImg from "../../../../public/jemelproduct2.webp";
import Footer from "@/app/components/footer/page";

const About = () => {

    return (
        <>
            <div style={{ backgroundColor: '#FEE7D6' }} >

                <div style={{ backgroundColor: '#fff' }} >
                    <Navbar />
                </div>
                <div className="aboutmain_container" >
                    <div className="aboutcontent_container" >
                        <p className="acoutcontent_paraone">WHO WE ARE</p>
                        <h1>Jewelry is a Heartfelt Tribute</h1>
                        <p className="acoutcontent_paratwo">Maylis Green, where every piece of jewelry is a heartfelt tribute to the multifaceted triumphs of women across all the diverse roles they play in society. We celebrate the indomitable spirit of women who have left an indelible mark on history through their remarkable contributions in science, art, commerce, sports, education, healthcare, activism, leadership, and the cherished roles of a housewife and mother. Our jewellery, crafted with care and precision, is a salute to the diversity of women's conquests. Each piece tells a story of success, mirroring the elegance, power, and individuality of those who dare to lead and blaze new trails.</p>
                        <p className="paraborder" ></p>
                        <div className="three_content_container" >
                            <div className="paracontent_one" >
                                <span>72 St. Merch Street, <br /> <span>LA,New Delhi.</span>  </span>
                            </div>
                            <span className="paracontent_two"  >  +00 123 456789 </span>
                            <span className="paracontent_three" >jemel@support.com  </span>
                        </div>
                    </div>
                    <div className="aboutimage_container"  >
                        <Image className="about_pageimage" src={sixthImg} />
                    </div>
                </div>



                <div className="aboutmain_container" >
                    <div className="second_aboutimage_container"  >
                        <Image className="about_page_secimage" src={fifthImg} />
                        <Image className="about_page_secimage" src={sixthImg} />

                    </div>
                    <div className="aboutcontent_container" >
                        <p className="acoutcontent_paraone">What we believe</p>
                        <h1>Balance—Melding Sophistication</h1>
                        <p className="acoutcontent_paratwo">We believe in the power of balance—melding sophistication with innovation in each piece of jewellery we create. Our petite yet impactful silver collection embodies the resilience and grace that women carry through every challenge they face. This resilience is at the core of our philosophy: to craft jewellery that captures the essence of the indomitable spirit that women display as they make indelible marks in the world. Our collection mirrors the intricate balance of finesse and pioneering spirit found in the lives of women who've forged paths through the toughest glass ceilings.</p>

                        <div className="secondpara_heading" >
                            <div className="childsecond_container">
                                <h2 className="secondheading" >Opening Hours</h2>
                                <p>Mon - Fri : 08:30 - 20:00</p>
                                <p>Sat & Sun : 09:30 - 21:30</p>
                            </div>


                            <div className="childsecond_container">
                                <h2 className="secondheading" >Reach Us</h2>
                                <p>jemel@support.com</p>
                                <p>+000 123 456789</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: 50, marginBottom: 10 }} >OUR TEAM</p>
            <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 'bold' }} > Experts</h1>

            <div className="our_team_container" >
                <div className="our_team_content_container" >
                    <Image className="our_teamcontainner_img" src={fourthImg} />
                    <h2 className="our_teamheading">Nicloas</h2>
                    <p style={{ marginBottom: 20 }}>Product Manager</p>
                </div>

                <div className="our_team_content_container" >
                    <Image className="our_teamcontainner_img" src={firstImg} />
                    <h2 className="our_teamheading">Niyama</h2>
                    <p style={{ marginBottom: 20 }}>CEOr</p>
                </div>

                <div className="our_team_content_container" >
                    <Image className="our_teamcontainner_img" src={thirdImg} />
                    <h2 className="our_teamheading">Mark</h2>
                    <p style={{ marginBottom: 20 }}>Founder</p>
                </div>


                <div className="our_team_content_container" >
                    <Image className="our_teamcontainner_img" src={fourthImg} />
                    <h2 className="our_teamheading">Bernita</h2>
                    <p style={{ marginBottom: 20 }}>Co-founder</p>
                </div>
            </div>
                <Footer />
        </>

    );
};

export default About;

