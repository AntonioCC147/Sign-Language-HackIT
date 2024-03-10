import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Article from '../../components/Article/Article'
import axios from 'axios'
import NavbarComponent from "../../components/Navbar/Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Articles.css"

const api = axios.create({
	baseURL: "http://localhost:5000/Posts",
})


const Articles = () => {
	const navigate = useNavigate()
	
	const handleClick = (id) => {
		console.log(id)
		navigate("/article/?id="+id);
	}
	
	const jsonToPost = (json) => {
		return (
			<>
				<Article
					Title={json.Title}
					Author={json.Author}
					Description={json.Description}
					id={json.id}
				/>
				<Button onClick={()=>{handleClick(json.id)}}>Read more</Button>
			</>
		)
	}

	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		api.get('/all')
			.then(res => {
				const result = res.data.map((item) => jsonToPost(item));
				setPosts(result);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<NavbarComponent variant="landing"/>	
			<div className='article-list containerBoxArticles text-center'>
				{Posts.map((post) => (
					<Card style={{ width: '18rem', height: '15rem' }} className="cardBoxArticles">
						<Card.Body>
							{post}
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Articles