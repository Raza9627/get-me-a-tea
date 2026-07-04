"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
const PaymentPage = ({username}) => {
const pay=async (amount,orderId)=>{
    let a= await initiate(amount,session?.user.name,paymentform);
    let orderId=a.id;
   var options = {
    "key": process.env.KEY_ID, 
    "amount": amount, 
    "currency": "INR",
    "name": "Get me a chai", 
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, 
    "callback_url": `${process.eventNames.URL}/api/razorpay`,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "<name>", //your customer's name
        "email": "<email>",
        "contact": "<phone>" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
}
var rzp1 = new Razorpay(options);
    rzp1.open();
}
  return (
    <>
<div className='w-full bg-red-50 relative'>
                <img className='object-cover h-54 w-full md:h-[350]' src="https://images.pexels.com/photos/14747731/pexels-photo-14747731.jpeg" alt="cover" />
                <div className="absolute -bottom-12 md:-bottom-16 right-[37.5%] md:right-[45%] border-white border-2 rounded-2xl md:w-[150px] md:h-[150px] w-[100px] h-[100px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=774&auto=format&fit=crop"
                        alt="userimage"
                    />
                </div>

            </div>
            <div className='flex justify-center items-center mt-14 md:mt-19 flex-col gap-2'>
                <div className='font-bold text-sm md:text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Creating Animated art for VIT's
                </div>
                <div className='text-slate-400'>
                    9,719 members . 82 Posts . $15,450/release
                </div>
                <div className="payment flex flex-col md:flex-row gap-3 w-[85%] md:w-[80%] ">
                    <div className="supporters md:w-1/2 bg-slate-900 rounded-lg text-lg p-10 order-2 ">
                        <h2 className='text-2xl font-bold md:my-5'>Supporters</h2>
                        <ul className='md:mx-5'>
                            <li className='my-2'>Subham donated <span className='font-bold'>$30</span> with a message <span className='font-bold'>Lots of love bro</span></li>
                            
                            <li className='my-2'>Vishal donated <span className='font-bold'>$10</span> with a message <span className='font-bold'>amazing work</span></li>
                            <li className='my-2'>Sahil donated <span className='font-bold'>$80</span> with a message <span className='font-bold'>its fascinating bro</span></li>
                            <li className='my-2'>Dev donated <span className='font-bold'>$20</span> with a message <span className='font-bold'>too much efforts bro</span></li>
                        </ul>
                    </div>
                    <div className=" md:w-1/2 bg-slate-900 rounded-lg text-lg p-10 order-1 md:order-2">
                        <h2 className='text-2xl font-bold m-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <div>
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800 border`' placeholder='Enter Name' />

                            </div>
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 border`' placeholder='Enter Message' />

                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 border`' placeholder='Enter Amount' />
                            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Pay</button>
                        </div>
                        <div className="text-sm md:text-lg flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(10)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(50)}>Pay ₹50</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(100)}>Pay ₹100</button>
                        </div>
                    </div>
                </div>
                <br />
            </div>
    </>
  )
}

export default PaymentPage