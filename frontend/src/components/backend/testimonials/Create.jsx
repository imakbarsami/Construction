import { Link, useNavigate } from "react-router-dom"
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Sidebar from "../../Common/Sidebar"
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../Common/Http"
import { toast } from "react-toastify";
import { useState } from "react";

const Create = ({ placeholder }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        const newData = {
            ...data, 'imageId': imageId
        }
        const res = await fetch(apiUrl + "testimonial",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                },
                body: JSON.stringify(newData)
            }
        )

        const result = await res.json()

        if (result.status) {
            toast.success(result.message)
            navigate("/admin/testimonials")
        } else {
            toast.error(result.message)
        }


    }

    console.log(watch("example"));


    const [imageId, setImageId] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleFile = async (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        setIsDisabled(true)
        const res = await fetch(apiUrl + 'temp-image',
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                },
                body: formData
            }
        )

        const result = await res.json()
        if (result.status) {
            setImageId(result.data.id)
            setIsDisabled(false)
        } else {
            toast.error(result.errors.image[0])
            setIsDisabled(false)
        }

    }

    return (
        <>
            <Header />

            <main>
                <div className="container my-5">
                    <div className="row">

                        <div className="col-md-3">
                            {/* sidebar */}
                            <Sidebar />

                        </div>


                        <div className="col-md-9 ">
                            {/* Dashboard */}
                            <div className="card border-0 shadow">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="h5">Testimonial/Create</h4>
                                        <Link to="/admin/testimonials" className="btn btn-primary">Back</Link>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                            <label className="form-label" htmlFor="testimonial">Testimonial</label>
                                            <textarea
                                                placeholder="Testimonial"
                                                {
                                                ...register("testimonial",
                                                    {
                                                        required: 'the testimonial field is required'
                                                    }
                                                )
                                                }
                                                className={`form-control ${errors.testimonial && `is-invalid`}`} rows={5}></textarea>
                                                {
                                                errors.testimonial && <p className="invalid-feedback">{errors.testimonial?.message}</p>
                                                }
                                        </div>

                                        
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="slug">Citation</label>
                                            <input
                                                placeholder="Citation"
                                                {
                                                ...register("citation", {
                                                    required: 'the citation field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.citation && `is-invalid`}`} />
                                            {
                                                errors.citation && <p className="invalid-feedback">{errors.citation?.message}</p>
                                            }
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="slug">Designation</label>
                                            <input
                                                placeholder="Designation"
                                                {
                                                ...register("designaiton", {
                                                    required: 'the designation field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.designaiton && `is-invalid`}`} />
                                            {
                                                errors.designaiton && <p className="invalid-feedback">{errors.designaiton?.message}</p>
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="image">Image</label>
                                            <input type="file" className="form-control" onChange={handleFile} />
                                        </div>



                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="rating">Rating</label>
                                            <input
                                                placeholder="Rating"
                                                {
                                                ...register("rating", {
                                                    required: 'the rating field is required',
                                                    min: {
                                                        value: 0.5,
                                                        message: 'minimum value is 0.5'
                                                    },
                                                    
                                                    max: {
                                                        value: 5,
                                                        message: 'maximum value is 5'
                                                    }
                                                })
                                            
                                                }
                                                type="text" className={`form-control ${errors.rating && `is-invalid`}`} />
                                            {
                                                errors.rating && <p className="invalid-feedback">{errors.rating?.message}</p>
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="">Status</label>
                                            <select
                                                {
                                                ...register("status")
                                                }
                                                className="form-control">
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>

                                        <button disabled={isDisabled} className="btn btn-primary">Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Create