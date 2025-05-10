import Footer from "../Common/Footer"
import Header from "../Common/Header"
import { default as AboutNew } from '../Common/About'
import teamMember1 from '../../assets/images/pexels-sindre-fs-1040880.jpg'
import Hero from '../Common/Hero'
import Testimonial from "./Testimonial"


const About = () => {
  return (
    <>

      <Header />

      <main>
        {/* hero section */}
        <Hero
          preHeading='Quality,Integrity,Value.'
          heading='About Us'
          text='We excel at transforming visions into reality <br /> through outstanding craftmanship and precise'
        />

        <AboutNew />
        <Testimonial/>
      </main>

      <Footer />
    </>
  )
}

export default About
