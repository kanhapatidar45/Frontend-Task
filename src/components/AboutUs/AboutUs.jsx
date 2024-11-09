import AboutHero from "./AboutHero";
import Footer from "../ContactUs/Footer";
import JoinTeam from "./JoinTeam";
import MissionVision from "./Missionvision";
import TeamSection from "./TeamSection";


function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AboutHero/>
        <MissionVision/>
        <TeamSection/>
        <JoinTeam/>
        <Footer/>
      </main>
    </div>
  );
}

export default AboutUs;