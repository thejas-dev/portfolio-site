
import {HiOutlineArrowRight} from 'react-icons/hi';


export default function Contact() {
	
	return	(
		<section id="contact" className="snap-start w-full flex items-center gap-5 flex-col py-10">
			<div className="flex flex-col md:px-14 px-3 py-3 w-full gap-5">
				<div className="w-full gap-5 px-10 py-14 bg-[#262626] relative">
					<img src="https://th.bing.com/th/id/R.2c7323399247fd2e95a50a6385eb188e?rik=rf3vM6VkbPKWNw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_35129.png&ehk=SOzfgIAhhhZF4VV5nrs3ObgCHzENUPJrT25eiBsS4oQ%3d&risl=&pid=ImgRaw&r=0" 
					className="absolute top-8 left-8 invert opacity-30 h-[80px] w-[80px] animate-slow-bounce"
					/>
					<img src="https://i.pinimg.com/originals/12/51/ab/1251ab1a9a8d45c3ea7d09d517e9189e.png" 
					className="absolute bottom-8 right-8 invert opacity-30 h-[80px] w-[80px] animate-slow-bounce"
					/>
					<h1 className="text-center exo-2 md:text-5xl text-3xl sm:max-w-xl max-w-2xl  mx-auto">
					Want to Collaborate?<br/> Let&apos;s Turn Your Ideas Into Art! 
					</h1>
					<a target="_blank" href="mailto:thejaskala308@gmail.com">
					<button className="bg-white mx-auto mt-7 px-4 py-2 text-black flex 
					items-center gap-2 hover:gap-4 hover:shadow-red-500/50 shadow-xl hover:text-red-500 transition-all duration-200 ease-in-out">
						Contact me <HiOutlineArrowRight className="h-5 w-5"/>
					</button>
					</a>
				</div>
			</div>
		</section>
	)
}