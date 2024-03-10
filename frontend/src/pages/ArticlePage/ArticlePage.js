import axios from 'axios'
import React, { useState } from 'react'
import NavbarComponent from "../../components/Navbar/Navbar";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import './ArticlePage.css';

const api = axios.create({
	baseURL: "http://localhost:5000/posts",
})

const ArticlePage = () => {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search);
	const value = queryParams.get('id'); // Get the value of a specific parameter
	console.log(value)

	const [title,setTitle] = useState("");
	const [content,setContent] = useState("");
	const [description,setDescription] = useState("")

	const getPosts = async () => {
		let res = await api.get("/:id="+value)
		console.log(res.data)
		setTitle(res.data.Title)
		setContent(res.data.Content)
		setDescription(res.data.Description)
	}
	useEffect(() => {
		getPosts();
	}, []);

	const contentLines = content.split("\n");

  return (
	<div>
		<NavbarComponent/>
		<div className="containerArticle">
			<p className="titleArticle">Title: {title}</p>
			<p className="descriptionArticle">Description: {description}</p>
			<p className="contentArticle">Content:<br/>
				{contentLines.map(line => <>
					{line}
					<br/>
				</>)}
			</p>
		</div>
	</div>
  )
}

export default ArticlePage