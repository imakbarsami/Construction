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
                  Welcome Amazing Constructions
                </span>

                <h1>Crafting dreams with <br /> precision and excellence.</h1>
                <p>We excel at transforming visions into reality through outstanding craftmanship and precise</p>

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
                Discover our diverse range of Projects
              </h2>

              <p>
                Created with precision and passion, our construction company is dedicated to
                delivering exceptional results and exceeding expectations. <br />
                We are committed to delivering exceptional results and exceeding
                expectations.
              </p>
            </div>
            <div className="row pt-4">

              <div className='col-md-4'>
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Quality Craftmanship</h3>
                    <p>
                      We are dedicated to delivering exceptional construction services,
                      ensuring the highest quality and precision in every project we
                      undertake.
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
                    <h3>Quality Craftmanship</h3>
                    <p>
                      We are dedicated to delivering exceptional construction services,
                      ensuring the highest quality and precision in every project we
                      undertake.
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
                    <h3>Quality Craftmanship</h3>
                    <p>
                      We are dedicated to delivering exceptional construction services,
                      ensuring the highest quality and precision in every project we
                      undertake.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* our projects */}
         <LatestProjects/>

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