import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<nav id="header" className="fixed w-full z-60 top-0 text-white px-6">

				<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
						
					<div className="pl-4 flex items-center">
						<a className="toggleColour text-orange-300 no-underline hover:no-underline font-bold text-2xl lg:text-2xl uppercase"  href="/">kryptopia
						</a>
					</div>

					<div className="block lg:hidden pr-4 focus:outline-none">
						<button id="nav-toggle" className="flex items-center p-1 focus:outline-none">
							<svg className="fill-current text-orange-200 hover:text-orange-400 h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>

					<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-white p-4 lg:p-0 z-20" id="nav-content">
						<ul className="list-reset lg:flex justify-end flex-1 items-center">
							<li className="mr-3">
								<a className="inline-block py-2 px-4 text-white font-semibold  hover:text-indigo-200 no-underline capitalize" href="/#about" id="nLink">
									about
								</a>
							</li>
							<li className="mr-3">
								<a className="inline-block text-white font-semibold no-underline hover:text-indigo-200 hover:text-underline py-2 px-4 capitalize" href="/#data" id="nLink">
									data
								</a>
							</li>
							<li className="mr-3">
								<a className="inline-block text-white font-semibold no-underline hover:text-indigo-200 hover:text-underline py-2 px-4 capitalize" href="/#pricing" id="nLink">
									pricing
								</a>
							</li>
							<li className="mr-8">
								<a className="inline-block py-2 px-4 text-white font-semibold  hover:text-indigo-200 no-underline capitalize" href="/#support" id="nLink">
									support
								</a>
							</li>
							<li className="mr-3">
								<Link className="inline-block text-white font-semibold no-underline hover:text-indigo-200 hover:text-underline py-2 px-4 capitalize" to="/login" id="nLink">
									signin
								</Link>
							</li>
						</ul>
						<Link to="/register">
							<button id="navAction" className="mx-auto lg:mx-0 bg-transparent text-white hover:text-gray-200 border border-white font-semibold rounded-full mt-4 lg:mt-0 py-1 px-4 shadow capitalize text-lg focus:outline-none hover:border-black hover:text-gray-800">
								join us
							</button>
						</Link>
					</div>
				</div>
				
			</nav>
		</>
	)
}

export default Navigation;