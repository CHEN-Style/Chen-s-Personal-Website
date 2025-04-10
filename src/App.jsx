import { useState } from 'react'
import './App.css'
import './style/button.css'
import AnimatedContent from './components/AnimatedContent'

import ArrowIcon from './svgs/ArrorIcon'
import GithubIcon from './svgs/GithubIcon'
import PostIcon from './svgs/PostIcon'
import ShinyText from './components/ShinyText'

import todoPic from './pic/todolist-proj.png'

function App() {
  const [lang, setLang] = useState('en')

  const translations = {
    en: {
      home: "Home",
      about: "About",
      work: "Work",
      exp: "Experience",
      contact: 'Contact',
    },
    zh: {
      home: "首页",
      about: "关于",
      work: "作品",
      exp: "经历",

    }
  }
  const t = translations[lang]

  return (
    <>
      <div className='header'>
        <div className='navigationBar'>
          <p className='navigationBarText'>{t.home}</p>
          <p className='navigationBarText'>{t.about}</p>
          <p className='navigationBarText'>{t.work}</p>
          <p className='navigationBarText'>{t.exp}</p>
          <p className='navigationBarText'>{t.contact}</p>
        </div>
      </div>
      <div className='home'>
        <div className='home-box'>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <p className='home-smallHeader'>Hi, my name is</p>
            <p className='home-name'>Ethan Wang</p>
            <p className='home-role'>I'm a Software Engineer</p>
            <p className='home-brief text-hover'>I have a strong passion for software engineering with experience building{' '} 
                                      <span style={{color: 'var(--main-color-light)'}}>Full Stack</span>{' '}
                                       web applications and applying {' '}
                                      <span style={{color: 'var(--main-color-light)'}}>Deep Learning</span>{' '}
                                       to solve real-world problems. </p>
            <button className='home-button'>View Portfolio</button>
          </AnimatedContent>
        </div>
      </div>
      <div className='about'>
        <div className='about-box'>
        <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
          <div className='about-left'>
            <div className='about-me'>About Me</div>
            <p className='about-para text-hover'>Hi there! My name is Ethan and I love creating useful web applications that could help others and myself.</p>
            <p className='about-para text-hover'>My interest in {' '}<span style={{color: 'var(--main-color-light)'}}>web development</span>{' '}  began with a front-end development course I took at UNSW in 2024, where I learned to build my own website and develop productivity tools.</p>
            <p className='about-para text-hover'>Today, I have graduated from the University of New South Wales Master of IT and worked as a full stack engineer at RED BLACK TREE TECHNOLOGIES PTY LTD!</p>
            <p className='about-para text-hover'>Here are a few technologies I've been working with recently!</p>
            <div className='about-skill'>
              <div className='about-skill-row'>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:'5px', width:'100px'}}><ArrowIcon/><p>JavaScript</p></div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:'5px', width:'100px'}}><ArrowIcon/><p>React.js</p></div>
              </div>
              <div className='about-skill-row'>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:'5px', width:'100px'}}><ArrowIcon/><p>Node.js</p></div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:'5px', width:'100px'}}><ArrowIcon/><p>PostgreSQL</p></div>
              </div>
              <div className='about-skill-row'>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:'5px', width:'100px'}}><ArrowIcon/><p>PyTorch</p></div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:'5px', width:'100px'}}><ArrowIcon/><p>CNN</p></div>
              </div>
            </div>
          </div>
          </AnimatedContent>
          <div className='about-right'></div>
        </div>
      </div>
      <div className='work'>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
        <div className='work-box'>
          <div className='work-header'>Where I've Worked</div>
          {/* <div className='work-compName'>RED BLACK TREE TECHNOLOGIES PTY LTD</div> */}
          <ShinyText text="RED BLACK TREE TECHNOLOGIES PTY LTD" disabled={false} speed={2.5} className='work-compName' />
          <div className='work-contentBox'>
            <div className='work-role text-hover'>Full Stack Engineer</div>
            <p className='work-time text-hover'>Nov 2024 - Mar 2025</p>
            <div className='work-content' style={{marginTop: '20px'}}>
              <div style={{width:'30px', paddingRight: '20px', paddingTop:'5px'}}>
                <ArrowIcon/>
              </div>
              <p className='work-content-text text-hover'>Independently designed and developed a fully functional, 
                                        performance-optimized modern online forum system, RBT Forum, 
                                        covering the full project lifecycle from requirements analysis, 
                                        system architecture design, 
                                        front- and back-end development.</p>
            </div>
            <div className='work-content' style={{marginTop: '20px'}}>
              <div style={{width:'30px', paddingRight: '20px', paddingTop:'5px'}}>
                <ArrowIcon/>
              </div>
              <p className='work-content-text text-hover'>Ensured a clean project structure and high code quality with strong emphasis on maintainability and scalability.</p>
            </div>
            <div className='work-content' style={{marginTop: '20px'}}>
              <div style={{width:'30px', paddingRight: '20px', paddingTop:'5px'}}>
                <ArrowIcon/>
              </div>
              <p className='work-content-text text-hover'>Achieved excellent user experience through meticulous performance optimization.</p>
            </div>
    
          </div>
        </div>
        </AnimatedContent>
      </div>
      <div className='project'>
        <div className='project-box'>
          <div className='project-header'>My Noteworthy Projects</div>
          <div className="project-container" style={{marginTop: '60px'}}>
            <a
              href="https://chen-style.github.io/todolist-deploy/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-left-pic"
            >
              <img src={todoPic} alt="todo" />
            </a>
            <div className="project-right-info">
              <p className='project-right-header'>Featured Project</p>
              <p className='project-right-title'>Todo List</p>
              <div className='project-right-card'>
                <p className="description">Netflix is a subscription-based streaming service ...</p>
              </div>
              <div className='project-right-skillset'>
                <p className='project-skill'>React</p>
                <p className='project-skill'>Vite</p>
                <p className='project-skill'>HTML</p>
                <p className='project-skill'>CSS</p>
              </div>
              <div className='project-right-iconBox'>
                <a
                  href="https://github.com/CHEN-Style/TodoList"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='link-hover'
                >
                  <GithubIcon/> 
                </a>
                <a
                  href="https://github.com/CHEN-Style/TodoList"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='link-hover'
                >
                  <PostIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
