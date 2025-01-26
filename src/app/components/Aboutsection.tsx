"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import myimage from '@/app/assests/about.jpeg';
import TabButton from '@/app/components/TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Html</li>
                <li>Css</li>
                <li>Node.js</li>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li> Pursuing a medical career with strong foundational knowledge in healthcare.</li>
                <li> Skilled in HTML, CSS, JavaScript, TypeScript, and Next.js.</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li> HTML, CSS, JavaScript, TypeScript, and Next.js.</li>
                <li>Gained certifications related to medical and IT fields, strengthening both technical and healthcare knowledge.</li>
            </ul>
        )
    }
]

const Aboutsection = () => {
    const [tab, setTab] = useState<string>("skills");
    const [, startTransition] = useTransition(); // Removed isPending

    const handleTabChange = (id: string) => { // Changed any to string
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src={myimage} alt='mypic' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white sm:mt-4 mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am Mahnoor, a passionate web developer, aspiring frontend specialist, and UI/UX designer with a flair for creativity and attention to detail. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I enjoy crafting user-friendly, visually appealing, and intuitive digital experiences. Beyond coding, I am skilled in graphic design and data entry, which allows me to blend creativity and precision in all my projects. As a lifelong learner, I am exploring advanced technologies like Next.js and Tailwind CSS to stay ahead in the ever-evolving tech world. Whether it&apos;s designing seamless user interfaces, building responsive websites, or creating engaging graphics, I am driven by a desire to deliver meaningful and impactful solutions.</p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content || null}</div>
                </div>
            </div>
        </section>
    )
}

export default Aboutsection;