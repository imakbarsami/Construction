import Footer from '../Common/Footer';
import Header from '../Common/Header';
import ConstructionImg from '../../assets/images/construction2.jpg'
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import AvatarImg from '../../assets/images/author-2.jpg'
import 'swiper/css/pagination';
import BlogImg from '../../assets/images/construction3.jpg'
import About from '../Common/About';
import LatestServices from '../Common/LatestServices';

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
                  <a href="" className='btn btn-primary large large'>Contact Now</a>
                  <a href="" className='btn btn-secondary  large  ms-2'>View Projects</a>
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
        <section className='section-3 bg-light py-5'>
          <div className="container-fluid py-5">
            <div className="section-header text-center">

              <span>Our Projects</span>

              <h2>Discover our diverse range of Projects</h2>

              <p>
                Explore our diverse range of projects, each reflecting our commitment to
                excellence and innovation in construction.
              </p>
            </div>

            <div className="row pt-4">
              {[...Array(4)].map((_, i) => (
                <div className="col-md-3 col-lg-3" key={i}>
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

       {/* testimonials */}
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
                          <img src={AvatarImg} alt={50} />
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
                          <img src={AvatarImg} alt={50} />
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
                          <img src={AvatarImg} alt={50} />
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
                          <img src={AvatarImg} alt={50} />
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
                          <img src={AvatarImg} alt={50} />
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
                          <img src={AvatarImg} alt={50} />
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

         {/* blogs and news */}
        <section className='section-6 bg-light py-5'>
          <div className="container">
            <div className="section-header text-center">
              <span>Blogs & News</span>

              <h2>Article & blog posts</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className="row pt-3">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body p-4">
                    <div className='mb-3'>
                      <a href="#" className='title'>Dummy Blog Tittle</a>
                    </div>
                    <a href="#" className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body p-4">
                    <div className='mb-3'>
                      <a href="#" className='title'>Dummy Blog Tittle</a>
                    </div>
                    <a href="#" className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body p-4">
                    <div className='mb-3'>
                      <a href="#" className='title'>Dummy Blog Tittle</a>
                    </div>
                    <a href="#" className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Home