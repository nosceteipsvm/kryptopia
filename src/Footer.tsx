import React from 'react';

const Footer: React.FC = () => {
	return (
		<>
            <div className="w-full p-20 text-center flex items-center justify-center gradient-c">
                <h2 className="text-4xl max-w-2xl leading-tight text-gray-400">Art party roof party glossier distillery succulents subway tile mustache.</h2>
            </div>

            {/* PARTNERS

            <div className="relative rounded-lg flex flex-wrap items-center justify-center self-center bg-gray-100 shadow-xl pb-4">
              <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-70 focus:outline-none">
                  <img className="w-40 h-22" src="/public/727900.png" alt=""/>
              </button>
              <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-70 focus:outline-none">
                  <img className="w-26 h-32" src="/public/Versace_1978.png" alt=""/>
              </button>
              <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none">
                  <img className="w-24 h-12" src="/public/boss-logo.svg" alt=""/>
              </button>
              <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none">
                  <img className="w-40 h-22" src="/public/loreal.png" alt=""/>
              </button>
              <button className="px-8 py-2 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none">
                  <img className="w-40 h-22" src="/public/La_Perla_Logo_New.svg" alt=""/>
              </button>
            </div>

             END PARTNERS */}

            <footer className="p-6 w-full bg-black" id="footer">
                <div className="flex flex-col flex-wrap justify-center">
                    <h1 className="text-4xl text-center text-gray-200 text-semibold mb-3">
                        Flannel biodiesel neutra heirloom
                    </h1>
                    <h5 className="text-lg text-center text-gray-500 font-medium">
                        Actually scenester farm-to-table, ugh heirloom tacos VHS before they sold out vegan iPhone snackwave beard.
                    </h5>
                </div>

                <div className="flex flex-wrap content-center self-center justify-left md:justify-center my-8 p-4 md:p-1">
                    <ul className="flex flex-wrap">
                        <li className="inline-block p-2 mr-8 md:mr-6">
                            <a href="" className="text-indigo-200 font-light tracking-wide">
                                How it Works
                            </a>
                        </li>
                        <li className="inline-block p-2 mr-8 md:mr-6">
                            <a href="" className="text-indigo-200 font-light tracking-wide">
                                Why KRYPTOPIA
                            </a>
                        </li>
                        <li className="inline-block p-2 mr-8 md:mr-6">
                            <a href="" className="text-indigo-200 font-light tracking-wide">
                                Company Profile
                            </a>
                        </li>
                        <li className="inline-block p-2 mr-8 md:mr-6">
                            <a href="" className="text-indigo-200 font-light tracking-wide">
                                Careers
                            </a>
                        </li>
                        <li className="inline-block p-2 mr-8 md:mr-6">
                            <a href="" className="text-indigo-200 font-light tracking-wide">
                                Corporate Data
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-between flex-wrap pt-6 md:pt-4 mx-8">
                    <div className="flex items-center flex-shrink-0 text-white">
                        <span className="text-gray-400 text-center text-sm">
                            &copy; Kryptopia Co, LLC
                        </span>
                    </div>

                    <div className="w-full text-center lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center md:ml-12">
                            <li>
                                <a className="inline-block py-2 font-semibold text-indigo-800 text-sm hover:text-indigo-600 mr-3" href="#">
                                    <img className="w-8 h-8" src="/public/pinterest.svg" alt=""/>
                                </a>
                                <a className="inline-block py-2 font-semibold text-indigo-800 text-sm hover:text-indigo-600 mr-3" href="#">
                                    <img className="w-8 h-8" src="/public/twitter.svg" alt=""/>
                                </a>
                                <a className="inline-block py-2 font-semibold text-indigo-800 text-sm hover:text-indigo-600 mr-3" href="#">
                                    <img className="w-8 h-8" src="/public/instagram.svg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li>
                                <a className="inline-block py-2 text-sm text-gray-400" href="/" id="nLink">
                                    Privacy Policy
                                </a>
                                <span className="px-2">-</span>
                                <a className="inline-block py-2 text-sm text-gray-400" href="/" id="nLink">
                                    Ethical Code
                                </a>
                                <span className="px-2">-</span>
                                <a className="inline-block py-2 text-sm text-gray-400" href="/" id="nLink">
                                    Cookie policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
		</>
	)
};

export default Footer;