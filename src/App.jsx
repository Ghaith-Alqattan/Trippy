import NavBar from './Components/NavBar/NavBar'
import TopFooter from './Components/TopFooter/TopFooter'
import BottomFooter from './Components/BottomFooter/BottomFooter'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <NavBar
        logo="Trippy"
        navItems={[
          { Link: '', icon: 'fa-solid fa-house-user', text: 'Home' },
          { Link: 'About', icon: 'fa-solid fa-circle-info', text: 'About' },
          { Link: 'Services', icon: 'fa-solid fa-briefcase', text: 'Service' },
          {
            Link: 'Contact',
            icon: 'fa-solid fa-address-book',
            text: 'Contact',
          },
        ]}
        btn="Signup"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <TopFooter
        logo="Trippy"
        para="Choose Your favorite destination."
        socialIcons={[
          {
            link: 'https://www.facebook.com/ghaith alqattan/',
            icon: 'fa-brands fa-facebook-square',
          },
          {
            link: 'https://www.instagram.com/ghaith_alqattan/',
            icon: 'fa-brands fa-instagram-square',
          },
          {
            link: 'https://www.behance.com/',
            icon: 'fa-brands fa-behance-square',
          },
          { link: 'https://www.x.com/', icon: 'fa-brands fa-twitter-square' },
        ]}
      />
      <BottomFooter
        links1={[
          { link: 'ChangeLog' },
          { link: 'Status' },
          { link: 'Licence' },
          { link: 'All Versions' },
        ]}
        links2={[
          { link: 'GitHub' },
          { link: 'issues' },
          { link: 'project' },
          { link: 'Twitter' },
        ]}
        links3={[
          { link: 'Support' },
          { link: 'TroubleShooting' },
          { link: 'Contact us' },
        ]}
        links4={[
          { link: 'Terms of Service' },
          { link: 'Privacy Policy' },
          { link: 'Licence' },
        ]}
      />
    </>
  )
}

export default App
