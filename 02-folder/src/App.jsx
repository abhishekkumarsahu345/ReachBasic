import React from 'react'
import Card from './components/card'
 
const App=()=> {
const jobOpenings = [
  {
    id: 1,
    company: "Google",
    logo: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg",
    role: "Frontend Developer",
    posted: "3 days ago",
    type: "Full Time",
    level: "Junior",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Software Engineer",
    posted: "1 week ago",
    type: "Full Time",
    level: "Mid Level",
    pay: "$60/hr",
    location: "California, USA"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Backend Developer",
    posted: "2 days ago",
    type: "Part Time",
    level: "Junior",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    role: "iOS Developer",
    posted: "5 days ago",
    type: "Full Time",
    level: "Senior",
    pay: "$80/hr",
    location: "California, USA"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    role: "UI Engineer",
    posted: "2 weeks ago",
    type: "Full Time",
    level: "Mid Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    id: 6,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    role: "React Developer",
    posted: "4 days ago",
    type: "Full Time",
    level: "Junior",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  // ...repeat or mix these URLs for the remaining jobs
{
  id: 7,
  company: "Tesla",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
  role: "Full Stack Developer",
  posted: "6 days ago",
  type: "Full Time",
  level: "Senior",
  pay: "$75/hr",
  location: "Texas, USA"
},
{
  id: 8,
  company: "Adobe",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Adobe_Corporate_logo.svg",
  role: "Frontend Engineer",
  posted: "1 day ago",
  type: "Part Time",
  level: "Junior",
  pay: "$42/hr",
  location: "Noida, India"
},
{
  id: 9,
  company: "Uber",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  role: "Software Developer",
  posted: "3 weeks ago",
  type: "Full Time",
  level: "Mid Level",
  pay: "$65/hr",
  location: "San Francisco, USA"
},
{
  id: 10,
  company: "Airbnb",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  role: "Backend Engineer",
  posted: "2 weeks ago",
  type: "Full Time",
  level: "Senior",
  pay: "$78/hr",
  location: "Remote"
},
{
  id: 11,
  company: "Twitter (X)",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
  role: "API Developer",
  posted: "5 days ago",
  type: "Part Time",
  level: "Mid Level",
  pay: "$58/hr",
  location: "California, USA"
}


];




  return (
    <div className='parent'>
    
{jobOpenings.map(function(elem,idx){
  return <div key={idx}>
    <Card company={elem.company} logo={elem.logo} role={elem.role} posted={ elem.posted} type={elem.type} level={elem.level} pay={elem.pay} location={elem.location} />
    </div>
})}

    </div>
  )
}

export default App ;