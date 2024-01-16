
"use client"
import { useState, useEffect, useRef } from 'react';

export default function ProjectsCompleted() {
	const [experience, setExperience] = useState(0);
 	const componentRef = useRef(null);
    const [animationComplete, setAnimationComplete] = useState(false);
 	


 	useEffect(() => {
	    if (!animationComplete) {
	      const observer = new IntersectionObserver(
	        (entries) => {
	          entries.forEach((entry) => {
	            if (entry.isIntersecting) {
	              // Start increasing the experience after the component comes into view
	              const startTime = Date.now();
	              const duration = 2500; // 2 seconds

	              const updateExperience = () => {
	                const currentTime = Date.now();
	                const elapsedTime = currentTime - startTime;

	                if (elapsedTime < duration) {
	                  // Calculate the experience value based on the elapsed time
	                  const progress = elapsedTime / duration;
	                  const updatedExperience = Math.min(progress * 50, 50);

	                  setExperience(updatedExperience);

	                  // Schedule the next update
	                  requestAnimationFrame(updateExperience);
	                } else {
	                  // Ensure the final value is exactly 50
	                  setExperience(50);
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
			<h1 className="text-2xl leading-none font-semibold text-white">{experience.toFixed(0)}<span className="text-red-500">+</span></h1>
			<p className="text-md leading-none text-gray-400">Successful Projects Completed</p>
		</div>
	)
}