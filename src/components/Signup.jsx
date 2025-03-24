import React from 'react'
import{Link} from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
  return (
   
   <div>
 <dialog id="my_modal_2" className='fixed inset-0 top-1/2  transform -translate-x-2 -translate-y-1/2 flex items-center justify-center border-[2px]  shadow-md p-6 rounded-md'>
      <div  className="">
      
          <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-lg" >✕</Link>
          
          <h3 className="font-bold text-lg">SignUp</h3>
          <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input type="name"  placeholder='Enter Your Name' className='w-80 px-3 border rounded-md outline-none'{...register("name", { required: true })} />
        <br />
        {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
        
             
          </div>
          <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter Your email' className='w-80 px-3 border rounded-md outline-none'{...register("email", { required: true })} />
        <br />
        {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
        
             
          </div>
          <div className='mt-4 space-y-2'>  
              <span>Password</span>
              <br />
              <input type="password" placeholder='Enter Your password' className='w-80 px-3 border rounded-md outline-none'{...register("email", { required: true })} />
        <br />
        {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
        
              <br />
             
        </div>
        
        <div className='flex justify-around mt-4'>
        <button className=' bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'>SignUp</button>
        
        <p>Have Account?{" "}
           <a className='underline text-blue-500 cursor-pointer'
        onClick={()=>{
        document.getElementById("my_modal_3").showModal()
        }}>
        Login
        </a>{" "}
        <Login/>
        </p>
  
        </div>
        </form>
      
      </div>
    </dialog>
    </div>
   
  )
}

export default Signup
