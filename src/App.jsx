import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './App.css'
import './style/button.css'
import AnimatedContent from './components/AnimatedContent'
import TiltedCard from './components/TiltedCard'
import resume from './file/resume.pdf'

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
  const [showModal, setShowModal] = useState(false)

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

  const [showHeader, setShowHeader] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 是否在页面最顶部
      setAtTop(currentScrollY === 0);

      // 判断向上滚动 or 向下滚动
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // 向下滚动，隐藏 header
      } else {
        setShowHeader(true);  // 向上滚动，显示 header
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleProjectClick = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Project display permission is under way</h3>
            <p>This project is applying for display permission and is temporarily unavailable.</p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      )}
      <div className={`header ${showHeader ? 'visible' : 'hidden'} ${atTop ? 'at-top' : ''}`}>
        <div className='navigationBar'>
          <Link className='navigationBarText' to='home' smooth={true} duration={700} offset={-80}>{t.home}</Link>
          <Link className='navigationBarText' to='about' smooth={true} duration={700} offset={-80}>{t.about}</Link>
          <Link className='navigationBarText' to='work' smooth={true} duration={700} offset={-80}>{t.work}</Link>
          <Link className='navigationBarText' to='project' smooth={true} duration={700} offset={-80}>{t.exp}</Link>
          <Link className='navigationBarText' to='contact' smooth={true} duration={700} offset={-80}>{t.contact}</Link>
          <a 
            href={resume} 
            download="Ethan_Wang_Resume.pdf" 
            className='navigationBarText'
            style={{ textDecoration: 'none' }}
          >
            Resume
          </a>
        </div>
      </div>
      <div className='home' id='home'>
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
            <Link to='about' smooth={true} duration={700} offset={-80}><button className='home-button'>View Portfolio</button></Link>
          </AnimatedContent>
        </div>
      </div>
      <div className='about' id='about'>
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
          </AnimatedContent>

        </div>
      </div>
      <div className='work' id='work'>
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
      <div className='project' id='project'>
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
                href="#"
                onClick={handleProjectClick}
                className="project-left-pic"
              >
                <img src={RbtPic} alt="RBT" />
              </a>
              <div className="project-left-info">
                <p className='project-right-header'>Featured Project</p>
                <p className='project-right-title'>RBT Forum</p>
                <div className='project-left-card'>
                  <p className="description">This is a forum platform for university students to discuss courses, 
                    view course details and exchange course experiences.</p>
                </div>
                <div className='project-right-skillset'>
                  <p className='project-skill'>React</p>
                  <p className='project-skill'>Vite</p>
                  <p className='project-skill'>Node</p>
                  <p className='project-skill'>PostgreSQL</p>
                  <p className='project-skill'>Docker</p>
                </div>
                <div className='project-right-iconBox'>
                  <a
                    href="#"
                    onClick={handleProjectClick}
                    className='link-hover'
                  >
                    <GithubIcon/> 
                  </a>
                  <a
                    href="#"
                    onClick={handleProjectClick}
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
                href="https://github.com/CHEN-Style/Team-Project-Recommended-System"
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
                  <p className="description">This is a Web project that adopts the RF model as the matching system, 
                    aiming to help tutors reasonably allocate projects to groups and help student groups find suitable projects</p>
                </div>
                <div className='project-right-skillset'>
                  <p className='project-skill'>React</p>
                  <p className='project-skill'>Vite</p>
                  <p className='project-skill'>Flask</p>
                  <p className='project-skill'>PostgreSQL</p>
                  <p className='project-skill'>Sklearn</p>
                  <p className='project-skill'>Docker</p>
                </div>
                <div className='project-right-iconBox'>
                  <a
                    href="https://github.com/CHEN-Style/Team-Project-Recommended-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='link-hover'
                  >
                    <GithubIcon/> 
                  </a>
                  <a
                    href="https://github.com/CHEN-Style/Team-Project-Recommended-System"
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
      <div className='sundary' id='sundary'>
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
                <a
                  href="https://hickory-icebreaker-9b4.notion.site/Web-1d5a8aac77e280c9ba5be042d451ac61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='link-hover'
                >
                <FolderIcon/>
                </a>
                <div className='sundary-card-icon-box2'>
                  <a
                    href="https://hickory-icebreaker-9b4.notion.site/Web-1d5a8aac77e280c9ba5be042d451ac61"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='link-hover'
                  >
                  <GithubIcon/>
                  </a>
                  <a
                    href="https://hickory-icebreaker-9b4.notion.site/Web-1d5a8aac77e280c9ba5be042d451ac61"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='link-hover'
                  >
                  <PostIcon/>
                  </a>
                </div>
              </div>
              <div className='sundary-card-title'>Web project standardization process</div>
              <div className='sundary-card-context'>This note contains the Web project standardization scheme summarized during my study and practical work</div>
              <div className='sundary-card-skillset'>
                <div className='sundary-card-skill'>JavaScript</div>
                <div className='sundary-card-skill'>Node</div>
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
              <div className='sundary-card-title'>LumenTrack</div>
              <div className='sundary-card-context'>One-stop personal productivity system: integrates task prioritization, mindfulness, inspiration management, emotion tracking, and habit formation</div>
              <div className='sundary-card-skillset'>
                <div className='sundary-card-skill'>Vite React</div>
                <div className='sundary-card-skill'>JavaScript</div>
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
              <div className='sundary-card-title'>To be continued...</div>
              <div className='sundary-card-context'>I'm also working on more fun and useful projects</div>
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
        <div className='contact' id='contact'>
          <div className='contact-header1'>What's Next?</div>
          <div className='contact-header2'>Get In Touch</div>
          <div className='contact-text text-hover'>I am currently looking for new opportunities so my inbox is always open. Whether you have a question or just want to say hi, please send me a message and I'll get back to you!</div>
          <a 
            href="mailto:ChenStyle2022@outlook.com?subject=Hello from your website&body=Hi Ethan,%0D%0A%0D%0A"
            className='home-button'
            style={{ textDecoration: 'none', textAlign: 'center' }}
          >
            Say Hello
          </a>
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
