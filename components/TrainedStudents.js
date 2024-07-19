

"use client"
import { useState, useEffect, useRef } from 'react';

export default function TrainedStudents() {
	const [experience, setExperience] = useState(0);
 	const componentRef = useRef(null);
    const [animationComplete, setAnimationComplete] = useState(false);
 	
    useEffect(() => {
	    if (!animationComplete) {
	      const observer = new IntersectionObserver(
	        (entries) => {
	          entries.forEach((entry) => {
	            if (entry.isIntersecting) {
	              const startTime = Date.now();
	              const duration = 2800; 

	              const updateExperience = () => {
	                const currentTime = Date.now();
	                const elapsedTime = currentTime - startTime;

	                if (elapsedTime < duration) {
	                  const progress = elapsedTime / duration;
	                  const updatedExperience = Math.min(progress * 400, 400);

	                  setExperience(updatedExperience);

	                  requestAnimationFrame(updateExperience);
	                } else {
	                  setExperience(400);
	                  setAnimationComplete(true);
	                }
	              };
	              updateExperience();
	              observer.disconnect(); 
	            }
	          });
	        },
	        { threshold: 0.5 } 
	      );

	      observer.observe(componentRef.current);

	      return () => {
	        observer.disconnect();
	      };
	    }
	  }, [animationComplete]);

	return (
		<div ref={componentRef} className="flex flex-col gap-4 items-center">
			<h1 className="text-2xl leading-none font-semibold text-white">{experience.toFixed(0)}<span className="text-red-500">+</span></h1>
			<p className="text-md leading-none text-gray-400">Trained Students</p>
		</div>
	)
}