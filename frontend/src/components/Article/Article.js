import React from 'react'

const clickHandle = (id) => {
	console.log(id)
}

const Article = (props) => {
	return (
		<div className='article-card'>
			<h2 className='article-title'>{props.Title}</h2>
			<p className=''>{props.Description}</p>
		</div>
	)
}

export default Article