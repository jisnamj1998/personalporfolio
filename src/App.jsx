import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Qualifications from './Qualifications'
import Service from './Service'
import Projects from './Projects'
import Footer from './Footer'








function App() {
  const user={"name":"Catherine Jhon","degree":"MSc","phone":"123456","dob":"1-1-1990","experience":"10 years","email":"abc@gmail.com"}
  const skillsets=[{"name":"Python","percentage":"90%"},
    {"name":"HTML","percentage":"80%"},
    {"name":"React","percentage":"70%"},
  {"name":"Django","percentage":"95"}]
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Skills skillsets={skillsets}></Skills>
      <Qualifications></Qualifications>
      <Service></Service>
      <Projects></Projects>
      <Footer></Footer>

    </div>
  )
}

export default App
