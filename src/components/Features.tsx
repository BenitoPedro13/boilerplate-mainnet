import { Plus_Jakarta_Sans } from 'next/font/google';

export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin']})

const Features = () => {
	return (
		<section className="flex flex-col items-center py-16 gap-12 w-full h-fit bg-white">
			<div className="flex flex-col items-start px-4 gap-8 w-full h-fit">
				<div className="flex flex-col items-center p-0 gap-12 w-full h-fit">
					<div className="flex flex-col items-center p-0 gap-4 w-full h-fit">
						<div className="flex flex-col items-start p-0 gap-3 w-full h-fit">
              <h3 className={`w-full h-fit font-semibold text-sm text-primary-700 text-center ${jakarta.className}`}>
                Features
              </h3>
              <h2 className="font-[Balgin] font-semibold text-3xl leading-[38px] text-center">Analytics that feels like it’s from the future</h2>
            </div>
						<p className="w-full h-fit font-normal text-lg text-center text-gray-600">
							Powerful, self-serve product and growth analytics to help you
							convert, engage, and retain more users. Trusted by over 4,000
							startups.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-start px-4 w-full h-fit">
				<div className="flex flex-col items-start p-0 gap-10 w-full h-fit"></div>
			</div>
		</section>
	);
};

export default Features;
