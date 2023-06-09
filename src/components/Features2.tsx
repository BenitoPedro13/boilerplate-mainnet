import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

import arrowRight from '@/../public/arrow-right.svg';
import chartBreakoutSquare from "@/../public/chart-breakout-square.svg";
import featureContentUi from "@/../public/feature-content-ui.png";
import featureContentUiDesktop from "@/../public/featureContentUiDesktop.png";
import messageChatCircle from "@/../public/message-chat-circle.svg";

import zap from "@/../public/zap.svg";

const Features2 = () => {
	return (
		<section className="flex flex-col items-center py-16 gap-12 w-full h-fit bg-white lg:py-24 lg:gap-16">
			<div className="flex flex-col items-start px-4 gap-8 w-full h-fit lg:px-8 lg:gap-8 max-w-7xl">
				<div className="flex flex-col items-center p-0 gap-12 w-full h-fit">
					<div className="flex flex-col items-center p-0 gap-4 w-full h-fit lg:gap-5 max-w-3xl">
						<div className="flex flex-col items-center justify-center p-0 gap-4 w-full h-fit">
							<h3
								className={`w-[79px] h-[24px] flex flex-row items-center py-[2px] px-[10px] bg-primary-50 rounded-2xl mix-blend-multiply lg:py-1 lg:px-3 lg:w-[83px] lg:h-[28px] lg:font-Inter lg:font-medium font-semibold text-sm text-primary-700 text-center ${jakarta.className}`}
							>
								Features
							</h3>
							<h2 className="w-full h-fit font-['Balgin'] font-semibold text-3xl leading-[38px] text-center text-gray-900 lg:text-4xl lg:leading-[44px] lg:font-Inter lg:tracking-[-0.02em]">
								Cutting Edge features for advanced analytics
							</h2>
						</div>
						<p className="w-full h-fit font-normal text-lg text-center text-gray-600 lg:text-xl lg:leading-[30px]">
							Powerful, self-serve product and growth analytics to help you
							convert, engage, and retain more users. Trusted by over 4,000
							startups.
						</p>
					</div>
				</div>
			</div>
			<Image src={featureContentUi} sizes="100vw" alt="Untitled APP on Iphone 14 Screen" className="lg:hidden block"/>
			<div className="hidden lg:flex items-start gap8 max-w-[1216px] max-h-[600px] overflow-hidden">
				<Image src={featureContentUiDesktop} sizes="100vw" alt="Untitled APP on Iphone 14 Screen & Desktop Screen"/>
			</div>
			<div className="flex flex-col items-start px-4 w-full h-fit lg:px-8 lg:gap-8 max-w-7xl">
				<div className="flex flex-row items-start justify-center p-0 gap-10 w-full h-fit lg:gap-8 flex-wrap">
					<div className="flex flex-col items-center p-0 gap-4 w-full h-fit max-w-[384px]">
						<div className="flex justify-center items-center h-10 w-10 bg-primary-100 border-[6px] border-primary-50 rounded-[28px] lg:h-12 lg:w-12 lg:border-[8px]">
							<div className="w-5 h-5 lg:w-7 lg:h-7">
								<Image
									src={messageChatCircle}
									width={28}
									height={28}
									alt="Message Chat Circle Icon"
								/>
							</div>
						</div>
						<div className="flex flex-col items-center p-0 gap-1 w-full h-fit lg:gap-2">
							<p
								className={`font-jakarta lg:font-Balgin font-semibold text-lg text-center text-gray-900 lg:font-bold lg:text-xl lg:leading-[30px]`}
							>
								Share team inboxes
							</p>
							<p className="font-normal text-base text-center text-gray-600">
								Whether you have a team of 2 or 200, our shared team inboxes
								keep everyone on the same page and in the loop.
							</p>
						</div>
						<button className="flex flex-row justify-center items-center gap-2 w-fit h-fit">
							<p className="font-semibold text-base text-primary-700">Learn more</p>
							<Image src={arrowRight} width={20} height={20} alt="Arrow Right Icon" />
						</button>
					</div>
					<div className="flex flex-col items-center p-0 gap-4 w-full h-fit max-w-[384px]">
						<div className="flex justify-center items-center h-10 w-10 bg-primary-100 border-[6px] border-primary-50 rounded-[28px] lg:h-12 lg:w-12 lg:border-[8px]">
							<div className="w-5 h-5 lg:w-7 lg:h-7">
								<Image
									src={zap}
									width={28}
									height={28}
									alt="Zap Icon"
								/>
							</div>
						</div>
						<div className="flex flex-col items-center p-0 gap-1 w-full h-fit lg:gap-2">
							<p
								className={`font-jakarta lg:font-Balgin font-semibold text-lg text-center text-gray-900 lg:font-bold lg:text-xl lg:leading-[30px]`}
							>
								Deliver instant answers
							</p>
							<p className="font-normal text-base text-center text-gray-600">
								An all-in-one customer service platform that helps you balance
								everything your customers need to be happy.
							</p>
						</div>
						<button className="flex flex-row justify-center items-center gap-2 w-fit h-fit">
							<p className="font-semibold text-base text-primary-700">Learn more</p>
							<Image src={arrowRight} width={20} height={20} alt="Arrow Right Icon" />
						</button>
					</div>
					<div className="flex flex-col items-center p-0 gap-4 w-full h-fit max-w-[384px]">
						<div className="flex justify-center items-center h-10 w-10 bg-primary-100 border-[6px] border-primary-50 rounded-[28px] lg:h-12 lg:w-12 lg:border-[8px]">
							<div className="w-5 h-5 lg:w-7 lg:h-7">
								<Image
									src={chartBreakoutSquare}
									width={28}
									height={28}
									alt="Chart Breakout Square Icon"
								/>
							</div>
						</div>
						<div className="flex flex-col items-center p-0 gap-1 w-full h-fit lg:gap-2">
							<p
								className={`font-jakarta lg:font-Balgin font-semibold text-lg text-center text-gray-900 lg:font-bold lg:text-xl lg:leading-[30px]`}
							>
								Manage your team with reports
							</p>
							<p className="font-normal text-base text-center text-gray-600">
								Measure what matters with Untitled’s easy-to-use reports. You
								can filter, export, and drilldown on the data in a couple
								clicks.
							</p>
						</div>
						<button className="flex flex-row justify-center items-center gap-2 w-fit h-fit">
							<p className="font-semibold text-base text-primary-700">Learn more</p>
							<Image src={arrowRight} width={20} height={20} alt="Arrow Right Icon" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features2;
