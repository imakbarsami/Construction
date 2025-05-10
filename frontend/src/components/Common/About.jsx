import AboutImg from '../../assets/images/enginer.png'

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

            <h3 className='mt-3'>Shaping tomorrow’s landmarks today</h3>

            <p className='mt-3'>
              At ElevateWorks, we take your vision from the drawing board to a solid reality.
              By managing every stage from initial concept and detailed design to precision
              construction and rigorous quality checks we ensure each project is completed on time, on budget, and built to last.
            </p>

            <p>
              Our team blends cutting-edge building techniques with eco-conscious practices, selecting sustainable materials and 
              energy-efficient systems to reduce waste and lower operating costs. Through transparent communication and close
               collaboration with architects, engineers, and clients, we deliver resilient, high-performance buildings that elevate 
               communities and stand strong for generations.
            </p>

          </div>
        </div>
      </div>
    </section>

  )
}

export default About