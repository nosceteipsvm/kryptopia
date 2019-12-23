import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour: React.FC = () => {
	return (
		<>
			<div className="flex justify-center min-w-screen w-full min-h-screen h-full gradient" style={{
				paddingTop: '30vh'
			}}>
				<div className="w-full max-w-screen text-center">
					<h1 className="text-gray-200 text-center" style={{ fontSize: '10rem' }}>404</h1>
					<h3 className="md:w-full p-3 md:p-0 text-3xl text-gray-200 text-center">The requested page cannot found.</h3>
					<Link to="/">
						<button className="px-4 py-4 mt-6 gradient-b text-gray-200 font-semibold">
							go back home
						</button>
					</Link>
				</div>
			</div>
		</>
	)
};

export default FourOhFour;