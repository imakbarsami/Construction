import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import About from '../Common/About';
import LatestServices from './LatestServices';
import LatestProjects from './LatestProjects';
import { Link } from 'react-router-dom';
import LatestBlogs from './LatestBlogs';
import Testimonial from './Testimonial';
import Teams from './Teams';

const Home = () => {

  return (
    <>
      <Header />

      <main>
        {/* hero section */}
        <section className='section-1'>
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>
                  Welcome to ElevateWorks
                </span>

                <h1>Building tomorrow’s<br /> foundations today.</h1>
                <p>We bring your vision to life with precision, passion, and innovation. <br/>
                From concept to completion, our craftsmanship raises every project above the ordinary.</p>

                <div className="mt-4">
                  <Link to="/contact-us" className='btn btn-primary large large'>Contact Now</Link>
                  <Link to="/projects" className='btn btn-secondary  large  ms-2'>View Projects</Link>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* about us section */}
        <About />
        {/* our services */}
         <LatestServices/>

        {/* why choose us */}
        <section className='section-4 py-5'>
          <div className="container py-5">
            <div className="section-header text-center">

              <span>Why Choose Us</span>

              <h2>
              Building with Purpose, Delivering with Precision
              </h2>

              <p>
              At ElevateWorks, we go beyond bricks and blueprints. Our projects are driven by a deep commitment 
              to quality, innovation, and client satisfaction. With a team of skilled professionals and a passion
              for excellence, we ensure every structure is built to last—and built to impress.
              </p>
            </div>
            <div className="row pt-4">

              <div className='col-md-4'>
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Exceptional Craftsmanship</h3>
                    <p>
                    We combine expert techniques with attention to detail to deliver flawless construction results every time.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Experienced Team</h3>
                    <p>
                    Our professionals bring years of hands on experience, ensuring your project is managed with confidence and clarity.
                    </p>
                  </div>
                </div>
              </div>


              <div className='col-md-4'>
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Sustainable Practices</h3>
                    <p>
                    From materials to methods, we prioritize eco-friendly solutions that reduce impact and boost long-term value.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* our projects */}
         <LatestProjects/>

         {/* Our Team */}
         <Teams/>

       {/* testimonials */}
        <Testimonial/>

         {/* blogs and news */}
        <LatestBlogs/>
      </main>

      <Footer />
    </>
  )
}

export default Home