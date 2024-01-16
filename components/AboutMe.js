"use client"
import {HiOutlineArrowRight} from 'react-icons/hi';
import {motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';

export default function AboutMe() {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisible2, setIsVisible2] = useState(false);
	const [isVisible3, setIsVisible3] = useState(false);
  	const componentRef = useRef(null);
  	const componentRef2 = useRef(null);
  	const componentRef3 = useRef(null);

  	useEffect(() => {
	    const observer = new IntersectionObserver(
	      (entries) => {
	        entries.forEach((entry) => {
	          if (entry.isIntersecting) {
	            setIsVisible(true);
	            observer.disconnect(); // Disconnect the observer after the component comes into view
	          }
	        });
	      },
	      { threshold: 0.5 } // Trigger when 50% of the component is in view
	    );

	    observer.observe(componentRef.current);

	    return () => {
	      observer.disconnect();
	    };
	  }, []);

  	useEffect(() => {
	    const observer = new IntersectionObserver(
	      (entries) => {
	        entries.forEach((entry) => {
	          if (entry.isIntersecting) {
	            setIsVisible2(true);
	            observer.disconnect(); // Disconnect the observer after the component comes into view
	          }
	        });
	      },
	      { threshold: 0.5 } // Trigger when 50% of the component is in view
	    );

	    observer.observe(componentRef2.current);

	    return () => {
	      observer.disconnect();
	    };
	  }, []);

  	useEffect(() => {
	    const observer = new IntersectionObserver(
	      (entries) => {
	        entries.forEach((entry) => {
	          if (entry.isIntersecting) {
	            setIsVisible3(true);
	            observer.disconnect(); // Disconnect the observer after the component comes into view
	          }
	        });
	      },
	      { threshold: 0.5 } // Trigger when 50% of the component is in view
	    );

	    observer.observe(componentRef3.current);

	    return () => {
	      observer.disconnect();
	    };
	  }, []);

	return (
		<section id="about-me" className="min-h-screen snap-start w-full flex items-center justify-center md:px-10 py-10 px-5">
			<div className="mx-auto flex h-full md:flex-row flex-col gap-10 ">
				<div ref={componentRef3} className={`flex flex-col gap-5 md:w-[50%] w-full group relative ${isVisible3 ? 'imvisible' : 'invisible'}`}>
					<img src="gifimage.gif" alt="Loading..."
					className="w-full absolute z-0 blur-md opacity-40 group-hover:opacity-[50%] 
					mix-blend-luminosit rounded-lg transition-all duration-200 ease-in-out"
					/>
					<img src="gifimage.gif" alt="Loading..."
					className="w-full mix-blend-luminosit z-30 rounded-lg"
					/>

				</div>

				<div className="flex flex-col gap-[80px] h-full md:py-3 md:w-[60%] w-full">
					<div  ref={componentRef} className="flex flex-col gap-3">
						<p className={`text-md monoserrat text-red-500 uppercase ${isVisible ? 'imvisible' : 'invisible'}`}>About Me</p>
						<h1 className={`text-3xl font-semibold nunito_sans tracking-[2px] text-gray-100 uppercase ${isVisible ? 'imvisible' : 'invisible'}`}>
							Passionate Developer and Cybersecurity Researcher
						</h1>
					</div>
					<div ref={componentRef2} className="flex flex-col gap-5">
						<p className={`text-gray-400 exo-2 text-sm  ${isVisible2 ? 'imvisible' : 'invisible'}`}>
							I&apos;m N.U. Thejas Hari, a Developer, and Cybersecurity Researcher. As a tech enthusiast, I have always been eager to learn new technologies and tools to enhance my skills. I have over 3 years of experience in Full Stack Web Development and one year of experience in penetration testing. I provide IT solutions for organizations to enhance their businesses and run my own academy 21stSkills.com, where I teach about web development and cybersecurity.
						</p>
						<div>
							<button className={`flex items-center gap-2 hover:gap-4 border-[1px] hover:border-[1.3px] 
							border-gray-600 hover:border-red-600 shadow-lg hover:shadow-red-500/50 
							transition-all text-xs duration-200 ease-in-out px-4 py-[6px] rounded-md  
							${isVisible2 ? 'imvisible' : 'invisible'}`}>
								21stSkills.com <HiOutlineArrowRight className="h-3 w-3"/>
							</button>
						</div>
					</div>
				</div>


			</div>
		</section>
	)
}