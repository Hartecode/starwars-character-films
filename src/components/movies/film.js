import React from 'react';

export default function Film(props) {
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
			return <li key={i}>
				<h3>{obj.title}</h3>
				<p>release date: {dateFormat(obj.release_date)}</p>
			</li>
		})
	}
	return (
		<ul>
			{populateFilms()}
		</ul>
	)
}