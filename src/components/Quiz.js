import React, { useRef, useState } from "react";
import questionsArray from "@/data/Questions";
import Slider from "react-slick";
import Bullet from "./Bullet";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const slider = useRef();

  const nextQuestion = () => {
    if (slider.current) {
      setActiveQuestion(activeQuestion + 1);
      slider.current.slickNext();
      if (activeQuestion === questionsArray.length - 1) {
        setActiveQuestion(0);
      }
    }
  };

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
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <button onClick={nextQuestion}>CLICK HERE</button>
          <Bullet
            arrayLenght={questionsArray.length}
            activeQuestion={activeQuestion}
          />
        </div>
        <div>
          <Slider {...slickSettings} ref={slider}>
            {questionsArray.map((q) => {
              const [userAnswer, setUserAnswer] = useState(null);
              const [isItCorrect, setIsItCorrect] = useState();

              const selectAnswer = (event) => {
                setUserAnswer(event.target.innerText);
                event.target.style.backgroundColor = 'blue'
                
              };

              return (
                <div key={q.id} className={`slider-container ${userAnswer !== null &&'active' }`}>
                  <h1>{q.question}</h1>
                  
                  <div className="flex items-center justify-center mt-[20px]">
                    {q.options.map((option, index) => {
                      return (
                        <button
                          key={index}
                          className="bg-[green] rounded-[50%] w-[60px]"
                          onClick={selectAnswer}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                    
                    {}

                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Quiz;
