import { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from '../Common/Http'
import { Link } from 'react-router-dom'

const LatestServices = () => {

    const [services, setServices] = useState([])

    const fetchLatestServices = async () => {
        const response = await fetch(apiUrl + 'get-latest-services?limit=4')
        const result = await response.json()

        setServices(result.data)
        console.log(result)
    }

    useEffect(() => {
        fetchLatestServices()
    }, [])

    return (
        <section className='section-3 bg-light py-5'>
            <div className="container-fluid py-5">
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
                        services && services.map((services,i) => {
                            return (
                                <div className="col-md-3 col-lg-3" key={i}>
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
    )
}

export default LatestServices