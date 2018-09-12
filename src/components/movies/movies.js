import React from 'react';
import Films from './film';

export default function Movies(props) {

	const displayMovies = (films=props.films, loading=props.loading, error=props.error, errorMsg=props.errorMsg) => {
		if (loading === null) return '';

		if (loading) {
			return <h3>loading...</h3>
		} else if (error) {
			return <h3>{errorMsg}</h3>
		} else {
			console.log(films);
			return <Films films={films}/>
		}

	}

	return (
		<div>
			{displayMovies()}
		</div>
	)
}