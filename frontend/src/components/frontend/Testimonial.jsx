import { Swiper, SwiperSlide } from 'swiper/react';
import { apiUrl, fileUrl } from '../Common/Http';
import { useEffect, useState } from 'react';
import 'swiper/css';
import defaultPic from '../../assets/images/pexels-sindre-fs-1040880.jpg';


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const resp = await fetch(apiUrl + 'get-testimonials');
                const result = await resp.json();
                if (result.status) {
                    setTestimonials(result.data);
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h5 className="text-dark text-uppercase fw-bold">Testimonials</h5>
                    <h2 className="fw-bold">What People Say About Us</h2>
                    <p className="text-muted">
                        Our customers' testimonials speak volumes about our commitment to excellence.
                    </p>
                </div>

                <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="card border-0 shadow-sm p-4 d-flex flex-column justify-content-between" style={{ minHeight: "350px" }}>
                                {/* Star Rating */}
                                <div className="mb-3">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill me-1">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-muted flex-grow-1">{testimonial.testimonial}</p>
                                <hr />

                                {/* User Info */}
                                <div className="d-flex align-items-center">
                                  
                                    <img
                                        src={testimonial.image ? `${fileUrl}upload/testimonials/small/${testimonial.image}` : defaultPic}
                                        alt={testimonial.citation}
                                        className="rounded-circle"
                                        width="60"
                                        height="60"
                                    />
                                    <div className="ms-3">
                                        <h5 className="mb-0">{testimonial.citation}</h5>
                                        <small className="text-muted">{testimonial.designaiton}</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
