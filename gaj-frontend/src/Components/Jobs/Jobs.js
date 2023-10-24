import React, { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo_google from '../../Assets/Logo/google.png'
import logo_microsoft from '../../Assets/Logo/microsoft.png'
import logo_netflix from '../../Assets/Logo/netflix.png'
import logo_meta from '../../Assets/Logo/meta.png'
import logo_amazon from '../../Assets/Logo/amazon.png'
import logo_tesla from '../../Assets/Logo/tesla.png'

const [data, setData] = useState({});
const [jobDesc, setJobDesc] = useState({});

useEffect(() => {
  fetch('http://localhost:3001/api/jobs')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, []);

const getJobDataById = (id) => {
  fetch(`http://localhost:3001/api/jobs/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setJobDesc(data);
    })
    .catch((error) => {
      window.alert('Error in fetching job data at the moment. Please try again!');
      console.error('Error:', error);
    });
}

const applyToJob = (id) => {
  const userResponse = window.prompt('Please enter your name, phoneNumber, and emailId in this format:[name,phone,emailId]');
  if (userResponse !== null) {
    const userDataArr = userResponse.split(',');
    if (userDataArr.length != 3) {
      window.alert('Incorrect format. Please check the format and try again');
    } else {
      let name = userDataArr[0];
      let phone = userDataArr[1];
      let email = userDataArr[2];

      fetch('http://localhost:3001/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, phone, email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.error('Result:', data);
          window.alert('Job Applied Successfully. Please wait for our email');
        })
        .catch((error) => {
          console.error('Error:', error);
          window.alert('Error in applying for the job. Please try again!');
        });
    }
  } else {
    window.alert('You canceled or closed the prompt. Please Try Again!');
  }
}

// ==================== SAMPLE DATA ==================
const sampleData = [
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
// ==================== /SAMPLE DATA/ ==================

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10" >

        {
          data.length ?
            data.map(({ id, image, title, time, location, desc, company }) => {
              return (
                <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover: shadow-lg">

                  <span className='flex justify-between items-center gap-4'>
                    <h1 onClick={(id) => getJobDataById(id)} className='text-[16px] font-semibold text-textColor group-hover:text-white' >{title}</h1>
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

                  <button onClick={() => applyToJob(id)} className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>

                </div>
              )
            }) :
            <span>Fetching Jobs... Please wait!</span>
        }

      </div>
    </div>
  )
}

export default Jobs