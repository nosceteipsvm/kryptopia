import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
	return (
		<>	
			<div className="w-full md:w-5/6 mx-auto h-full min-h-screen relative">
				<div className="flex justify-center mx-auto w-full"
					 style={{ marginTop: '10vh' }}>
					<div className="text-gray-200 bg-black px-4 md:px-20 py-4 w-full">
						<div className="p-2 float-left mr-auto">
							<h1 className="text-3xl text-center md:text-left font-semibold uppercase pb-4">
								contact us
							</h1>
							<p className="text-sm md:text-base text-center md:text-left text-gray-400 pb-4">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste odio obcaecati ab assumenda esse, fugit facilis, at sint libero qui sequi cum ullam exercitationem. Dignissimos magnam, vel aspernatur mollitia maiores.
							</p>
						</div>
					    <div className="px-3 py-4 flex justify-center">
					        <table className="w-full text-sm md:text-md shadow-md rounded mb-4">
					            <tbody>
					                <tr className="border-b border-gray-700 border-gray-700 bg-black w-full">
					                    <th className="text-left p-2 px-3 uppercase">
					                    	<p className="text-gray-200 font-semibold md:text-lg">
					                    		country or region
					                    	</p>
					                    </th>
					                    <th className="text-left p-2 px-3 uppercase">
					                    	<p className="text-gray-200 font-semibold md:text-lg">
					                    		number
					                    	</p>
					                    </th>
					                    <th className="text-left p-2 px-3 uppercase">
					                    	<p className="text-gray-200 font-semibold md:text-lg">
					                    		opening hours (local time)
					                    	</p>
					                    </th>
					                    <th></th>
					                </tr>
					                <tr className="border-b border-gray-700 border-gray-700 hover:bg-black w-full">
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100 uppercase">
					                    		china
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className="font-light text-base text-gray-200 uppercase">
					                    		+123456789
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100">
					                    		from 7 am to 8:30 pm
					                    	</p>		                    	
					                    </td>
					                </tr>
					                <tr className="border-b border-gray-700 hover:bg-black w-full">
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100 uppercase">
					                    		mexico
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className="font-light text-base text-gray-200 uppercase">
					                    		+123456789
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100">
					                    		from 7 am to 8:30 pm
					                    	</p>
					                    </td>
					                </tr>
					                <tr className="border-b border-gray-700 hover:bg-black w-full">
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100 uppercase">
					                    		australia
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className="font-light text-base text-gray-200 uppercase">
					                    		+123456789
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100">
					                    		from 7 am to 8:30 pm
					                    	</p>
					                    </td>
					                </tr>
					                <tr className="border-b border-gray-700 hover:bg-black w-full">
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100 uppercase">
					                    		italy
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className="font-light text-base text-gray-200 uppercase">
					                    		+123456789
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100">
					                    		from 7 am to 8:30 pm
					                    	</p>
					                    </td>
					                </tr>
					                <tr className="border-b border-gray-700 hover:bg-black w-full">
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100 uppercase">
					                    		india
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className="font-light text-base text-gray-200 uppercase">
					                    		+123456789
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100">
					                    		from 7 am to 8:30 pm
					                    	</p>
					                    </td>
					                </tr>
					                <tr className="border-b border-gray-700 hover:bg-black w-full">
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100 uppercase">
					                    		netherlands
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className="font-light text-base text-gray-200 uppercase">
					                    		+123456789
					                    	</p>
					                    </td>
					                    <td className="p-3 px-5">
					                    	<p className=" text-gray-100">
					                    		from 7 am to 8:30 pm
					                    	</p>
					                    </td>
					                </tr>
					            </tbody>
					        </table>
					    </div>
					</div>
				</div>
		
				<form className="w-full mx-auto py-10 md:py-10 bg-black">
					<div className="my-10 border-b border-gray-600 h-1 w-full md:w-4/5 mx-auto"></div>
					<div className="p-8 pb-0 flex justify-center">
						<p className="text-base text-gray-200 text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste odio obcaecati ab assumenda esse, fugit facilis.
						</p>
					</div>
					<h1 className="text-xl font-md uppercase pb-16 ml-4">
						contact form
					</h1>
				  <div className="flex flex-wrap -mx-3 mb-6 w-full">
				    <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
				      <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
				        First Name <span className="text-red-400 text-base">*</span>
				      </label>
				      <input spellCheck={false} className="appearance-none block w-full bg-black text-gray-200 border border-gray-800 py-3 px-4 leading-tight focus:outline-none text-sm placeholder-gray-400" id="grid-first-name" type="text" placeholder="Please enter your First Name"/>
				    </div>
				    <div className="w-full md:w-1/2 px-6">
				      <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
				        Last Name <span className="text-red-400 text-base">*</span>
				      </label>
				      <input spellCheck={false} className="appearance-none block w-full bg-black text-gray-200 border border-gray-800 py-3 px-4 leading-tight focus:outline-none text-sm placeholder-gray-400" id="grid-last-name" type="text" placeholder="Please enter your Last Name"/>
				    </div>
				  </div>
				  <div className="flex flex-wrap -mx-3 mb-6 w-full">
				    <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
				      <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
				        E-mail <span className="text-red-400 text-base">*</span>
				      </label>
				      <input spellCheck={false} className="appearance-none block w-full bg-black text-gray-200 border border-gray-800 py-3 px-4 leading-tight focus:outline-none text-sm placeholder-gray-400" id="grid-email" type="email" placeholder="Please enter your Email Address"/>
				    </div>
				    <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
				      <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
				        Enquiry Type <span className="text-red-400 text-base">*</span>
				      </label>
				      <select className="block w-full bg-black text-gray-400 border border-gray-800 py-3 px-4 leading-tight focus:outline-none text-sm placeholder-gray-400" name="enquiry_type">
				      	<option value="">About Company</option>
				      	<option value="">About Products</option>
				      	<option value="">Other</option>
				      </select>
				    </div>
				  </div>
				  <div className="flex flex-wrap -mx-3 mb-6 w-full">
				    <div className="w-full px-6">
				      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
				        Message <span className="text-red-400 text-base">*</span>
				      </label>
				      <textarea className="no-resize appearance-none block w-full bg-black text-gray-200 border border-gray-800 py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none text-sm placeholder-gray-400" placeholder="Please enter your Message" id="message"></textarea>
				      <p className="text-gray-300 text-xs italic">
				      	Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure alias repellendus.
				  	  </p>
				    </div>
				  </div>
				  <div className="md:flex md:items-center w-full">
				    <div className="md:w-1/3 px-6">
				      <button className="gradient-b px-4 py-2 rounded-full capitalize font-semibold text-white hover:text-gray-300" type="button">
				        send message
				      </button>
				    </div>
				    <div className="md:w-2/3"></div>
				  </div>
				</form>
			</div>
		</>
	)
};

export default Support;