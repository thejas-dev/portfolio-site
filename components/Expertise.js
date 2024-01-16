"use client"
import {GrTechnology} from 'react-icons/gr';
import { useState, useEffect, useRef } from 'react';
import {PiStudentBold} from 'react-icons/pi';
import {TbLayoutDashboard} from 'react-icons/tb';
import {SiHackerone} from 'react-icons/si';


export default function Expertise() {
	const [isVisible, setIsVisible] = useState(false);
	const componentRef = useRef(null);
	
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
	      { threshold: 1 } // Trigger when 50% of the component is in view
	    );

	    observer.observe(componentRef.current);

	    return () => {
	      observer.disconnect();
	    };
	  }, []);

	const data = [
	{
		title:'Web Development',
		description:"Developed robust applications with a wide range of technologies including socket, webRTC, SSR, SSG and more.",
		logo:<GrTechnology className="w-full h-full text-red-400"/>,
		completed:'Developed 50+ Applications'
	},
	{
		title:'Mentoring & Training',
		description:"Conducting Workshops on Full Stack Web Development and Developing Courses on Various Topics On 21st Skills Academy.",
		logo:<PiStudentBold className="w-full h-full text-red-400"/>,
		completed:'Trained 200+ Students'
	},
	{
		title:'Providing IT Solutions',
		description:"Developing customized dashboards, applications for client needs, including GIS-based Platforms, Landing sites for businesses, etc.",
		logo:<TbLayoutDashboard className="w-full h-full text-red-400"/>,
		completed:'6 Clients'
	},
	{
		title:'VAPT',
		description:"Expertise in testing applications for threats and vulnerabilities and developing cybersecurity tools for automating the penetration testing process.",
		logo:<SiHackerone className="w-full h-full text-red-400"/>,
		completed:'Tested 10+ applications and developed 5 tools'
	},
	]

	return(
		<section id="expertise" className="snap-start sm:mt-0 mt-10 min-h-screen w-full flex items-center justify-center px-5">
			<div className="max-w-6xl mx-auto flex flex-col gap-10 ">
				<h1 ref={componentRef} className="text-3xl text-center font-mono -space-x-[10px] text-gray-100 tracking-[10px] uppercase">Expertise</h1>
				<div className="w-full grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
					{
						data?.map((dat,k)=>(
							<div key={k} className={`w-full gap-4 rounded-lg border-[1px] px-3 border-gray-600 flex items-center ${isVisible ? 'imvisible' : 'invisible'}`}>
								<div className="w-[30%] sm:px-7 px-2 py-2 flex items-center justify-center h-full">
									{dat?.logo}
								</div>
								<div className="w-full h-full py-3">
									<div className="w-full h-full md:p-4 p-3 md:px-5 bg-[#292929] flex flex-col gap-7 justify-between rounded-lg">
										<h1 className="text-lg font-semibold monoserrat text-gray-200">{dat?.title}</h1>

										<div className="flex flex-col gap-3">
											<p className="exo-2 text-sm text-gray-500">{dat?.description}</p>
											<p className="leading-none quantico text-xs text-gray-300 font"><i>{dat?.completed}</i></p>
										</div>

									</div>

								</div>

							</div>

						))
					}


				</div>

			</div>

		</section>
	) 
}