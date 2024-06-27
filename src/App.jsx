import { useRef } from 'react';
import profile from './prof.jpg';
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import { FaUser, FaCode, FaCodeBranch, FaUserGraduate, FaPhoneAlt, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import CardGrid from './CardGrid';
import ExperienceCard from './Experience';
import EducationList from './Education';

function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <div ref={ref} className="page1 ">
        <section className="photo">
          <img src={profile}></img>
          <button>My resume</button>
        </section>

        <section className="intro">
          <h4>Hello, I am Bishal <br /> I am a &nbsp;
            <TypeAnimation
              sequence={[
                "Machine learning Enthusiast", 1000,
                "Programmer", 1000,
                "Tinkerer", 1000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            /></h4>
          <p>I'm a programmer driven by curiosity and challenges. My passion for coding and attention to detail fuel my dedication to producing high-quality work while continuously learning. I enjoy tackling complex problems and developing innovative solutions, ensuring each project is an opportunity to expand my knowledge and skills. My goal is to make meaningful contributions and grow as a versatile developer.</p>
        </section>
      </div>
      <div ref={ref1} className='page2'>
        <CardGrid />
      </div>
      <div ref={ref2} className='page3'>
        <ExperienceCard />
      </div>
      <div ref={ref3} className='page4'>
        <EducationList />
      </div>
      <section className="sideBar">
        <div id="sidebarButton" onClick={() => handleClick(ref)}><FaUser />About</div>
        <div id="sidebarButton" onClick={() => handleClick(ref1)}><FaCode />Projects</div>
        <div id="sidebarButton" onClick={() => handleClick(ref2)}><FaCodeBranch />Internships</div>
        <div id="sidebarButton" onClick={() => handleClick(ref3)}><FaUserGraduate />Education</div>
      </section>
      <div id="sidebarButtonContact"><FaPhoneAlt />Contact Me</div>

      <section className="contacts">
        <h2><FaGithub className='icons' />  <FaTwitter className='icons' />  <FaLinkedin className='icons' /></h2>
      </section>
    </div>
  );
}

export default App;
