import Header from '../components/Header'
import SpaceContainer from '../components/SpaceContainer'
import resume from '../assets/resume.png'
import Footer from '../components/Footer'

const Resume = () => {
    const downloadLink = "https://drive.usercontent.google.com/u/0/uc?id=1_BYQqXTzH_vMOmcAWqwH_a5Tuwgd4L6n&export=download";
    return (
        <>
            <Header />

            <div className='dark:bg-gray-900 py-20 flex justify-center items-center flex-row-reverse'>
                <div id='resume-download' className='flex justify-center items-center m-2'>
                    <a className='px-6 py-4 bg-zinc-950 border-2 hover:bg-black text-slate-200 hover:text-white  hover:border-blue-500 rounded-xl text-center' href={downloadLink}><span>Download Resume</span><span className="material-icons">download</span></a>
                </div>
                <div id='resume-preview ' className='flex justify-center items-center '>
                    <img src={resume} alt='Santhosh-resume' className='border-blue-600 border-2 rounded-xl fadeIn mx-4' />
                </div>


            </div>

            <Footer />
        </>
    )
}

export default Resume