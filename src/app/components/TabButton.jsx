import React, { Children } from 'react';

const TabButton = ({active,selectTab,children}) => {
    const buttonClasses = active? "text-white border-b border-green-300" : "text-[#ADB7BE] border-b border-green-300"
  return (
    <div>
         <button onClick={selectTab} >
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children} </p></button>
    </div>
  )
}

export default TabButton