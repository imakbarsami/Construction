import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Hero from "../Common/Hero"
import { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from '../Common/Http'
import { Link } from "react-router-dom"


const Services = () => {

    const [services, setServices] = useState([])

    const fetchLatestServices = async () => {
        const response = await fetch(apiUrl + 'get-services')
        const result = await response.json()

        setServices(result.data)
        console.log(result)
    }

    useEffect(() => {
        fetchLatestServices()
    }, [])
    return (
        <>
            <Header />
            <main>
                <Hero
                    preHeading='Quality,Integrity,Value.'
                    heading='Services'
                    text='We are dedicated to delivering exceptional construction services,<br> ensuring the highest quality and precision in every project we undertake.'
                />

                <section className='section-3 bg-light py-5'>
                    <div className="container py-5">
                        <div className="section-header text-center">

                            <span>Our Services</span>

                            <h2>Our Construction Services</h2>

                            <p>
                                We offer a diverse array of construction services,spanning residential,
                                commercial and industrial projects.
                            </p>
                        </div>

                        <div className="row pt-4">
                            {
                                services && services.map((services, i) => {
                                    return (
                                        <div className="col-md-4 col-lg-4" key={i}>
                                            <div className="item">
                                                <div className="service-image">
                                                    <img src={`${fileUrl}upload/services/small/${services.image}`} alt="" className="w-100" />
                                                </div>
                                                <div className="service-body">
                                                    <div className="service-title">
                                                        <h3>{services.title}</h3>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>
                                                            {services.short_description}
                                                        </p>
                                                    </div>
                                                    <Link to={`/service/${services.id}`} className="btn btn-primary large">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Services