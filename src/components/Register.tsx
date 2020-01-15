import React, { useState, useEffect } from 'react';

const Register: React.FC = () => {
	const [errors, updateErrors] = useState<string[]>(['']);
	const [fields, updateFields] = useState({
		username: '',
		email: '',
		password: '',
		confirm_password: ''
	});

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		await updateFields({
			...fields,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(fields.username,
					fields.email,
					fields.password,
					fields.confirm_password);
	}

	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (
		<>
			<div className="flex justify-center min-w-screen w-full min-h-screen h-full gradient" style={{
				paddingTop: '30vh'
			}}>
			  <div className="w-full max-w-xs">
			    <form  className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
			      <h1 className="text-2xl text-center text-gray-300 mb-3 pb-4">Sign up into Cryptopia</h1>
			      <div className="mb-4">
			        <input spellCheck={false} name="email" value={fields.email} onChange={(e) => handleChange(e)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none bg-black border-b border-gray-800 placeholder-gray-700" id="email" type="text" placeholder="Email Adress"/>
			      </div>
			      <div className="mb-4">
			        <input spellCheck={false} name="username" value={fields.username} onChange={(e) => handleChange(e)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none bg-black border-b border-gray-800 placeholder-gray-700" id="username" type="username" placeholder="Username"/>
			      </div>
			      <div className="mb-2">
			        <input spellCheck={false} name="password" value={fields.password} onChange={(e) => handleChange(e)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none bg-black border-b border-gray-800 placeholder-gray-700" id="password" type="password" placeholder="Password"/>
			      </div>
			      <div className="mb-2">
			        <input spellCheck={false} name="confirm_password" value={fields.confirm_password} onChange={(e) => handleChange(e)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none bg-black border-b border-gray-800 placeholder-gray-700" id="confirm_password" type="password" placeholder="Confirm Password"/>
			      </div>
			      <div className="flex items-center justify-between pt-3">
			        <button className="w-full gradient-b hover:text-gray-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			          Sign Up
			        </button>
			      </div>
			      <div className="pt-4">
			        <a className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600 mr-4" href="/login">
			          Sign In
			        </a>
			        <a className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600 mr-4" href="/login">
			          Recover Account
			        </a>
			      </div>
			    </form>
			  </div>
			</div>
		</>
	)
};

export default Register;
