import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    // const onSubmit = async data => {
    //     const response = await fetch("http://127.0.0.1:8000/api/temp-image", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })

    //     const result = await response.json()
    //     if (result.status) {
    //         navigate("/admin/login")
    //     }
    // }

    const onSubmit = async (data) => {
        // Prepare FormData
        const formData = new FormData();
        formData.append("image", data.image[0]); // Access the first file from the input
    
        try {
            const response = await fetch("http://127.0.0.1:8000/api/temp-image", {
                method: "POST",
                body: formData, // Send FormData
            });
    
            const result = await response.json();
            if (result.status) {
                navigate("/admin/login");
            } else {
                alert(result.message || "Failed to upload the image.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("An error occurred while uploading the image.");
        }
    };
    return (
        <>
            <Header />
            <main>

                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-3 text-center'>Admin Register</h4>
                                    {/* <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            {
                                            ...register("name", {
                                                required: "name is required",
                                            })
                                            }
                                            type="text" className={`form-control ${errors.name && `is-invalid`}`} placeholder="Name" />
                                        {errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            {
                                            ...register("email", {
                                                required: "email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })
                                            }
                                            type="email" className={`form-control ${errors.email && `is-invalid`}`} placeholder="Email" />
                                        {errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            {
                                            ...register("password", {
                                                required: "password is required",
                                                minLength: {
                                                    value: 5,
                                                    message: "password must be at least 5 characters"
                                                }
                                            })
                                            }
                                            type="password" className={`form-control ${errors.password && `is-invalid`}`} placeholder="Password" />
                                        {errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                        <input
                                            {
                                            ...register("confirm_password", {
                                                required: "confirm password is required",
                                                validate: {
                                                    matchPassword: (value) => {
                                                        if (watch("password") !== value) {
                                                            return "password doesn't match"
                                                        }
                                                    }
                                                }
                                            })
                                            }
                                            type="password" className={`form-control ${errors.confirm_password && `is-invalid`}`} placeholder="Confirm Password" />
                                        {errors.confirm_password && <p className='invalid-feedback'>{errors.confirm_password?.message}</p>}

                                    </div> */}

                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Image</label>
                                        <input
                                            {
                                            ...register("image", {
                                                required: "image is required",
                                            })
                                            }
                                            type="file" className={`form-control ${errors.image && `is-invalid`}`}  />
                                        {errors.image && <p className='invalid-feedback'>{errors.image?.message}</p>}

                                    </div>

                                    <button type='submit' className='btn btn-primary'>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register