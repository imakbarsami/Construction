import AboutImg from '../../assets/images/about-us.jpg'

const About = () => {
  return (
    <section className='section-2 py-5'>
          <div className="container py-5">
            <div className="row">

              <div className="col-md-6">
                <img src={AboutImg} className='w-100' />
              </div>

              <div className="col-md-6">
                <span>About Us</span>

                <h2>Crafting structures that last a liftime</h2>

                <p>
                  Building enduring structure requires a comprehensive approach that combines
                  expertise, innovation, and a commitment to quality. From conceptualization
                  to completion, our team of skilled professionals ensures that every project
                  is executed with precision and excellence.
                </p>

                <p>
                  Our commitment to excellence extends beyond construction. We prioritize
                  sustainability and eco-friendly practices, minimizing our environmental impact
                  while delivering structures that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </section>

  )
}

export default About