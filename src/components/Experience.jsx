import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import Stanford from '../assets/experience/stanford.png'
import SummerofBitcoinIcon from "../assets/experience/summerofbitcoin.png";
import IIMVIcon from "../assets/experience/iimv.png";
import AnitsImg from "../assets/experience/anits.jpg"
import 'react-vertical-timeline-component/style.min.css';
import SpaceContainer from './SpaceContainer';

const experienceDetails = [
  {
    id: 1,
    title: "Indian Institute of Management, Vizag",
    role: "Web developer Intern",
    date: "August 2024 - October 2024",
    icon: IIMVIcon,
    description: "I worked on the development of the Inter-Disciplinary Decision sciences & Analytics Lab website, and built Automation tooling for data extraction, processing from Images and PDFs using Optical Character Recognition (OCR) and Natural Language Processing (NLP) techniques using Python.",
  },
  {
    id: 2,
    title: "Stanford Codein Place",
    role: "Section Leader",
    date: "April 2024 - May 2024",
    icon: Stanford,
    description: "I Volunteered as section leader during the summer over the course of 6 weeks & taught 15 people from 8 different countries to assist  about karel(an interactive game to learn to code), programming in python and computer graphics.",
  },
  {
    id: 3,
    title: "Summer Of Bitcoin",
    role: "Apprentice",
    date: "February 2024 - March 2024",
    icon: SummerofBitcoinIcon,
    description: "Selected as an apprentice in the summer of bitcoin program, where I learned about the fundamentals of bitcoin, blockchain, and cryptography.",
  }, {
    id: 4,
    title: "Bachelor of Technology in Electronics and Communication Engineering",
    role: "Undergraduate student",
    date: "November 2022 - May 2026",
    description: "I am currently pursuing my Bachelor's degree in Electronics and Communication Engineering at the Anil Neerukonda institute of Technology & Sciences.",
    icon: AnitsImg,
  }
]

const Experience = () => {
  return (
    <section id='experience' className='bg-black text-gray-400'>
      <SpaceContainer />
      <h2 className='text-2xl lg:text-4xl text-center py-8'>Experience</h2>
      <VerticalTimeline animate={true} layout='1-column-left' lineColor='#069aed' className='lg:w-3/5 w-5/6'>
        
        {experienceDetails.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            date={experience.date}
             iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<img src={experience?.icon} alt={experience?.title}  className='rounded-full'/>}
            contentStyle={{ background: 'rgb(3,7,18)', color: '#fff' }}

          >
            <div>
              <h3 className='text-xl font-bold'>{experience.title}</h3>
              <h4 className='text-lg'>{experience.role}</h4>
              <ul className='lg:px-8 px-2 text-slate-400 text-sm sm:text-lg leading-relaxed py-4'>
                <li className='list-disc'>
                  {experience.description}
                </li></ul>
            </div>
          </VerticalTimelineElement>
        ))}

      </VerticalTimeline>

      
    </section>
  )
}

export default Experience
