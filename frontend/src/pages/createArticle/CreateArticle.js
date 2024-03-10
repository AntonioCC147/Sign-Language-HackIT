import NavbarComponent from "../../components/Navbar/Navbar"
import background from "../../assets/images/background.jpg"
import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './CreateArticle.css'

const api = axios.create({
	baseURL: "http://localhost:5000/",
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('token')}`
	  }
})

function Login() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [Description, setDescription] = useState('');

	const navigate = useNavigate()

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};
	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = () => {
			let json = {
				"Title": title,
				"Description": Description,
				"Content": content
			}

			api.post('posts', json)
			navigate("/articles")
	};

	return (
		<div>
			<NavbarComponent variant="landing"/>
			<img className="create-background" src={background} />
			<div className='create-body'>
				<div className='create-box'>
					<h2 className='create-title'>Create a new article</h2>
					<label htmlFor="email">Title:</label>
					<div className="create-group">
						<input
							className="create-input"
							type="text"
							placeholder="Title"
							id="title"
							name="title"
							value={title}
							onChange={handleTitleChange}
							required
						/>
					</div>
					<label htmlFor="email">Description:</label>
					<div className="create-group">
						<input
							className="create-input"
							type="text"
							placeholder="Short description"
							id="content"
							name="content"
							value={Description}
							onChange={handleDescriptionChange}
							required
						/>
					</div>
					<label htmlFor="email">Content:</label>
					<div className="create-group">
						<textarea
							className="create-input create-content"
							type="text"
							placeholder="Content"
							id="content"
							name="content"
							value={content}
							onChange={handleContentChange}
							required
						/>
					</div>
					<div className="text-center">
						<button className="create-button" type="button" onClick={() => handleSubmit()}>
							Create
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login