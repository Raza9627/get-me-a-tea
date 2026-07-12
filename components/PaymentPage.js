"use client"
import React,{useState,useEffect} from 'react'
import Script from 'next/script'
import { initiate,fetchuser,fetchpayments } from '@/actions/useractions'
import { notFound } from "next/navigation"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { Bounce } from 'react-toastify'
const PaymentPage = ({ username }) => {
    const [paymentform, setpaymentform] = useState({name: "", message: "", amount: ""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router= useRouter()
   useEffect(() => {
     getData();
   
   },[])
   
useEffect(() => {
        if(searchParams.get("paymentdone") == "true"){
        toast('Thanks for your donation!', {          
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        router.push(`/${username}`)
     
    }, [])

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    
    const getData= async ()=>{
        let u= await fetchuser(username);
        setcurrentUser(u)
        let dbpayments= await fetchpayments(username)
        setpayments(dbpayments)
    }

    const pay = async (amount) => {
        let a = await initiate(amount,username,paymentform);
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Get me a chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            callback_url: `${window.location.origin}/api/razorpay`,
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
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='w-full bg-red-50 relative'>
                <img className='object-cover h-54 w-full md:h-[350]' src={currentUser.coverpic} alt="cover" />
                <div className="absolute -bottom-12 md:-bottom-16 right-[37.5%] md:right-[45%] border-white border-2 rounded-2xl md:w-[150px] md:h-[150px] w-[100px] h-[100px] overflow-hidden">
                    <img
                        src={currentUser.profilepic}
                        alt="userimage"
                    />
                </div>

            </div>
            <div className='flex justify-center items-center mt-14 md:mt-19 flex-col gap-2'>
                <div className='font-bold text-sm md:text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                  Lets help {username} get a chai!
                </div>
                <div className='text-slate-400'>
                {payments.length} Payments. ₹{payments.reduce((a,b)=> a+b.amount,0)} raised
                </div>
                <div className="payment flex flex-col md:flex-row gap-3 w-[85%] md:w-[80%] ">
                    <div className="supporters md:w-1/2 bg-slate-900 rounded-lg text-lg p-10 order-2 ">
                        <h2 className='text-2xl font-bold md:my-5'>Top 10 Supporters</h2>
                        <ul className='md:mx-5'>
                             {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p,i)=> {
                           return <li key={i} className='my-2'>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message <span className='font-bold'>&quot;{p.message}&quot;</span></li>
                          })}
                        </ul>
                    </div>
                    <div className=" md:w-1/2 bg-slate-900 rounded-lg text-lg p-10 order-1 md:order-2">
                        <h2 className='text-2xl font-bold m-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <div>
                                <input onChange={handleChange} value={paymentform.name}
                                name='name'  type="text" className='w-full p-3 rounded-lg bg-slate-800 border`' placeholder='Enter Name' />

                            </div>
                            <input onChange={handleChange} value={paymentform.message}
                            name='message'  type="text" className='w-full p-3 rounded-lg bg-slate-800 border`' placeholder='Enter Message' />

                            <input onChange={handleChange} value={paymentform.amount} 
                            name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800 border`' placeholder='Enter Amount' />

                            <button onClick={() => pay(paymentform.amount*100)} type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:from-purple-200'disabled={paymentform.name?.length<3 || paymentform.message?.length<3 || paymentform.amount?.length<1}>Pay</button>
                        </div>
                        <div className="text-sm md:text-lg flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer' onClick={() => pay(5000)}>Pay ₹50</button>
                            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer' onClick={() => pay(10000)}>Pay ₹100</button>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default PaymentPage
