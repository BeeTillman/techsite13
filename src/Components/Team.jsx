import React, { useEffect, useRef } from "react";
import tpsitePfpMPatel from "url:../images/tpsitePfpMPatel.png";
import tpsitePfpMThrasher from "url:../images/tpsitePfpMThrasher.png";
import tpsitePfpJClements from "url:../images/tpsitePfpJClements.png";
import tpsitePfpSChaney from "url:../images/tpsitePfpSChaney.png";
import tpsitePfpJShirling from "url:../images/tpsitePfpJShirling.png";
import tpsitePfpKLindsay from "url:../images/tpsitePfpKLindsay.png";
import tpsitePfpMDebs from "url:../images/tpsitePfpMDebs.png";
import tpsitePfpSSteen from "url:../images/tpsitePfpSSteen.png";
import tpsitePfpARobben from "url:../images/tpsitePfpARobben.png";
import tpsitePfpLFouts from "url:../images/tpsitePfpLFouts.png";
import tpsitePfpJEason from "url:../images/tpsitePfpJEason.png";
import tpsitePfpJJohnson from "url:../images/tpsitePfpJJohnson.png";
import tpsitePfpJMontag from "url:../images/tpsitePfpJMontag.png";
import tpsitePfpZWatkins from "url:../images/tpsitePfpZWatkins.png";
import tpsitePfpDGreen from "url:../images/tpsitePfpDGreen.png";
import tpsitePfpJLittle from "url:../images/tpsitePfpJLittle.png";
import tpsitePfpADino from "url:../images/tpsitePfpADino.png";
import tpsitePfpDDiener from "url:../images/tpsitePfpDDiener.png";
import tpsitePfpHBailey from "url:../images/tpsitePfpHBailey.png";
import tpsitePfpSDAngelo from "url:../images/tpsitePfpSDAngelo.png";
import tpsitePfpBTillman from "url:../images/tpsitePfpBTillman.png";
import tpsitePfpBVargas from "url:../images/tpsitePfpBVargas.png";
import tpsitePfpCBrauer from "url:../images/tpsitePfpCBrauer.png";
import tpsitePfpJDavenport from "url:../images/tpsitePfpJDavenport.png";
import tpsitePfpKHarrison from "url:../images/tpsitePfpKHarrison.png";
import tpsitePfpNAkula from "url:../images/tpsitePfpNAkula.png";
import tpsitePfpPhutson from "url:../images/tpsitePfpPhutson.png";

const teamMembers = [
  { name: "Manish Patel", title: "CEO & Founder", image: tpsitePfpMPatel },
  { name: "Michael Thrasher", title: "Developer & Consultant", image: tpsitePfpMThrasher },
  { name: "Billups Tillman", title: "Developer & Consultant", image: tpsitePfpBTillman },
  { name: "Josh Clements", title: "Developer & Consultant", image: tpsitePfpJClements },
  { name: "Steven Chaney", title: "Developer & Consultant", image: tpsitePfpSChaney },
  { name: "Jeff Shirling", title: "Developer & Consultant", image: tpsitePfpJShirling },
  { name: "Kevin Lindsay", title: "Developer & Consultant", image: tpsitePfpKLindsay },
  { name: "Michael Debs", title: "Developer & Consultant", image: tpsitePfpMDebs },
  { name: "Sebastian Steen", title: "Developer & Consultant", image: tpsitePfpSSteen },
  { name: "Amy Robben", title: "Developer & Consultant", image: tpsitePfpARobben },
  { name: "Lexi Fouts", title: "Developer & Consultant", image: tpsitePfpLFouts },
  { name: "Jordan Eason", title: "Developer & Consultant", image: tpsitePfpJEason },
  { name: "Jordan Johnson", title: "Developer & Consultant", image: tpsitePfpJJohnson },
  { name: "Josh Montag", title: "Developer & Consultant", image: tpsitePfpJMontag },
  { name: "Zach Watkins", title: "Developer & Consultant", image: tpsitePfpZWatkins },
  { name: "Dustin Green", title: "Developer & Consultant", image: tpsitePfpDGreen },
  { name: "John Little", title: "Developer & Consultant", image: tpsitePfpJLittle },
  { name: "Alec Dino", title: "Developer & Consultant", image: tpsitePfpADino },
  { name: "Dylan Diener", title: "Developer & Consultant", image: tpsitePfpDDiener },
  { name: "Hunter Bailey", title: "Developer & Consultant", image: tpsitePfpHBailey },
  { name: "Stephen D'Angelo", title: "Developer & Consultant", image: tpsitePfpSDAngelo },
  { name: "Calvin Brauer", title: "Developer & Consultant", image: tpsitePfpCBrauer },
  { name: "Jerrod Davenport", title: "Developer & Consultant", image: tpsitePfpJDavenport },
  { name: "Kyle Harrison", title: "Developer & Consultant", image: tpsitePfpKHarrison },
  { name: "Nithya Akula", title: "Developer & Consultant", image: tpsitePfpNAkula },
  { name: "Patrick Hutson", title: "Developer & Consultant", image: tpsitePfpPhutson },
  { name: "Bryan Vargas", title: "Developer & Consultant", image: tpsitePfpBVargas },
];

const Team = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (window.Swiper && swiperRef.current) {
      new window.Swiper(swiperRef.current, {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 20 }
        }
      });
    }
  }, []);

  return (
    <section id="our-team" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>
            Meet the dedicated individuals who make up the heart and soul of our company. 
            Our employees are a diverse and talented group, working together to bring 
            innovation and excellence to everything we do.
          </p>
        </div>

        <div ref={swiperRef} className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="300">
          <div className="swiper-wrapper">
            {teamMembers.map((member, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial-item">
                  <img src={member.image} className="testimonial-img" alt={member.name} />
                  <h3>{member.name}</h3>
                  <h4>{member.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
