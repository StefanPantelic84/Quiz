import React from 'react'

function Bullet({arrayLenght, activeQuestion}) {
  return (
    <div  className='flex flex-row m-[15px] mb-[50px]'>{Array(arrayLenght).fill(0).map((_,index)=>{
        return <div key={index} className={`bullet-container ${index === activeQuestion ? 'active' : ""}`}></div>
      })}
      </div>
  )
}

export default Bullet