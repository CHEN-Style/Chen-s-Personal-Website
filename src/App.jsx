import { useState } from 'react'
import './App.css'
import './style/button.css'
import AnimatedContent from './components/AnimatedContent'
import TiltedCard from './components/TiltedCard'

import ArrowIcon from './svgs/ArrorIcon'
import GithubIcon from './svgs/GithubIcon'
import PostIcon from './svgs/PostIcon'
import FolderIcon from './svgs/FolderIcon'
import Leetcode from './svgs/Leetcode'
import ShinyText from './components/ShinyText'

import photo from './pic/Photo.png'
import todoPic from './pic/todolist-proj.png'
import RbtPic from './pic/RBT.png'
import Recommend from './pic/Recommend.png'


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
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div className='about-right'>
              <div className='about-photo-box'>
                <TiltedCard
                  imageSrc={photo}
                  altText="Personal pic"
                  captionText="This is me"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      This is me
                    </p>
                  }
                />
              </div>
            </div>
          </AnimatedContent>

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
                                        front-end and back-end development.</p>
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
                  <p className="description">This is a lightweight memo website that makes it convenient for people to record pending tasks and set priorities</p>
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
          </AnimatedContent>
          
          <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          >
            <div className="project-container" style={{marginTop: '60px', flexDirection: 'row-reverse'}}>
              <a
                href="https://chen-style.github.io/todolist-deploy/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-left-pic"
              >
                <img src={RbtPic} alt="RBT" />
              </a>
              <div className="project-left-info">
                <p className='project-right-header'>Featured Project</p>
                <p className='project-right-title'>RBT Forum</p>
                <div className='project-left-card'>
                  <p className="description">This is a lightweight memo website that makes it convenient for people to record pending tasks and set priorities</p>
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
          </AnimatedContent>
          
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
            <div className="project-container" style={{marginTop: '60px'}}>
              <a
                href="https://chen-style.github.io/todolist-deploy/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-left-pic"
              >
                <img src={Recommend} alt="todo" />
              </a>
              <div className="project-right-info">
                <p className='project-right-header'>Featured Project</p>
                <p className='project-right-title'>Recommend System</p>
                <div className='project-right-card'>
                  <p className="description">This is a lightweight memo website that makes it convenient for people to record pending tasks and set priorities</p>
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
          </AnimatedContent>

        </div>
      </div>
      <div className='sundary'>
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
          <div className='sundary-header'>Other Noteworthy Things</div>
          <div className='sundary-card-box'>

            <div className='sundary-card'>
              <div className='sundary-card-icon-box'>
                <FolderIcon/>
                <div className='sundary-card-icon-box2'>
                  <GithubIcon/>
                  <PostIcon/>
                </div>
              </div>
              <div className='sundary-card-title'>Online Library Platform</div>
              <div className='sundary-card-context'>Multifunctional e-commerce application that allows users to browse and purchase books online.</div>
              <div className='sundary-card-skillset'>
                <div className='sundary-card-skill'>JavaScript</div>
                <div className='sundary-card-skill'>Python</div>
              </div>
            </div>

            <div className='sundary-card'>
              <div className='sundary-card-icon-box'>
                <FolderIcon/>
                <div className='sundary-card-icon-box2'>
                  <GithubIcon/>
                  <PostIcon/>
                </div>
              </div>
              <div className='sundary-card-title'>Online Library Platform</div>
              <div className='sundary-card-context'>A minimalistic todo list web application made with SvelteKit. Comes with all the essential functionality like add, edit and delete.</div>
              <div className='sundary-card-skillset'>
                <div className='sundary-card-skill'>JavaScript</div>
                <div className='sundary-card-skill'>Python</div>
              </div>
            </div>

            <div className='sundary-card'>
              <div className='sundary-card-icon-box'>
                <FolderIcon/>
                <div className='sundary-card-icon-box2'>
                  <GithubIcon/>
                  <PostIcon/>
                </div>
              </div>
              <div className='sundary-card-title'>Online Library Platform</div>
              <div className='sundary-card-context'>Multifunctional e-commerce application that allows users to browse and purchase books online.</div>
              <div className='sundary-card-skillset'>
                <div className='sundary-card-skill'>JavaScript</div>
                <div className='sundary-card-skill'>Python</div>
              </div>
            </div>

          </div>
        </AnimatedContent>
      </div>

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
        <div className='contact'>
          <div className='contact-header1'>What's Next?</div>
          <div className='contact-header2'>Get In Touch</div>
          <div className='contact-text text-hover'>I am currently looking for new opportunities so my inbox is always open. Whether you have a question or just want to say hi, please send me a message and I'll get back to you!</div>
          <button className='home-button'>Say Hello</button>
        </div>
      </AnimatedContent>
      <div className='blank' style={{height: '200px'}}></div>
      <div className='left-bar'>
        <GithubIcon/>
        <Leetcode/>
        <div className='line'></div>
      </div>
      <div className='right-bar'>
        <div className='right-bar-email text-hover'>ChenStyle2022@outlook.com</div>
        <div className='line'></div>
      </div>
    </>
  )
}

export default App
