import React from "react";
import Hero from "./1_Hero";
import Why_Choose_us from "./2_Why_Choose_us";
import Ower_Goal from "./3_Ower_Goal";
import Services from "./4_Services";
import Clients_said from "./5_Clients_said";
import Contact from "./6_Contact";
// import Footer from "./7_Footer";
function Home() {
    return (
        <>
            <Hero />
            <Why_Choose_us />
            <Ower_Goal />
            <Services />
            <Clients_said />
            <Contact />
            {/* <Footer /> */}
        </>
    );
}

export default Home;
