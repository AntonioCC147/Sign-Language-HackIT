import NavbarComponent from "../../components/Navbar/Navbar"
import background from "../../assets/images/background.jpg"
import "./Forms.css"
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const api = axios.create({
	baseURL: "http://localhost:5000/"
})

function Register() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirm] = useState('');

	const [errorMessage, setError] = useState(" ");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleConfirmChange = (e) => {
		setConfirm(e.target.value);
	}

	const handleSubmit = () => {
		let errors = 0;

		let email_check = new RegExp("[a-zA-Z0-9\._]+@.*\.com");

		if (username) {
			console.log('Username: ' + username);
		}
		else {
			setError("Invalid Username")
		}
		if (email_check.test(email)) {
			console.log('Email: ' + email);
		}
		else {
			setError("Invalid E-mail");
			errors = 1;
		}
		if (password != confirmPass) {
			setError("Passwords not matching");
			errors = 1;
		}
		else if (password.length < 8 || password.length > 32) {
			setError("Password needs to be between 8 and 32 characters long")
			errors = 1;
		}

		if (errors == 0) {
			let json = {
				"email": email,
				"name": username,
				"password": password
			}

			api.post('Users', json).then(res => {
				console.log(res.data.token)
				localStorage.setItem('token', res.data.token)
				navigate('/login');
			});
		}
	};

	return (
		<>
			<NavbarComponent variant="landing"/>
			<img className="form-background" src={background} />
			<div className='form-body'>
				<div className='form-box'>
					<h2 className="form-title">Register</h2>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input
							palceholder="Username"
							className="form-input"
							type="text"
							id="username"
							name="username"
							value={username}
							onChange={handleUsernameChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							palceholder="Email"
							className="form-input"
							type="email"
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
					<div className="form-group">
						<label htmlFor="confirm_password">Confirm password:</label>
						<input
							className="form-input"
							type="password"
							id="confirm_password"
							name="confirm_password"
							value={confirmPass}
							onChange={handleConfirmChange}
							required
						/>
					</div>
					<p>You have an account?<a href="/login"> Login now</a></p>
					<div className='errorMessage text-center'>
						{errorMessage}
					</div>
					<button className="form-button" type="button" onClick={() => handleSubmit()}>
						Register
					</button>
				</div>
			</div>
		</>
	)
}

export default Register