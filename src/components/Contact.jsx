import React from 'react'
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
    return (
        <div className='dark:bg-slate-950 dark:text-white' id='contact'>
            <div className="contact-me py-20" >
                <h2 className="text-3xl font-bold text-center p-2 m-2">
                    Contact
                </h2>
                <div className="contact-container text-center text-xl py-4 m-auto leading-relaxed w-4/5 mx-auto">
                <div>
                        I am open to opportunities in <div className="text-3xl text-blue-500 font-bold">full stack web development</div> 
                    </div>
                    <div className='leading-relaxed text-xl p-2 font-semibold'>
                        Want to work together with me, Reach out ✨.
                    </div>
                    <div className='flex justify-center items-center flex-col lg:flex-row lg:justify-evenly'>
                        <a href="mailto:pitakasanthosh@gmail.com" target="_blank" rel="noreferrer">
                            <button className="px-8 py-4 bg-blue-500 transition-all duration-400 ease-in-out hover:bg-blue-600 border-2 hover:border-yellow-400 rounded-xl text-white font-bold text-xl leading-relaxed m-4">
                             Contact me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact