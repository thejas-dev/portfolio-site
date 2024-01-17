
import {RxLinkedinLogo} from 'react-icons/rx';

export default function ClientSays() {
	

	return (
		<section id="client-review" className="snap-start w-full flex items-center gap-5 flex-col md:py-7 py-1">
			<div className="flex flex-col max-w-6xl mx-auto px-3 py-3 w-full gap-5">
				<div className="w-full flex items-center md:flex-row flex-col justify-between md:gap-5 gap-10">
					<div className="md:w-[30%] w-full h-full">
						<h1 className="md:text-6xl text-3xl text-gray-100">Testimonials</h1>
					</div>
					<div className="flex md:w-[50%] w-full flex-col gap-8">
						<h1 className="text-[18px] exo-2 text-gray-400">
							&quot;I was impressed with the day we started working together. His technical expertise, understanding objectives, commitment to deadlines, and ability to translate our vision into reality were outstanding.&quot;
						</h1>
						<div className="mt-1 h-[1px] bg-gray-400 w-full"/>
						<div className="w-full flex items-center justify-between">
							<p className="text-xs text-gray-200 flex items-center gap-1">
								<i>
									Ted Solomon 
								</i>
								<a href="https://www.linkedin.com/in/ted-solomon/" target="_blank">
									<RxLinkedinLogo className="h-4 w-4 hover:text-blue-500 text-gray-400"/>
								</a>
							</p>
							<p className="text-xs text-gray-400"><i>CEO of Aero2Astro</i></p>
						</div>
					</div>

				</div>

			</div>
		</section>
	)
}