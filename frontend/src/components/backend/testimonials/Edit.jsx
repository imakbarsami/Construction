import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Sidebar from "../../Common/Sidebar"
import { useForm } from "react-hook-form";
import { apiUrl, token, fileUrl } from "../../Common/Http"
import { toast } from "react-toastify";
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Edit = ({placeholder}) => {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [testimonial,setTestimonial]=useState('')
    const prams= useParams()

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || ''
    }),
        [placeholder]
    );
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: async () => {
            const res=await fetch(apiUrl+'testimonial/'+prams.id,
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
            setTestimonial(result.data)

            return {
                testimonial: result.data.testimonial,
                citation: result.data.citation,
                status: result.data.status
            }
        }
    });
    
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        const newData = {
            ...data, 'testimonial': content,'imageId':imageId,
        }
        const res = await fetch(apiUrl + "testimonial/"+prams.id,
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
            navigate("/admin/testimonials")
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
                                        <h4 className="h5">Testimonia/Edit</h4>
                                        <Link to="/admin/testimonials" className="btn btn-primary">Back</Link>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* <div className="mb-3">
                                            <label className="form-label" htmlFor="testimonial">Testimonial</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={testimonial}
                                                config={{ placeholder: 'Start typing...' }}
                                                onBlur={newContent => setContent(newContent)}
                                            />
                                        </div> */}
                                
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="citation">Citation</label>
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
                                            <label className="form-label" htmlFor="image">Image</label>
                                            <input type="file" className="form-control" onChange={handleFile} />
                                        </div>
                                        <div className="pb-3">
                                            {
                                                testimonial.image && <img src={fileUrl+'upload/testimonials/small/'+testimonial.image} alt="" />
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