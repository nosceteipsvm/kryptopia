import React from 'react';

const Footer: React.FC = () => {
	return (
		<>
<footer className="bg-black w-full">
	<div className="container mx-auto px-8">

        <div className="w-full flex flex-col md:flex-row py-6">
				
			<div className="flex-1 mb-6">
				<a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-2xl uppercase block pb-4"  href="#">
					kryptopia
				</a>
				<img className="w-8 h-8 mr-2 inline-block" src="../public/bitcoin_PNG47.png" alt=""/>
				<img className="w-10 h-10 mr-2 inline-block" src="../public/256px-Ethereum_logo_2014.svg.png" alt=""/>
				<img className="w-10 h-10 mr-2 inline-block" src="../public/0_6o-tV4hI-DPj93qz.png" alt=""/>
				<img className="w-8 h-8 mr-2 inline-block" src="../public/Litecoin.png" alt=""/>
				<img className="w-8 h-8 mr-6 md:mt-2 inline-block" src="../public/880px-Brave_Basic_Attention_Token_(BAT)_Logo.svg.png" alt=""/>

                <small className="font-sm text-sm text-gray-300 block mt-20">
                    &copy; 2019 - Kryptopia, Inc.
                </small>
			</div>

            <div className="inline-block mr-12">
                <p className="uppercase text-gray-500 md:mb-6 font-semibold">about us</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Corporate Data</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Official Blog</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Careers</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="inline-block mr-12">
                <p className="uppercase text-gray-500 md:mb-6 font-semibold">learn</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Blog</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Podcast</a>
                    </li>
                </ul>
            </div>

            <div className="inline-block mr-12">
                <p className="uppercase text-gray-500 md:mb-6 font-semibold">find us on</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Facebook</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Instagram</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Twitter</a>
                    </li>
                </ul>
            </div>

            <div className="inline-block mr-12">
                <p className="uppercase text-gray-500 md:mb-6 font-semibold">legal</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline font-sm text-gray-400 hover:text-indigo-500">Legal Notes</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">General Conditions of Usage</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Ethical Code</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Privacy Policy</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" className="no-underline hover:underline text-gray-400 hover:text-indigo-500">Cookie Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</footer>
		</>
	)
};

export default Footer;