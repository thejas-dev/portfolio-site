"use client"
import {motion} from 'framer-motion'
import {HiOutlineArrowRight} from 'react-icons/hi';


export default function Projects() {
	const projects = [
	{
		type:'Full Stack Application Development',
		title:'Trendzio - Microblogging & Social Media Platform',
		description:"A dynamic social media platform merging Twitter's microblogging with real-time video calls (WebRTC), enriched by AI-driven post categorization for personalized user feeds. It enables real-time updates across devices, allowing users to instantly see liked posts and communicate via text messages and video calls, while MongoDB database ensures secure storage of user data.",
		url:'https://trendzio-v1.vercel.app/',
		image:'Trendzio.png'
	},
	{
		type:'Full Stack Application Development',
		title:'XAI the AI - SASS Website',
		description:"An AI tool designed to streamline day-to-day tasks with features like code writing, audio modulation, YouTube title tags generation, PDF conversions (pdf to audio book), and article generation, etc. Payment gateways are available to enable users to extend plans after utilizing their free quota, providing a seamless user experience.",
		url:'https://the-xai.vercel.app/',
		image:'xai.png'
	},
	{
		type:'Cyber Security Tool',
		title:'Subdomain Looker',
		description:"Subdomain looker is a tool to find subdomains of domain with their status code. It evaluates the provided domain with 30+ lakhs of subdomains in a minimal time with the power of GoLang and the result is displayed in a neat UI.",
		url:'https://subdomain-looker.vercel.app',
		image:'Subdomain.png'
	},
	{
		type:'Malware Development',
		title:'Ransomware for Educational Purposes',
		description:"Ransomware written in Python is designed to demonstrate how it can affect a system or organization by encrypting files, making them unavailable to legitimate users. It also includes a decryption script that requires a secret key for file decryption, which is typically held by the attackers.",
		url:'https://github.com/thejas-dev/ransomware-python',
		image:'ransomware.png'
	},
	{
		type:'Website Development',
		title:'Spotify With AI',
		description:"Spotify with an AI Voice Assistant allows you to play, pause, and search for songs, among other features. It uses real-time data from the Spotify app/website and has a voice-controlled AI assistant. The assistant can play, pause, and search for songs, and it includes additional features such as NoDisturbOnConvoMode. Developed in nextjs with middleware configured for login operations.",
		url:'https://spotify-future-thejas.vercel.app/',
		image:'Spotify.png'
	},
	{
		type:'Web Application Development',
		title:'Chat Siris v2 - Web Chatting Application',
		description:"chat-siris-v2 is a web chatting application where users can communicate with each other and chat-siris is capable of quickly sharing various types of media formats within seconds. Users can share files with multiple recipients, and the files will remain accessible in the channel chat box indefinitely. This allows anyone to download the file at any time.",
		url:'https://chat-siris-v2.vercel.app/',
		image:'chat-siris.png'
	},

	]

	return(
		<section id="projects" className="snap-start min-h-screen w-full flex items-center gap-5 flex-col py-10">
			<div className="flex flex-col md:px-14 px-3 py-3 w-full gap-5">
				<div className="flex items-center gap-5 justify-between">
					<h1 className="md:text-4xl text-xl text-center font-mono text-gray-100 cormorant uppercase">MY Projects</h1>
					<a target="_blank" href="https://github.com/thejas-dev"><button className="border-[1px] border-gray-400 text-white px-4 py-2 flex items-center gap-2 hover:border-red-500
					hover:bg-red-500 hover:text-white
					transition-all duration-200 ease-in-out">
					View more
					<HiOutlineArrowRight className="h-4 w-4"/>
					</button></a>
				</div>
				<div className="flex flex-col max-w-6xl mx-auto px-3 pt-2 py-10">
					{
						projects?.map((project,j)=>(
							<motion.div 
							initial={{opacity:0.3}}
							whileInView={{opacity:1}}
							transition={{duration:1.5}}
							viewport={{once:true}}
							className="w-full flex md:flex-row flex-col py-7 border-b-[1px] 
							border-gray-500 items-center md:gap-10 gap-5" key={j}>
								<div className="md:w-[45%] w-full">
									<a href={project?.image} target="_blank">
									<img src={project?.image} alt="Loading..."
									className="w-full rounded-xl cursor-pointer"
									/>
									</a>
								</div>
								<div className="md:w-[45%] w-full flex flex-col">
									<p className="text-sm font-mono text-red-500 leading-none">{project.type}</p>
									<h1 className="text-2xl mt-1 font-semibold text-white ">
										{project?.title}
									</h1>
									<p className="text-[13px] work_sans mt-8 text-gray-400 ">{project?.description}</p>
								</div>
								<div className="md:w-[5%] w-full flex items-center md:justify-center h-full">
									<a href={project?.url} target="_blank"><div className="p-2 bg-white rounded-full text-black hover:cursor-pointer
									shadow-xl transition-all duration-200 ease-in-out hover:text-red-500 hover:shadow-red-500">
										<HiOutlineArrowRight className="h-5 w-5"/>
									</div></a>
								</div>

							</motion.div>
						))
					}

				</div>


			</div>
		</section>
	)
}