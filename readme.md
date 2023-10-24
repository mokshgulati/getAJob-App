APIs for ‘Get A JOB’ - APP


1. jobs API:

Request-
curl --location --request GET 'http://localhost:3000/api/jobs' \
--header 'Content-Type: application/json' \

Response-
[
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


2. jobDetails API:

Request-
curl --location --request GET 'http://localhost:3000/api/jobs/12345' \
--header 'Content-Type: application/json' \

Response-
[
   {
	id: 12345,
	image: logo_beekin,
	title: 'Full Stack Engineer',
	time: 'Now',
	location: 'UK',
	desc: 'Beekin is a next-generation real estate analytics platform. Our solutions allow your organization to outcompete in the market. By leveraging Big Data and AI you can increase NOI, improve resident retention, and maximize asset value. Beekin has delivered precision, automation, and alpha for some of the smartest real estate investors, developers, lenders, and operators with its intuitive and easy-to-use platform built for multifamily and single-family units. With Beekin, the future has arrived.
',
	company: 'Beekin'
  }
]


3. Job apply API:

Request-
curl --location --request POST 'http://localhost:3000/api/apply' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "Moksh Gulati",
	"jobId": "12345",
	"email": "mokshgulati14@gmail.com",
	"phone": "9654642702"
}'

Response-
{ message: 'Job added successfully', jobId: 65788 }