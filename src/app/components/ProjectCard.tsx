import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const ProjectCard = ({ imgurl, title, description, tag ,gitUrl,previewUrl}) => {
  return (
    <div>
      {/* Card Image */}
      <div
        className="h-52 md:h-72  rounded-t-xl bg-[#181818] px-4 py-6 bg-cover bg-center relative group"
        style={{
          backgroundImage: `url(${imgurl})`,
        }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>

          <Link href={gitUrl} className='h-14 w-14  mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white  group/link'>
          <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2   cursor-pointer group-hover:/link hover:text-white'/>
          </Link>


          <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white  group/link'>
          <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2   cursor-pointer group-hover:/link hover:text-white'/>
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="text-white p-4 bg-black mt-3 bg-opacity-70">
        <h5 className="font-semibold mb-2 text-xl">{title}</h5>
        <p className="text-sm text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
