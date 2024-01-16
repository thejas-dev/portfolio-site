"use client"

import Image from 'next/image';
import Loader from './Loader';
import {HiOutlineArrowRight} from 'react-icons/hi';
import {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import DevExperience from './DevExperience';
import ProjectsCompleted from './ProjectsCompleted';
import TrainedStudents from './TrainedStudents';
import ClientSatisfaction from './ClientSatisfaction';

export default function Hero() {
	const [loading,setLoading] = useState(true);
	const mainDescription = 'Passionate about application development and programming, with a focus on securing applications through strong coding practices and effective cybersecurity measures. Committed to providing high-quality solutions that match client expectations.';
	const [buttonAnimation,setButtonAnimation] = useState(false);
	
	const scrolltoabout = () => {
		document.getElementById('about-me').scrollIntoView({
			behavior:"smooth",
			block:"start"
		})
	}

	const typeMessage = (text) =>{
	    let index=0;
	    const element =document.getElementById('description-box');
	    element.innerHTML = "";
	    const interval = setInterval(()=>{
	      if(index<text.length){
	        element.innerHTML += text.charAt(index);
	        index++;
	      }else{
	        clearInterval(interval);
	        setButtonAnimation(true);
	        document.getElementById('btn').classList.add('gap-5');
	        document.getElementById('btn').classList.add('text-red-500');
	        setTimeout(function() {
		        document.getElementById('btn').classList.remove('gap-5');
		        document.getElementById('btn').classList.remove('text-red-500');
	        	// document.getElementById('btn').classList.remove('w-[150px]');
	        	// document.getElementById('btn').classList.add('w-[185px]');
	        }, 1000);
	      }
	    },30)
	    
	  }

	useEffect(()=>{setLoading(false);console.log("loaded");typeMessage(mainDescription)},[])

	return (
		<section id="hero" className="min-h-screen snap-start w-full flex items-center gap-5 flex-col justify-center py-5 pt-0">
			{
				loading && <Loader />
			}
			<div className="flex items-center w-full gap-5 md:px-14 px-5 max-w-6xl">
				<div className="w-full flex items-center md:flex-row flex-col gap-5 relative justify-end">
					<motion.div  
					className="relative" >
						{/*<img src="hero_image.png"
												className="absolute w-full top-0 left-0 blur-[40px] opacity-10"/>*/}
						<img
						src="https://ik.imagekit.io/d3kzbpbila/hero_MD1nIj0rM.png?updatedAt=1705390824244" 
						className="h-[470px] opacity-[90%] object-cover w-full"/>
					</motion.div>
					<div className="w-full md:absolute top-0 left-0 h-full flex items-center justify-start">
						<div className="flex flex-col max-w-lg lg:max-w-xl ">
							<h1 className="text-3xl text-white uppercase audiowide">Developing and Securing the tech world</h1>
							<p id="description-box" className="text-sm quantico mt-14 text-gray-400"></p>
							
							<div className="mt-5" >
								<button id="btn" onClick={scrolltoabout} className="bg-white border-[1px] border-gray-600 text-black flex items-center gap-2 
								hover:gap-3 px-3 py-1 transition-all duration-300 ease-in-out rounded-md hover:shadow-md 
								shadow-white/40 font-mono hover:text-red-500">
										Explore my portfolio <HiOutlineArrowRight className="h-5 w-5"/>
								</button>
							</div>
						</div>
					</div>
				</div>


			</div>


			<div className="mx-auto flex h-full md:flex-row flex-col gap-10 mt-10 md:mt-0 w-full">

				<div className="flex items-center w-full md:flex-row flex-col md:px-10 px-5 gap-5 items-center justify-between">
					<DevExperience />
					<ProjectsCompleted />
					<TrainedStudents />
					<ClientSatisfaction />

				</div>
			</div>
		</section>
	)
}