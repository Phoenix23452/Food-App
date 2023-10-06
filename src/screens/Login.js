import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()
    
    const [credentials, setcredentials] = useState({ email: "", password: "" })

        const handleSubmit = async (e) => {
            e.preventDefault()
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            })
            const json = await response.json()
            console.log(json)
    
            if (!json.success) {
                alert("Enter valid Credentiols")
            }else if(json.success){
                setcredentials({
                    email: "",
                    password: ""
                  });
                  localStorage.setItem('authToken',json.authToken)
                  localStorage.setItem('userEmail',credentials.email)

                  console.log(localStorage.getItem("authToken"))
                  navigate('/')
            }else {
            }
    
        }
    
        const onChange = (event) => {
            setcredentials({ ...credentials, [event.target.name]: event.target.value })
        }

    
    
    
    return (



        
        <>
            <NavBar />
            <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="" onSubmit={handleSubmit} >

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required="" value={credentials.email} onChange={onChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" value={credentials.password} onChange={onChange} autoComplete="current-password" required="" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                            <div className=" text-sm my-2">
                                <Link to="signup" className="font-semibold text-indigo-600 hover:text-indigo-500">Create a account</Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}
