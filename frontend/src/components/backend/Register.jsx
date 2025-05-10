import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../Common/Http';
import { toast } from 'react-toastify';

const Register = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {

        const res = await fetch(apiUrl + "register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data)
            }
        )

        const result = await res.json()

        if (result.status) {
            toast.success(result.message)
            navigate("/admin/login")
        } else {
            toast.error(result.message)
        }


    }

    return (
        <>

            <Header />
            <main>

                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-3 text-center'>Admin Regsiter</h4>

                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            {
                                            ...register("name", {
                                                required: "Name is required",
                                            })
                                            }

                                            type="text" className={`form-control ${errors.name && `is-invalid`}`} placeholder="Name" />
                                        {
                                            errors.name && <p className='invalid-feedback'> {errors.name?.message} </p>
                                        }
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            {
                                            ...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })
                                            }

                                            type="email" className={`form-control ${errors.email && `is-invalid`}`} placeholder="Email" />
                                        {
                                            errors.email && <p className='invalid-feedback'> {errors.email?.message} </p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            {
                                            ...register("password", {
                                                required: "password is required",
                                                minLength: {
                                                    value: 8,
                                                    message: "Password must be at least 8 characters"
                                                }
                                            })
                                            }
                                            type="password" className={`form-control ${errors.password && `is-invalid`}`} placeholder="Password" />
                                        {
                                            errors.password && <p className="invalid-feedback">{errors.password?.message} </p>
                                        }
                                    </div>



                                    <div className="mb-3">
                                        <label htmlFor="confrim_password" className="form-label">Confirm Password</label>
                                        <input
                                            {...register("confirm_password", {
                                                required: "confirm password is required",
                                                validate: (value) =>
                                                    value === watch("password") || "Passwords do not match"
                                            })}
                                            type="password"
                                            className={`form-control ${errors.confirm_password && "is-invalid"}`}
                                            placeholder="Confirm Password"
                                        />
                                        {errors.confirm_password && (
                                            <p className="invalid-feedback">{errors.confirm_password.message}</p>
                                        )}

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