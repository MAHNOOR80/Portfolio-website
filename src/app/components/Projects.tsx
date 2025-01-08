"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import portfolioimg from '@/app/assests/portfolio.jpg'
import PreviousMap_ from 'postcss/lib/previous-map'
import ProjectTag from './ProjectTag'

const projectData =[
    {
        id:1,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"/images/1.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"

    },
    {
        id:2,
        title:"Ecommerce Website",
        description:"Project 2 description",
        image:"/images/2.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"Countdown Timer",
        description:"Project 3 description",
        image:"/images/3.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"TIC-TAC-TOE",
        description:"Project 4 description",
        image:"/images/4.png",
        tag:["All","Mobile"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:5,
        title:"Calculator",
        description:"Project 5 description",
        image:"/images/5.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:6,
        title:"Calculator",
        description:"Project 8 description",
        image:"/images/6.png",
        tag:["All","Web"],
          gitUrl:"/",
        previewUrl:"/"
    }
]


const Projects = () => {
    const [tag,setTag]=useState("All");

    const handleTagChange=(newTag)=>{
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