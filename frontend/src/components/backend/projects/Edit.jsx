import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Sidebar from "../../Common/Sidebar"
import {set, useForm } from "react-hook-form";
import { apiUrl, token, fileUrl } from "../../Common/Http"
import { toast } from "react-toastify";
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Edit = ({placeholder}) => {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [project,setProjects]=useState('')
    const prams= useParams()

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || ''
    }),
        [placeholder]
    );
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: async () => {
            const res=await fetch(apiUrl+'project/'+prams.id,
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
            setContent(result.data.content)
            setProjects(result.data)

            return {
                title: result.data.title,
                slug: result.data.slug,
                short_description: result.data.short_description,
                content: result.data.content,
                construction_type: result.data.construction_type,
                sector: result.data.sector,
                location: result.data.location,
                status: result.data.status
            }
        }
    });
    
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        const newData = {
            ...data, 'content': content,'imageId':imageId,
        }
        const res = await fetch(apiUrl + "project/"+prams.id,
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
            navigate("/admin/projects")
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
                                        <h4 className="h5">Project/Edit</h4>
                                        <Link to="/admin/projects" className="btn btn-primary">Back</Link>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Title</label>
                                            <input
                                                placeholder="Title"
                                                {
                                                ...register("title",
                                                    {
                                                        required: "the name feild is required",
                                                    }

                                                )
                                                }
                                                type="text" className={`form-control ${errors.title && `is-invalid`}`} />
                                            {
                                                errors.title && <p className="invalid-feedback">{errors.title?.message}</p>
                                            }

                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="slug">Slug</label>
                                            <input
                                                placeholder="Slug"
                                                {
                                                ...register("slug", {
                                                    required: 'the slug field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.slug && `is-invalid`}`} />
                                            {
                                                errors.slug && <p className="invalid-feedback">{errors.slug?.message}</p>
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="shotr_description">Short Description</label>
                                            <textarea
                                                placeholder="Short Description"
                                                {
                                                ...register("short_description")
                                                }
                                                className="form-control" rows={5}></textarea>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="content">Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={{ placeholder: 'Start typing...' }}
                                                onBlur={newContent => setContent(newContent)}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="construction_type">Construction Type</label>
                                            <input
                                                placeholder="Construction Type"
                                                {
                                                ...register("construction_type", {
                                                    required: 'the construction type field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.construction_type && `is-invalid`}`} />
                                            {
                                                errors.construction_type && <p className="invalid-feedback">{errors.construction_type?.message}</p>
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="sector">Sector</label>
                                            <input
                                                placeholder="Sector"
                                                {
                                                ...register("sector", {
                                                    required: 'the sector field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.sector && `is-invalid`}`} />
                                            {
                                                errors.sector && <p className="invalid-feedback">{errors.sector?.message}</p>
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="location">Location</label>
                                            <input
                                                placeholder="Location"
                                                {
                                                ...register("location", {
                                                    required: 'the location field is required'
                                                })

                                                }
                                                type="text" className={`form-control ${errors.location && `is-invalid`}`} />
                                            {
                                                errors.location && <p className="invalid-feedback">{errors.location?.message}</p>
                                            }
                                        </div>

                                        

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="image">Image</label>
                                            <input type="file" className="form-control" onChange={handleFile} />
                                        </div>
                                        <div className="pb-3">
                                            {
                                                project.image && <img src={fileUrl+'upload/projects/small/'+project.image} alt="" />
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