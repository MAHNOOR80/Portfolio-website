"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData =[
    {
        id:1,
        title:"React Portfolio Website",
        description:"A modern and responsive portfolio website built with React.js, showcasing my projects, skills, and contact details.",
        image:"/images/1.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:2,
        title:"Ecommerce Website",
        description:"A fully functional eCommerce platform with product listings, filtering, and a seamless shopping experience.",
        image:"/images/2.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"Countdown Timer",
        description:"A customizable countdown timer built with JavaScript that helps track events, deadlines, and reminders.",
        image:"/images/3.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"Food Ordering Website",
        description:"An interactive food ordering platform with a sleek UI, allowing users to browse menus, add items to the cart, and place orders easily.",
        image:"/images/4.png",
        tag:["All","Mobile"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:5,
        title:"Firebase Integration Project",
        description:"A project demonstrating Firebase integration with React, including Firestore database operations, authentication, and real-time updates",
        image:"/images/5.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:6,
        title:"Full-Stack Roadmap",
        description:"A structured roadmap covering essential topics and technologies required to become a full-stack developer.",
        image:"/images/6.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    }
]


const Projects = () => {
  const [tag, setTag] = useState<string>("All"); // Specify the type for useState

  const handleTagChange = (newTag: string) => { // Explicitly define the type for newTag
      setTag(newTag);
  }

    const filteredProjects = projectData.filter((project)=>
        project.tag.includes(tag)
    )
  return (
    <>
        <h2 text-wh  id="projects" className='text-center text-4xl font-bold text-white mt-4'>My Projects </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange}  name="All" isSelected={tag==="All"}/>
            <ProjectTag onClick={handleTagChange}  name="Web" isSelected={tag==="Web"}/>
            <ProjectTag onClick={handleTagChange}  name="Mobile" isSelected={tag==="Mobile"}/>

        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12 md:mt-3'>{ filteredProjects.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgurl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl
            }/>) }</div>
    </>
  )
}

export default Projects