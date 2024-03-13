import React from 'react'
import { SiFiverr, SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div className="contact-me py-4" id='contact'>
                <h2 className="text-3xl font-bold text-center p-4 m-2">
                    Contact me
                </h2>
                <div className="contact-container text-center text-xl py-4 m-auto leading-relaxed w-4/5 mx-auto">
                    <div>
                        I am open to opportunities in <div className="text-3xl text-blue-500 font-bold">full stack web development</div> 
                    </div>
                    <div>
                        Want to work together, feel free to reach out to me.
                    </div>
                    <div className='flex justify-center items-center flex-col lg:flex-row lg:justify-evenly'>
                        <a href="https://www.linkedin.com/in/santhoshmanip" target="_blank" rel="noreferrer">
                            <button className="px-8 py-4 bg-blue-500 transition-all duration-400 ease-in-out hover:bg-blue-600 border-2 hover:border-yellow-400 rounded-xl text-white font-bold text-xl leading-relaxed m-4">
                               Connect on <SiLinkedin className="inline mx-2 text-4xl" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact