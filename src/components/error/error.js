import React from 'react';
import ErrorImg from './error404.jpg';
import './error.css';

export default function ErrorPost(props) {
	return (
		<section className="error-container" >
			<div className="error-message">
				<h3>{props.errorMsg}</h3>
			</div>
			<img id="error-img"
				src={ErrorImg} 
				alt="404" 
				/>
		</section>
	)
}