import React from 'react'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom' 
function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    
    <dialog id="my_modal_1" className='flex flex-shrink-0  mt-24 items-center justify-center border-[4px] border-fixed p-20 rounded-md outline-none'>
      <div >
      <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
           
            <Link to='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-lg" >✕</Link>
       <p className='mt-4 space-y-2'> Your Name </p>
      <label className="input  flex items-center gap-2 mt-4 space-y-2  ">
  <input type="text" className="w-50 px-3 border rounded-md outline-none" placeholder="Your name" {...register("name", { required: false })} />
        <br />
        {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
        
</label>

<p className='mt-4 space-y-2'> Your Email </p>
<label className="input  flex  items-center gap-2 mt-4 space-y-2">
    <input type="email" className=" w-50 px-3 border rounded-md outline-none" placeholder="Your email"{...register("email", { required: true })} />
        <br />
        {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
         
   
</label>

<p className='mt-4 space-y-2'> How can i help you.. </p>
<br />
<label className=' '>  
<input
  type="text"
 
  className="input input-bordered input-primary w-full max-w-xs"  placeholder="text"{...register("text", { required: true })} />
  <br />
  {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
</label>
<div className='flex justify-around mt-4'>
  <button className=' bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'>Submit</button>
  
  </div>
</form>
    </div>
    </dialog>
    
  )
}

export default Contact
