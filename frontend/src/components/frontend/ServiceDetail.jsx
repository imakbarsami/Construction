import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Hero from '../Common/Hero';
import { apiUrl, fileUrl } from '../Common/Http';
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Testimonial from '../frontend/Testimonial';

const ServiceDetail = () => {

  const [getService, setServiceDetail] = useState([]);
  const [services, setServices] = useState([]);
  const param = useParams();
  const fetchServiceDetail = async () => {
    const resp = await fetch(`${apiUrl}get-service/${param.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await resp.json();
    setServiceDetail(result.data);
    console.log(result.data);
  }


  const fetchServices=async()=>{
    const resp=await fetch(`${apiUrl}get-services`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      } 
    })

    const result=await resp.json();
    setServices(result.data);

  }


  useEffect(() => {
    fetchServiceDetail();
    fetchServices();
  }, [param.id]);

  return (
    <>
      <Header />

      <main>
        <section className='section-10'>

          <Hero
            preHeading='Quality,Integrity,Value.'
            heading={`${getService.title}`}
            text=''
          />

          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">

                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className='mt-2 mb-3'>Our Services</h3>
                    <ul>

                      {
                        services.map((service) => {
                          return (
                            <li key={service.id}>
                              <Link to={`/service/${service.id}`}>{service.title}</Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-9">

                <div>
                  <img src={`${fileUrl}upload/services/large/${getService.image}`} alt="" className='w-100' />
                </div>
                
                <h3 className='py-3'>{getService.title}</h3>

                <div dangerouslySetInnerHTML={{ __html:getService.content }}>
                  
                </div>
              </div>
            </div>

            <div className="container">
               <div className="col-md-12">
                  <Testimonial />
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ServiceDetail