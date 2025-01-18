import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Hero from "../Common/Hero"

const ContactUs = () => {
    return (
        <>

            <Header />
            <main>
                <Hero
                    preHeading='Quality,Integrity,Value.'
                    heading='Contact Us'
                    text='We are dedicated to delivering exceptional construction services,<br> ensuring the highest quality and precision in every project we undertake.'
                />

                <section className="section-9 py-5">
                    <div className="container">
                        <div className="section-header text-center">

                            <h2>Contact Us</h2>

                            <p>
                                Our dedicated team is here to assist you with any inquiries or project needs. <br />Feel free to reach out to us using the contact information below:

                            </p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-3">
                                <div className="card shadow border-0 mb-3">
                                    <div className="card-body p-4">
                                        <h3 className="mt-4">Call Us</h3>
                                        <div><a href="#">{+8801720423399}</a></div>
                                        <div><a href="#">{+8801857035320}</a></div>

                                        <h3 className="mt-4">You can write us</h3>
                                        <div><a href="#">mdsamipuc@gmail.com</a> </div>
                                        <div> <a href="#">mdsami6251@gmail.com</a> </div>

                                        <h3 className="mt-4">Address</h3>
                                        <div>
                                            B-18X , 1st Floor, Mirpur-10, Dhaka-1216 <br />
                                            Dhaka Bangladesh <br />
                                            880 01720423399
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <form action="">
                                    <div className="card shadow border-0">
                                        <div className="card-body p-5">
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="name">Name</label>
                                                    <input className="form-control form-control-lg" type="text" placeholder="Name" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="email">Email</label>
                                                    <input className="form-control form-control-lg" type="email" placeholder="Email" />
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input className="form-control form-control-lg" type="number" placeholder="Phone" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input className="form-control form-control-lg" type="text" placeholder="Subject" />
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea className="form-control form-control-lg" rows={5} placeholder="Message" name="message" id=""></textarea>
                                                </div>
                                                
                                            </div>
                                            <button className="btn btn-primary large mt-3">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ContactUs