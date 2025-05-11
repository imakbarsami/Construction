import  { useEffect, useState } from 'react'
import { apiUrl } from '../Common/Http'
import { Link } from 'react-router-dom';

const Footer = () => {

    const currentYear = new Date().getFullYear();


    const [services,setService] = useState([])

    const fetchService=async()=>{
        const resp = await fetch(apiUrl + 'get-services',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await resp.json()
        setService(result.data)
    }


    useEffect(()=>
    {
      fetchService()
    },[]
    )
  return (
    <footer>
         <div className="container py-5">
           <div className="row">

             <div className="col-md-3">
               <h3 className='mb-3'>ElevateWorks</h3>
              <div className="pe-5">
                <p>
                We are a forward-thinking construction company committed to building lasting structures with precision, 
                innovation, and care. At ElevateWorks, we turn ideas into enduring realities shaping spaces that inspire 
                and stand strong for generations.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <h3 className='mb-3'>Our Services</h3>
              <ul>

                {
                  services && services.map((service, i) => {
                    return (
                      <li key={i}>
                        <Link to={`/service/${service.id}`}>{service.title}</Link>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
            
            <div className="col-md-3">
              <h3 className='mb-3'>Quick Links</h3>
                <ul>

                  <li>
                    <Link to={'/about'}>About Us</Link>
                  </li>

                  <li>
                  <Link to={'/contact-us'}>Contact Us</Link>
                  </li>

                  <li>
                  <Link to={'/services'}>Services</Link>
                  </li>

                  <li>
                  <Link to={'/projects'}>Projects</Link>
                  </li>

                  <li>
                  <Link to={'/blogs'}>Blogs</Link>
                  </li>
                  
                 
                  
                </ul>
            </div>

            <div className="col-md-3">
              <h3 className='mb-3'>Contact Us</h3>
               <ul>
                <li>
                  <a href="">+880 12345678</a>
                </li>

                <li>
                  <a href="">info@example.com</a>
                </li>

                <p>
                  Quaish,Hathazari<br/>
                  Chittagong,Bangladesh<br/>
                </p>
               </ul>
            </div> 
            <hr />
            <div className='text-center pt-4'>
              Copyright ©{currentYear} ElevateWorks. All Rights Reserved.
            </div>
            </div>
         </div>
      </footer>
  )
}

export default Footer