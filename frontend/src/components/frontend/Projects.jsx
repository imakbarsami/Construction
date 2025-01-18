import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Hero from "../Common/Hero"
import ConstructionImg from '../../assets/images/construction2.jpg'


const Projects = () => {
    return (
        <>

            <Header />
            <main>
                <Hero
                    preHeading={'Quality,Integrity,Value.'}
                    heading={'Projects'}
                    text={'We are dedicated to delivering exceptional construction services,<br> ensuring the highest quality and precision in every project we undertake.'}
                />

                <section className='section-3 bg-light py-5'>
                    <div className="container py-5">
                        <div className="section-header text-center">

                            <span>Our Projects</span>

                            <h2>Discover our diverse range of Projects</h2>

                            <p>
                                Explore our diverse range of projects, each reflecting our commitment to
                                excellence and innovation in construction.
                            </p>
                        </div>

                        <div className="row pt-4">
                            {[...Array(6)].map((_, i) => (
                                <div className="col-md-4 col-lg-4" key={i}>
                                    <div className="item">
                                        <div className="service-image">
                                            <img src={ConstructionImg} alt="" className="w-100" />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>Chittagong Project</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    Speciality Construction is a leading construction company that
                                                    specializes in delivering exceptional construction services,
                                                    ensuring the highest quality and precision in every project we
                                                    undertake.
                                                </p>
                                            </div>
                                            <a href="" className="btn btn-primary large">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </main>
            <Footer />

        </>
    )
}

export default Projects