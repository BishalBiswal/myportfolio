import { useRef, useState, useEffect, useMemo } from 'react';
import profile from './prof.jpg';
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import { FaUser, FaCode, FaCodeBranch, FaUserGraduate, FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import CardGrid from './CardGrid';
import ExperienceCard from './Experience';
import EducationList from './Education';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
const App = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(24, 24, 28, 1)",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "rgb(219, 15, 96)",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className="App">
        <div ref={ref} className="page1 ">
          <section className="photo">
            <img src={profile}></img>
            <a href="https://drive.google.com/file/d/1MJ5_JGecqyLAjTbhG8E7l05ZJp87Ho30/view?usp=sharing"><button>My resume</button></a>
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
        <a href="mailto:bishalbiswalq@gmail.com"><div id="sidebarButtonContact"><FaEnvelope />Contact Me</div></a>

        <section className="contacts">
          <h2><a href='https://github.com/BishalBiswal'><FaGithub className=' icons' /></a>  <a href="https://x.com/calixlete"><FaTwitter className='icons' /></a>  <a href="https://www.linkedin.com/in/bishal-biswal-9157731ba/"><FaLinkedin className='icons' /></a></h2>
        </section>
      </div>
    </>
  );
}

export default App;
