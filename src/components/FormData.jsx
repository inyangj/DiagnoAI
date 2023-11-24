import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { FaExclamationCircle } from 'react-icons/fa'
import fullnameicon from "../assets/fullnameicon.png"
// import FormModal from './FormModal'





const FormData = () => {

    const form = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            date: "",
            password: "",  
            confirm_password: "",
        }
       
    })
    // const [userInput, setUserInput] = useState()
    const { register, control, handleSubmit, watch, reset, formState } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log("form submitted", data)
        // console.log(errors)
        reset() 
    }

    
   

    return (
        <div className='mt-8'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full h-auto flex flex-col
         gap-y-4">

                  
                <div className='w-full flex flex-col gap-y-6'>


                    <div className="w-full h-auto relative space-y-2">
                            <label className="text-sm md:text-lg text-textgray">
                                Full Name
                            </label>

                        <input className="w-full p-2 rounded-lg border-2 border-solid
                            border-gray300 outline-none placeholder:text-xs md:placeholder:text-lg md:p-4"
                            type="text" id="fullname"  placeholder="Enter Your Full Name"
                        {...register("fullname", {
                            required: {
                                value: true,
                                message:  "Full name is required",
                            }
                           
                        })} />
                         <div className="absolute inset-y-0 left-0 top-6 pl-2 flex items-center pointer-events-none">
                            
                           </div>
                    
                        {errors.fullname?.message && 
                        <p className='text-red-500 flex 
                        flex-row gap-1 text-sm md:text-md'>
                        <FaExclamationCircle className="text-red-500 mt-1" 
                        />{errors.fullname?.message}</p>}
                        </div>

                </div>


                <div className='w-full flex flex-col gap-y-6'>


                    <div className="w-full h-auto space-y-2">
                    <label className="text-sm md:text-lg text-textgray">
                            Email Address
                        </label>

                        <input
                        className="w-full p-2 rounded-sm border-2 border-solid border-gray300 placeholder:text-xs md:placeholder:text-lg md:p-4"
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter A Valid Email Address',
                              },
                          })}
                        />

                        {errors.email?.message && (
                        <p className='text-red-500 flex flex-row gap-1 text-sm md:text-md'>
                            <FaExclamationCircle className="text-red-500 mt-1" />
                            {errors.email?.message}
                        </p>)}

                    </div>


                    <div className="w-full h-auto space-y-2">
                    <label className="text-sm md:text-lg text-textgray">Date Of Birth</label>

                        <input
                        {...register("date", {
                            required: 'Date of birth is required',
                            validate: (value) => {
                            const isValidDate = !isNaN(Date.parse(value));
                            return isValidDate || 'Invalid date';
                            },
                        })}
                        className="w-full p-2 rounded-lg border-2 border-solid border-gray-300 outline-none placeholder:text-xs md:placeholder:text-lg md:p-4"
                        type="date"
                        id="date"
                        placeholder="Enter Your Date Of Birth"
                        />

                        {errors.date && (
                        <p className='text-red-500 flex flex-row gap-1 text-sm md:text-md'>
                            <FaExclamationCircle className="text-red-500 mt-1" />
                            {errors.date.message}
                        </p>
                        )}
                    </div>

                    


                </div>

                <div className='w-full flex flex-col gap-6'>


                <div className="w-full h-auto space-y-2">
                <label className="text-sm md:text-lg text-textgray">
                            Create Password
                        </label>

                        <input className="w-full p-2 rounded-lg border-2 border-solid
                        border-gray300 outline-none placeholder:text-xs md:placeholder:text-lg md:p-4 peer ..."
                        type="password" id="password"  placeholder="Enter Your New Password" {...register(
                            "password", {
                                pattern: {
                                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                                    message: "8-16 characters long, at least one capital/small letter, at least one symbol, at least one number",
                                }
                            }
                        )} />
                         {/* <p className='color-red text-sm md:text-md'>{errors.password?.message}</p> */}
                         {errors.password?.message && 
                        <p className='text-red-500 flex 
                        flex-row gap-1 text-sm md:text-md'>
                        <FaExclamationCircle className="text-red-500 mt-1" 
                        />{errors.password?.message}</p>}
                    </div>

                    <div className="w-full h-auto space-y-2">
                    <label className="text-sm md:text-lg text-textgray">
                            Confirm Password
                        </label>

                        <input className="w-full p-2 rounded-lg border-2 border-solid
                        border-gray300 outline-none placeholder:text-xs md:placeholder:text-lg md:p-4"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Your New Password"
                        {...register("confirm_password", {

                            required: true,

                            pattern: {   
                             message: "Your passwords do not match",
                            },
                            validate: (val) => {
                              if (watch('password') !== val) {
                                return "Your passwords do no match"
                              }
                            },
                           })}/>
                            {/* <p className='color-red text-sm md:text-md'>{errors.confirm_password?.message}</p> */}

                            {errors.confirm_password?.message && 
                            <p className='text-red-500 flex 
                            flex-row gap-1 text-sm md:text-md'>
                            <FaExclamationCircle className="text-red-500 mt-1" 
                            />{errors.confirm_password?.message}</p>}
                    </div>

                  
                </div>

                      <button type="submit" 
                      className="w-full p-3 mt-6
                      bg-lightgreen text-white
                      rounded-lg">
                       Create Account
                </button>
                {/* {isShown && (
                    <FormModal handleModalDisplay={handleModalDisplay} />
                )} */}

                    
                   
                </form> 
                {/* <DevTool control={control}/>    */}
        </div>
    )
}

export default FormData