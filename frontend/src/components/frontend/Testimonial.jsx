import { Swiper, SwiperSlide } from 'swiper/react';
import { apiUrl } from '../Common/Http';
import { useEffect, useState } from 'react';

const Testimonial = () => {


    const [testimonials,setTestimonial]=useState([])

    const fetchTestimonial=async()=>{
        const resp=await fetch(apiUrl+'get-testimonials')
        const result=await resp.json()
        setTestimonial(result.data)
    }

    useEffect(()=>{
        fetchTestimonial()
    },[])


    return (
        <>
    <section className='section-5 py-5'>
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Testimonials</span>
              <h2>What people are saying about us</h2>
              <p>
                Our customers testimonials speak volumes about our commitment to
                excellence and our dedication to delivering exceptional construction
                services.
              </p>

              <Swiper
                spaceBetween={50}
                slidesPerView={3}

              >
                <SwiperSlide>
                  <div className="card shadow border-0">
                    <div className="card-body py-5">
                      <div className="rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>

                      <div className='content pt-4 pb-2'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos quo aliquid repudiandae ducimus maiores, iure eum ea odio impedit inventore laborum aspernatur debitis distinctio, dolorum dignissimos nam harum illo?
                        </p>
                      </div>
                      <hr />

                      <div className="d-flex meta">
                        <div>
                          <img  />
                        </div>
                        <div className='ps-3'>
                          <div className='name'>
                            Jhon Doe
                          </div>
                          <div>
                            CEO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </section>
        </>
    )
}

export default Testimonial