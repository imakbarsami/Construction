import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Hero from "../Common/Hero"
import BlogImg from '../../assets/images/construction3.jpg'


const Blogs = () => {
    return (
        <>
            <Header />

            <main>

                <Hero

                    preHeading='Quality,Integrity,Value.'
                    heading='Blogs'
                    text='We are dedicated to delivering exceptional construction services,<br> ensuring the highest quality and precision in every project we undertake.'

                />

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

export default Blogs