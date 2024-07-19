"use client"
import { useState, useEffect, useRef } from 'react';

export default function DevExperience() {
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
	              const duration = 2000;

	              const updateExperience = () => {
	                const currentTime = Date.now();
	                const elapsedTime = currentTime - startTime;

	                if (elapsedTime < duration) {
	                  const progress = elapsedTime / duration;
	                  const updatedExperience = Math.min(progress * 3, 3);

	                  setExperience(updatedExperience);

	                  requestAnimationFrame(updateExperience);
	                } else {
	                  setExperience(3);
	                  setAnimationComplete(true);
	                }
	              };

	              // Start the animation
	              updateExperience();
	              observer.disconnect(); // Disconnect the observer after the animation is triggered
	            }
	          });
	        },
	        { threshold: 0.5 } // Trigger when 50% of the component is in view
	      );

	      observer.observe(componentRef.current);

	      return () => {
	        observer.disconnect();
	      };
	    }
	  }, [animationComplete]);

	return (
		<div ref={componentRef} className="flex flex-col gap-4 items-center">
			<h1 className="text-2xl leading-none font-semibold text-white">{experience.toFixed(1)}<span className="text-red-500">+</span></h1>
			<p className="text-md leading-none text-gray-400">Years of Development Experience</p>
		</div>
	)
}