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
        const res = await fetch(apiUrl + "member",
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
            navigate("/admin/members")
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
                                        <h4 className="h5">Member/Create</h4>
                                        <Link to="/admin/members" className="btn btn-primary">Back</Link>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>
      
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Name</label>
                                            <input
                                                placeholder="Name"
                                                {
                                                ...register("name", {
                                                    required: 'the name field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.name && `is-invalid`}`} />
                                            {
                                                errors.name && <p className="invalid-feedback">{errors.name?.message}</p>
                                            }
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="slug">Job Title</label>
                                            <input
                                                placeholder="Job Title"
                                                {
                                                ...register("job_title", {
                                                    required: 'the job title field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.job_title && `is-invalid`}`} />
                                            {
                                                errors.job_title && <p className="invalid-feedback">{errors.job_title?.message}</p>
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="slug">Linkdin Url</label>
                                            <input
                                                placeholder="Linkdin Url"
                                                {
                                                ...register("linkdin_url")

                                                }
                                                type="text" className={`form-control ${errors.linkdin_url && `is-invalid`}`} />
                                            {
                                                errors.linkdin_url && <p className="invalid-feedback">{errors.linkdin_url?.message}</p>
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="image">Image</label>
                                            <input type="file" className="form-control" onChange={handleFile} />
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