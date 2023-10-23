
// import React, { Component } from 'react'
// import Button from './Button'
// import map from '../Images/map-img.png'


// class Contact extends Component {

//     state ={
//         YourName:'',
//         YourEmail:'',
//         YourPassword:'',
//         YourDistrics:'',
//         TextArea:'',
//         Gender:'',
//         CheakBox:true,
//     }

//     SubmitBtn =()=>[
//         console.log(this.state)
//     ]

//     CatchValue =(event)=>{
//         // console.log(event.target.value)
//         this.setState({
//             [event.target.name]:event.target.value
//         })
//     }

//   render() {
//     return (
//       <>
      
//       <div className=' w-full md:flex my-5 shadow-xl'>

//         <div className='md:w-1/2'>
//             <div className="bg-gray-400  ">
//                 <div className="p-3 md:p-12">
//                     <h4 className='text-white'>What's Your Name?</h4>
//                     <input onChange={this.CatchValue} type="text" className='border-none rounded-md w-full' name="YourName" placeholder='Enter Your Name' id="" />

//                     <h3 className='text-white'>What's Your Gmail Address?</h3>
//                     <input onChange={this.CatchValue} type="email" className='border-none rounded-md w-full' name="YourEmail" placeholder='Enter Your Email' id="" />

//                     <h4 className='text-white'>What's Your Password?</h4>
//                     <input onChange={this.CatchValue} type="password" className='border-none rounded-md w-full' name="YourPassword" placeholder='Enter Your Password' id="" />

//                     <div>
//                         <h4 className='text-white'>What's Your Districs Select?</h4>
//                         <select onChange={this.CatchValue} name="YourDistrics" className='border-none rounded-md w-full' id="">
//                             <option value="Select">Select</option>
//                             <option value="Dhaka">Dhaka</option>
//                             <option value="Jamalpur">Jamalpur</option>
//                             <option value="Dinajpur">Dinajpur</option>
//                         </select>
//                     </div>
//                         <h4 className='text-white'>What's Your TextArea?</h4>
//                         <textarea onChange={this.CatchValue}  name="TextArea" className='border-none rounded-md w-full' placeholder='Please Tell me' ></textarea>
                    
//                     <div>
//                         <h4 className='text-white'>What's Your Gender Select?</h4>
//                         <label htmlFor="Gender" className='text-white'> Male </label>
//                         <input onChange={this.CatchValue} type="radio" name="Gender" id="" />
//                         <label htmlFor="Gender" className='text-white'> Female </label>
//                         <input onChange={this.CatchValue} type="radio" name="Gender" id="" />
//                     </div>

                    
//                     <input onChange={this.CatchValue} type="checkbox" name="CheakBox" id="" />
//                     <label htmlFor="CheakBox" className='text-white'>  I agree & Ok</label>
//                     <br /><br />
//                     <div className='text-white'>
//                         {/* <button onClick={this.SubmitBtn} className='btn btn-outline-danger'>Submit</button> */}
//                         {/* import button  */}
//                         <Button onClick={this.SubmitBtn} >Submit</Button>
//                     </div>
//                     <br />
//             </div>
//             </div>
//         </div>

//         <div className='md:w-1/2'>
//             <img className='w-full h-full' src={map} alt="" />
//         </div>

//       </div>
//       </>
//     )
//   }
// }
// export default Contact;






// update contact section

import React from 'react';

const Contact = () => {
    return (
<>

<main className="p-5">
        <form  method="post" className="w-[400px] mx-auto p-6 my-16" x-data="signupForm">
          <h2 className="text-2xl font-semibold text-center mb-4">Create an account</h2>
          <p className="text-center text-gray-500 mb-3">
            or
            <a href="/src/login.html" className="text-sm text-purple-700 hover:text-purple-600">login with existing account</a>
          </p>
          <div className="mb-4">
            <input placeholder="Your name" type="text" name="name" x-model="form.name" className="border-gray-300 p-2 focus:outline-none  rounded-md w-full"/>
            <small x-show="errors.name" x-text="errors.name" className="text-red-600" />
          </div>
          <p />
          <div className="mb-4">
            <input placeholder="Your Email" type="email" name="email" x-model="form.email" className="border-gray-300 p-2 focus:outline-none  rounded-md w-full" />
            <small x-show="errors.email" x-text="errors.email" className="text-red-600" />
          </div>
          <div className="mb-4">
            <input placeholder="Password" type="password" name="password" x-model="form.password" className="border-gray-300 focus:outline-none p-2  rounded-md w-full"/>
            <small x-show="errors.password" x-text="errors.password" className="text-red-600" />
          </div>
          <div className="mb-4">
            <input placeholder="Repeat Password" type="password" name="password" x-model="form.password_repeat"  className="border-gray-300 focus:outline-none p-2  rounded-md w-full"/>
            <small x-show="errors.password_repeat" x-text="errors.password_repeat" className="text-red-600" />
          </div>
          <button onClick={()=> alert("Save Your Informations")}  className="btn-primary text-white bg-emerald-500 hover:bg-emerald-600 p-2 active:bg-emerald-700 w-full">
            Signup
          </button>
        </form>
      </main>

</>
    );
};

export default Contact;