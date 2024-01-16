
import {RxLinkedinLogo} from 'react-icons/rx';

export default function ClientSays() {
	

	return (
		<section id="client-review" className="snap-start w-full flex items-center gap-5 flex-col md:py-7 py-1">
			<div className="flex flex-col max-w-6xl mx-auto px-3 py-3 w-full gap-5">
				<div className="w-full flex items-center md:flex-row flex-col justify-between gap-5">
					<div className="md:w-[30%] w-full h-full">
						<h1 className="text-6xl text-gray-100">What My Client Says</h1>
					</div>
					<div className="flex md:w-[55%] w-full flex-col gap-8">
						<h1 className="text-md text-gray-400">
							&quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
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