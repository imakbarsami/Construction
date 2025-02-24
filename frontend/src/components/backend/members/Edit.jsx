import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Sidebar from "../../Common/Sidebar"
import { useForm } from "react-hook-form";
import { apiUrl, token, fileUrl } from "../../Common/Http"
import { toast } from "react-toastify";
import { useState } from "react";

const Edit = ({placeholder}) => {


    const [members,setMembers]=useState('')
    const prams= useParams()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: async () => {
            const res=await fetch(apiUrl+'member/'+prams.id,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token()}`
                    }
                }
            )

            const result=await res.json()
            setMembers(result.data)

            return {
                name: result.data.name,
                job_title: result.data.job_title,
                status: result.data.status,
                linkdin_url: result.data.linkdin_url,
            }
        }
    });
    
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        const newData = {
            ...data, 'imageId':imageId,
        }
        const res = await fetch(apiUrl + "member/"+prams.id,
            {
                method: "PUT",
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
    const [isDisabled, setIsDisabled] = useState(false)

    const handleFile = async(e) => {
        const formData=new FormData()
        formData.append('image',e.target.files[0])
        setIsDisabled(true)
        const res=await fetch(apiUrl+'temp-image',
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                },
                body: formData
            }
        )

        const result=await res.json()
        if(result.status){
            setImageId(result.data.id)
           setIsDisabled(false)
        }else{
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
                                        <h4 className="h5">Member/Edit</h4>
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
                                            <label className="form-label" htmlFor="job_title">Job Title</label>
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
                                            <label className="form-label" htmlFor="slug">Linksin Url</label>
                                            <input
                                                placeholder="Linkdin Url"
                                                {
                                                ...register("linkdin_url", {
                                                    required: 'the linkdin url field is required'
                                                })

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
                                        <div className="pb-3">
                                            {
                                                members.image && <img src={fileUrl+'upload/members/small/'+members.image} alt="" />
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

                                        <button disabled={isDisabled} className="btn btn-primary">Update</button>
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

export default Edit