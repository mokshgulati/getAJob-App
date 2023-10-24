import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo_google from '../../Assets/Logo/google.png'
import logo_microsoft from '../../Assets/Logo/microsoft.png'
import logo_netflix from '../../Assets/Logo/netflix.png'
import logo_meta from '../../Assets/Logo/meta.png'
import logo_amazon from '../../Assets/Logo/amazon.png'
import logo_tesla from '../../Assets/Logo/tesla.png'

const Data = [
  {
    id: 1,
    image: logo_google,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Google'
  },
  {
    id: 2,
    image: logo_microsoft,
    title: 'App Developer',
    time: '14 hrs',
    location: 'US',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Microsoft'
  },
  {
    id: 3,
    image: logo_netflix,
    title: 'UI/UX Designer',
    time: '10 hrs',
    location: 'UK',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Netflix'
  },
  {
    id: 4,
    image: logo_meta,
    title: 'DevOps Engineer',
    time: 'Now',
    location: 'UAE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Meta'
  },
  {
    id: 5,
    image: logo_amazon,
    title: 'Product Manager',
    time: '1 hr',
    location: 'India',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Amazon'
  },
  {
    id: 6,
    image: logo_tesla,
    title: 'Quality Analyst',
    time: '5 hrs',
    location: 'Netherlands',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Tesla'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10" >

        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover: shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white' >{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>
                </span>

                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[28px] border-t-[2px] st-[20px) group-hover:text-white'>{desc}</p>

                <div className='company flex items-center gap-2'>
                  <img src={image} alt='Company Logo' className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs