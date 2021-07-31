import React, { useState, useEffect } from "react";
import ReasonItem from "./ReasonItem";
import "./CarouselComponent.css";
import FadeIn from "react-fade-in";


function CarouselComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === -1) {
      setCounter(5);
    } else if (counter > 5) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <div className="carousel_component">
      <i
        class="fas fa-angle-left"
        onClick={() => {
          setCounter((prevState) => prevState - 1);
        }}
      />

      {counter === 0 && (
        <FadeIn delay={400} transitionDuration={200}>
          <ReasonItem number={1}/>
        </FadeIn>
      )}
      {counter === 1 && (
        <FadeIn delay={400} transitionDuration={200}>
          <ReasonItem  number={2}/>
        </FadeIn>
      )}
       {counter === 2 && (
        <FadeIn delay={400} transitionDuration={200}>
          <ReasonItem number={3}/>
        </FadeIn>
      )}
      {counter === 3 && (
        <FadeIn delay={400} transitionDuration={200}>
          <ReasonItem number={4}/>
        </FadeIn>
      )}
      {counter === 4 && (
        <FadeIn delay={400} transitionDuration={200}>
          <ReasonItem number={5}/>
        </FadeIn>
      )}
       {counter === 5 && (
        <FadeIn delay={400} transitionDuration={200}>
          <ReasonItem number={6}/>
        </FadeIn>
      )}
      <i
        class="fas fa-angle-right"
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      />
    </div>
  );
}

export default CarouselComponent;
