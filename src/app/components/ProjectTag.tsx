import React from 'react';

interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void; // Define the type for the onClick function
    isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
    const buttonStyle = isSelected ? "text-white border-green-300" : "text-[ADB7BE] border-slate-600";
    
    return (
        <button className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
            {name}
        </button>
    );
}

export default ProjectTag;