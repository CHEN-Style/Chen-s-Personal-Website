import { useState } from 'react'
import './App.css'
import './style/button.css'
import AnimatedContent from './components/AnimatedContent'

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
            <p className='home-brief'>I have a strong passion for software engineering with experience building{' '} 
                                      <span style={{color: 'var(--main-color-light)'}}>Fullstack</span>{' '}
                                       web applications and applying {' '}
                                      <span style={{color: 'var(--main-color-light)'}}>Deep Learning</span>{' '}
                                       to solve real-world problems. </p>
            <button className='home-button'>View Portfolio</button>
          </AnimatedContent>
        </div>
      </div>
      <div className='about'>
        <div className='about-box'>
          <div className='about-left'>
            <div className='about-me'>About Me</div>
            <p className='about-para'>Hi there! My name is Ethan and I love creating useful web applications that could help others and myself.</p>
            <p className='about-para'>My interest in web development began with a front-end development course I took at UNSW in 2024, where I learned to build my own website and develop productivity tools.</p>
            <p className='about-para'>Today, I have graduated from the University of New South Wales Master of IT and worked as a full stack engineer at RED BLACK TREE TECHNOLOGIES PTY LTD!</p>
          </div>
          <div className='about-right'></div>
        </div>
      </div>
    </>
  )
}

export default App
