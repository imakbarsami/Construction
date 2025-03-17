import { useForm } from "react-hook-form";
import Footer from "../Common/Footer"
import Header from "../Common/Header"
import Hero from "../Common/Hero"
import { apiUrl } from "../Common/Http";
import { toast } from "react-toastify";
import { useState } from "react";


const ContactUs = () => {

const [isDisabled, setDisabled] = useState(false);

const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {

    setDisabled(true);
    
    const reps=await fetch(apiUrl+'contact-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });


    const result = await reps.json();

    if(result.status){
        setDisabled(false);
        toast.success(result.message);
    }
  }

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
                                        <div> <a href="#"></a> </div>

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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card shadow border-0">
                                        <div className="card-body p-5">
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="name">Name</label>
                                                    <input 
                                                    {
                                                        ...register("name", {
                                                            required: "name is required",
                                                        })
                                                    }
                                                    
                                                    className={`form-control form-control-lg ${errors.name && `is-invalid`}`} type="text" placeholder="Name" />
                                                    {
                                                        errors.name && <p className="invalid-feedback">{errors.name.message}</p>
                                                    }
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="email">Email</label>
                                                    <input 
                                                    {
                                                        ...register("email", {
                                                            required: "email is required",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                                message: "invalid email address"
                                                            }
                                                        })
                                                    }
                                                    className={`form-control form-control-lg ${errors.email && `is-invalid`}`} type="email" placeholder="Email" />
                                                    {
                                                        errors.email && <p className="invalid-feedback">{errors.email.message}</p>
                                                    }
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input 
                                                    {
                                                        ...register("phone", {
                                                            maxLength: {
                                                                value: 11,
                                                                message: "Phone number must be 11 digit"
                                                            },
                                                        })
                                                    }
                                                    className={`form-control form-control-lg ${errors.phone && `is-invalid` }`} type="number" placeholder="Phone" />
                                                    {
                                                        errors.phone && <p className="invalid-feedback">{errors.phone.message}</p>
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input 
                                                    {
                                                        ...register("subject")
                                                    }
                                                    className="form-control form-control-lg" type="text" placeholder="Subject" />
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea 
                                                    {
                                                        ...register("message")
                                                    }
                                                    className="form-control form-control-lg" rows={5} placeholder="Message" name="message" id=""></textarea>
                                                </div>
                                                
                                            </div>
                                            <button disabled={isDisabled} className="btn btn-primary large mt-3">Submit</button>
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
