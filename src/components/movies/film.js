import React from 'react';
import './films.css';


export default function Film(props) {
	//formates the date
	const dateFormat = (str) => {
		return new Date(str).toLocaleDateString('en-US', {
			    weekday: 'long',
			    month: 'long',
			    day: 'numeric',
			    year: 'numeric'
			})
	}
	const populateFilms = (films=props.films) => {
		return films.map( (obj, i) => {
			return <li className="Card" key={i}>
				<div className="innerCard">
					<h3>{obj.title}</h3>
					<p>release date: </p>
					<p>{dateFormat(obj.release_date)}</p>
				</div>
			</li>
		})
	}
	return (
		<ul className="list-styling films-list">
			{populateFilms()}
		</ul>
	)
}