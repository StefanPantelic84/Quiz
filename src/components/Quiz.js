import React, { useRef,useState } from 'react'
import questionsArray from '@/data/Questions'
import Slider from "react-slick"
import Bullet from './Bullet'

function Quiz() {

  const [activeQuestion,setActiveQuestion] = useState(0)

  const slider = useRef()

  const nextQuestion = ()=>{
  if (slider.current) {
    setActiveQuestion(activeQuestion + 1)
    slider.current.slickNext()
    if (activeQuestion === questionsArray.length -1  ) {
      setActiveQuestion(0)
    }
  }
  }

    const slickSettings = {
        className: "center",
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        initialSlide: 1,
        speed: 400,
        swipe: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };

      

  return (

      <>
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center'>
          <button onClick={nextQuestion}>CLICK HERE</button>
          <Bullet arrayLenght={questionsArray.length} activeQuestion={activeQuestion}/>
          </div>
          <div>
          
          <Slider {...slickSettings} ref={slider}>
         
            {questionsArray.map((q)=>{
               const [userAnswer, setUserAnswer] = useState(null)
            return <div key={q.id}  className='slider-container'>
              <h1 >{q.question}</h1>
              <div className='flex items-center justify-center mt-[20px]'>
                <button className='bg-[green] rounded-[50%] w-[60px]' onClick={()=>{
                  setUserAnswer(q.da); console.log(userAnswer)
                }}>green</button>
                <button className='bg-[red] rounded-[50%] w-[60px]' onClick={()=>{
                  setUserAnswer(q.ne)
                }}>red</button>
              </div>
                {userAnswer !== null && (
                  <div>
                  {userAnswer == q.answer && (
                    <>
                    <div>ALL GOOD </div>
                    <button onClick={nextQuestion}>click me</button>
                    </>
                  )}
                  {userAnswer !== q.answer && (
                    <div>NOT GOOD </div>
                  )}
                  </div>
                )}
            </div>
          })}
          </Slider>
          </div>
        </div>
      </>
  )
}

export default Quiz