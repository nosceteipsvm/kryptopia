import React from 'react';

const Landing: React.FC = () => {
	return (
		<>
			<div className="pt-24 h-full min-h-screen">

				<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-white">
					
					<div className="flex flex-col w-full md:pl-8 md:w-2/5 justify-center items-start text-center md:text-left">
						<p className="text-sm uppercase tracking-loose w-full">Occupy knausgaard twee try-hard?</p>
						<h1 className="my-4 text-2xl md:text-6xl font-black leading-tight">keffiyeh kitsch post-ironic waistcoat!</h1>
						<p className="leading-normal text-base md:text-2xl mb-8 text-gray-300">
							Post-ironic af keytar, beard hexagon shoreditch asymmetrical pabst shabby chic flexitarian kombucha.
						</p>
					
						

						<button className="mx-auto lg:mx-0 gradient-b text-white hover:text-gray-300 font-semibold rounded-full my-2 md:my-4 py-3 px-5 shadow-lg outline-none focus:outline-none">
							Read More<span className="ml-2">➔</span>
						</button>
						
					</div>
					
					<div className="hidden md:block h-full min-h-screen w-full md:w-3/5 py-6 text-center relative">
						<img className="w-full h-full absolute top-0 left-0" src="/public/blockchain.png"/>
					</div>
					
				</div>
			</div>

			<section className="bg-black py-8 h-full min-h-screen flex justify-center items-center" id="about">
				<div className="container max-w-5xl mx-auto m-8">
					<h1 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-400">
						PBR&B
					</h1>
					<div className="w-full mb-4">	
						<div className="h-1 mx-auto bg-gray-700 w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
				
					<div className="flex flex-wrap">
						<div className="w-full sm:w-1/2 p-6">
							<h3 className="text-3xl text-gray-500 font-bold leading-none mb-3 text-center md:text-left">Flexitarian cold-pressed +1</h3>
							<p className="text-gray-400 mb-8 text-center md:text-left">
								Mustache ennui swag, readymade taxidermy glossier williamsburg edison bulb bicycle rights art party. Ramps man braid post-ironic chartreuse selvage occupy yuccie tilde craft beer cliche readymade salvia waistcoat.<br/><br/>
								Dreamcatcher before they sold out street art pour-over truffaut mumblecore, roof party snackwave asymmetrical shabby chic mlkshk kitsch four loko vexillologist.
								<br /><br />
							</p>
						</div>
						<div className="w-full sm:w-1/2 p-6">
							<img src="/public/what-is-simulation-resource-alt.png" alt="" width="400" height="380"/>
						</div>

						<div className="w-full sm:w-1/2 p-6">
							<img src="/public/evaluating-simulation-software-resource-alt.png" alt="" width="400" height="380"/>
						</div>			
						<div className="w-full sm:w-1/2 p-6 mt-6">
							<div className="align-middle">
								<h3 className="text-3xl text-gray-500 font-bold leading-none mb-3 text-center md:text-left">Mlkshk</h3>
								<p className="text-gray-400 mb-8 text-center md:text-left">
									Retro affogato farm-to-table, tattooed woke poutine before they sold out 90's 8-bit. Flexitarian art party artisan drinking vinegar, edison bulb vegan hashtag slow-carb portland. Leggings authentic biodiesel, chia photo booth trust fund synth adaptogen air plant polaroid. VHS echo park shabby chic yr, synth typewriter skateboard <a className="text-indigo-500 underline" href="https://undraw.co/">unicorn</a> tofu quinoa man braid activated charcoal you probably haven't heard of them. Shabby chic unicorn put a bird on it health goth deep v. Woke hell of four loko bitters vegan hammock flannel stumptown.<br /><br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
					
					
					

			<section className="gradient py-8 h-full min-h-screen flex justify-center items-center" id="data">
				
				<div className="container mx-auto flex flex-wrap pt-4 pb-12">
				
					<h1 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-400">
						Ennui
					</h1>
				
					<div className="w-full md:w-1/3 p-6 flex flex-col">
						<div className=" bg-black rounded-t rounded-b-none overflow-hidden shadow p-4">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">
								<p className="w-full text-indigo-400 text-xs md:text-sm px-6 font-semibold">Feb, 02</p>
								<div className="w-full pt-4 font-bold text-xl text-gray-500 px-6 text-center md:text-left">Schlitz Organic</div>
								<p className="text-gray-400 text-sm md:text-base pt-6 px-6 mb-5 text-center md:text-left">
									Literally subway tile try-hard irony gentrify readymade vegan messenger bag iPhone pabst cold-pressed 90's photo booth tattooed leggings. Air plant marfa gochujang polaroid cray. Vinyl readymade etsy mixtape church-key 8-bit live-edge cardigan mlkshk meggings man bun normcore art party helvetica. Literally schlitz organic, etsy freegan bespoke occupy jean shorts heirloom.
								</p>
							</a>
							<div className="">
								<div className="flex items-center justify-center">
									<button className="mx-auto lg:mx-0 hover:underline gradient-b text-white font-bold rounded-full my-2 py-2 px-8 shadow-lg">Read more</button>
								</div>
							</div>
						</div>
					</div>
					
					
					
					<div className="w-full md:w-1/3 p-6 flex flex-col">
						<div className="bg-black rounded-t rounded-b-none overflow-hidden shadow p-4">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">
								<p className="w-full text-indigo-400 text-xs md:text-sm px-6 font-semibold">Oct, 13</p>
								<div className="w-full pt-4 font-bold text-xl text-gray-500 px-6 text-center md:text-left">Wayfarers</div>
								<p className="text-gray-400 text-sm md:text-base pt-6 px-6 mb-5 text-center md:text-left">
									Poutine +1 pour-over gluten-free. Gluten-free ramps kinfolk stumptown slow-carb schlitz pok pok craft beer pinterest direct trade organic fingerstache PBR&B banjo. Vape +1 man braid food truck la croix drinking vinegar 90's four dollar toast VHS lumbersexual hot chicken. Yuccie cray neutra DIY cliche vice vape thundercats chia wolf street.
								</p>
							</a>
							<div className="">
								<div className="flex items-center justify-center">
									<button className="mx-auto lg:mx-0 hover:underline gradient-b text-white font-bold rounded-full my-2 py-2 px-8 shadow-lg">Read more</button>
								</div>
							</div>
						</div>
					</div>
					
					
					
					<div className="w-full md:w-1/3 p-6 flex flex-col">
						<div className=" bg-black rounded-t rounded-b-none overflow-hidden shadow p-4">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">
								<p className="w-full text-indigo-400 text-xs md:text-sm px-6 font-semibold">Nov, 22</p>
								<div className="w-full pt-4 font-bold text-xl text-gray-500 px-6 text-center md:text-left">Brooklyn 8-Bit</div>
								<p className="text-gray-400 text-sm md:text-base pt-6 px-6 mb-5 text-center md:text-left">
									Venmo banh mi meditation godard drinking vinegar edison bulb narwhal dreamcatcher chicharrones taiyaki. Actually iPhone wayfarers, poutine cray YOLO meh mustache direct trade. XOXO swag flannel, forage actually vape hammock live-edge +1 vaporware gentrify twee gochujang hell of. Roof party lyft cornhole banjo. Kickstarter tbh taxidermy, snackwave 90's copper mug hoodie artisan ennui flexitarian small batch deep v intelligentsia.
								</p>
							</a>
							<div className="">
								<div className="flex items-center justify-center">
									<button className="mx-auto lg:mx-0 hover:underline gradient-b text-white font-bold rounded-full my-2 py-2 px-8 shadow-lg">Read more</button>
								</div>
							</div>
						</div>
					</div>
					
					
				</div>

			</section>

			<section className="bg-black h-full min-h-screen flex justify-center items-center" id="pricing">
			
				<div className="container mx-auto pt-8 pb-6 text-gray-600">

					<h1 className="w-full my-6 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-400">
						Pricing
					</h1>
					<div className="w-full mb-4">	
						<div className="h-1 mx-auto bg-gray-700 w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
				
				
					
					<div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
						
						<div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
							<div className="flex-1 bg-black border border-gray-800 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
								<div className="p-8 text-3xl font-semibold text-center border-b-4 border-gray-800 text-gray-400">Free</div>
								<ul className="w-full text-center text-sm">
									<li className="border-b py-4 text-gray-400 border-gray-800">Chartreuse lyft chia</li>
									<li className="border-b py-4 text-gray-400 border-gray-800">Fam</li>
									<li className="border-b py-4 text-gray-400 border-gray-800">Organic fingerstache</li>
									<li className="px-4 py-4 text-gray-400">Ethical gochujang asymmetrical hexagon</li>
								</ul>
							</div>
							<div className="flex-none mt-auto bg-black border border-gray-800 rounded-b rounded-t-none overflow-hidden shadow p-6">
								<div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">$0 <span className="text-base">for one user</span></div>
								<div className="flex items-center justify-center">
									<button className="mx-auto lg:mx-0 hover:underline gradient-b text-white text-lg font-bold rounded-full my-6 py-3 px-6 shadow-lg">Buy Now</button>
								</div>
							</div>
						</div>
						
						
						
						<div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
							<div className="flex-1 bg-black border border-gray-800 rounded-t rounded-b-none overflow-hidden shadow">
								<div className="w-full p-8 text-3xl font-semibold text-center border-b-4 border-gray-800 text-gray-400">Basic</div>
								<ul className="w-full text-center text-base">
									<li className="border-b py-4 px-2 text-gray-400 border-gray-800">Vegan food truck mumblecore</li>
									<li className="border-b py-4 px-2 text-gray-400 border-gray-800">Hexagon</li>
									<li className="border-b py-4 px-2 text-gray-400 border-gray-800">Echo party chicken</li>
									<li className="py-4 text-gray-400">PBR&B</li>
								</ul>					
							</div>
							<div className="flex-none mt-auto bg-black border border-gray-800 rounded-b rounded-t-none overflow-hidden shadow p-6">
								<div className="w-full pt-6 text-4xl font-bold text-center">$19.99 <span className="text-base">/ per user</span></div>
								<div className="flex items-center justify-center">
									<button className="mx-auto lg:mx-0 hover:underline gradient-b text-white text-lg font-bold rounded-full my-6 py-3 px-6 shadow-lg">Buy Now</button>
								</div>
							</div>
						</div>
						
						
						
						<div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
							<div className="flex-1 bg-black border border-gray-800 border-b-black text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
								<div className="p-8 text-3xl text-gray-400 font-semibold text-center border-b-4 border-gray-800">Pro</div>
								<ul className="w-full text-center text-sm">
									<li className="border-b py-4 text-gray-400 border-gray-800">Heirloom roof</li>
									<li className="border-b py-4 text-gray-400 border-gray-800">Butcher</li>
									<li className="border-b px-4 py-4 text-gray-400 border-gray-800">Ethical gochujang asymmetrical hexagon</li>
									<li className="px-4 py-4 text-gray-400">Ethical gochujang asymmetrical hexagon</li>
								</ul>
							</div>
							<div className="flex-none mt-auto bg-black border border-gray-800 rounded-b rounded-t-none overflow-hidden shadow p-6">
								<div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">$79.99 <span className="text-base">/ per user</span></div>
								<div className="flex items-center justify-center">
									<button className="mx-auto lg:mx-0 hover:underline gradient-b text-white text-lg font-bold rounded-full my-6 py-3 px-6 shadow-lg">Buy Now</button>
								</div>
							</div>
						</div>

					</div>
					
				</div>
					
					
			</section>


            <div className="w-full px-4 py-6 md:p-20 text-center flex flex-col md:flex-row items-center justify-center gradient-c">
                <h1 className="text-4xl text-center text-gray-200 text-semibold mb-3">
                    Flannel biodiesel neutra heirloom
                </h1>
                <h5 className="text-sm md:text-lg text-center text-gray-500 font-medium">
                    Actually scenester farm-to-table, ugh heirloom tacos VHS before they sold out vegan iPhone snackwave beard.
                </h5>
            </div>

			<section className="bg-black w-full h-full min-h-screen pt-20 flex flex-col justify-center items-center" id="support">
				<p className="px-4 md:px-20 text-sm text-white text-center py-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem excepturi tempora sunt tempore cupiditate itaque doloremque laborum culpa accusamus corporis eligendi magni dolorem, totam et maiores molestiae ipsam rem.
				</p>
				<form className="w-full md:w-3/5 mx-2 md:mx-10 py-10 md:py-10 bg-black">
					<h1 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-400">
					Contact Us
					</h1>
					<div className="w-full mb-4">	
						<div className="h-1 mx-auto bg-gray-700 w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
				  <div className="flex flex-wrap mt-10 -mx-3 mb-6 w-full">
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
			</section>
		</>
	)
};

export default Landing;