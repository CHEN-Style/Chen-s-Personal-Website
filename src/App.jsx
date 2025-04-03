import { useState } from 'react'
import './App.css'
import AnimatedContent from './components/AnimatedContent'

function App() {
  const [count, setCount] = useState(0)
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
                                      <span style={{color: '#64ffda'}}>Fullstack</span>{' '}
                                       web applications and applying {' '}
                                      <span style={{color: '#64ffda'}}>Deep Learning</span>{' '}
                                       to solve real-world problems. </p>
          </AnimatedContent>
        </div>
      </div>
    </>
  )
}

export default App
