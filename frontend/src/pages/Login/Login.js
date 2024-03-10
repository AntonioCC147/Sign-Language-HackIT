import { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import NavbarComponent from "../../components/Navbar/Navbar"
import background from "../../assets/images/background.jpg"
import "./Forms.css"
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const api = axios.create({
	baseURL: "http://localhost:5000/"
})

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setLoggedUser } = useContext(AppContext);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		let json = {
			email: email,
			password: password
		}
		api.post('/users/Login', json).then(res => {
			localStorage.setItem('token', res.data.token)
			setLoggedUser(res.data.user);
			navigate('/');
		})
	};

	return (
		<div>
			<NavbarComponent variant="landing"/>
			<img className="form-background" src={background} />
			<div className='form-body'>
				<div className='form-box'>
					<h2 className='form-title'>Login</h2>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							className="form-input"
							type="text"
							id="email"
							name="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							className="form-input"
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>
					<p>You don't have an account?<a href="/register"> Register now</a></p>
					<button className="form-button" type="button" onClick={() => handleSubmit()}>
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login