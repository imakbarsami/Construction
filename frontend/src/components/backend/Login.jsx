import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/Auth';
import { apiUrl } from '../Common/Http';

const Login = () => {

    const {login}=useContext(AuthContext)

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const response = await fetch(apiUrl+"authenticate", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()

        if (!result.status) {
            toast.error(result.message);
        } else {
            const userInfo = {
                'id': result.id,
                'token': result.token
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            login(userInfo)
            navigate("/admin/dashboard")
        }
        console.log(result)
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
                                    <h4 className='mb-3 text-center'>Admin Login</h4>
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
                                                required: "Password is required",
                                            })
                                            }
                                            type="password" className={`form-control ${errors.password && `is-invalid`}`} placeholder="Password" />
                                        {
                                            errors.password && <p className="invalid-feedback">{errors.password?.message} </p>
                                        }
                                    </div>

                                    <button type='submit' className='btn btn-primary'>Login</button>
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

export default Login