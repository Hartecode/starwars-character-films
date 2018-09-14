import React from 'react';
import Films from './film';
import ErrorPost from '../error/error';
import SectionLoader from '../loading/sectionloading/sectionloading';

export default function Movies(props) {

	const displayMovies = (films=props.films, loading=props.loading, error=props.error, errorMsg=props.errorMsg) => {
		if (loading === null) return '';

		if (loading) {
			return <SectionLoader />
		} else if (error) {
			return <ErrorPost errorMsg={errorMsg} />
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