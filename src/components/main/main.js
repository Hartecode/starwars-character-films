import React from 'react';
import Movies from '../movies/movies';
import data from '../../characters.json';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: null,
			films: null,
			loading: null,
			error: null,
			errorMsg: null
		}
		this.getfilms = this.getfilms.bind(this);
	}

	componentWillMount() {
		const hashData = data.characters.reduce( (acc, cur, i) => {
				acc[i] = cur;
				return acc;
			},{});
		this.setState({
			characters: hashData
		})
	}

	getfilms(e) {
		let selectedChar = e.currentTarget.id;
		selectedChar = selectedChar.split('-')[1];
		const charactersObj = this.state.characters;
		const url = charactersObj[selectedChar]['url'];

		let filmsArr = [];
		this.setState({
			loading: true,
			error: null,
			errorMsg: null
		})
		fetch(url)
		.then( res => res.json())
		.then( obj => {
			obj.films.forEach( (filmUrl, i) => {
				fetch(filmUrl)
				.then( res => res.json())
				.then( data => {
					filmsArr = [...filmsArr, data];
					if( i === obj.films.length -1) {
						this.setState({
							films: filmsArr,
							loading: false
						})
					}
				})
				.catch( err => {
					this.setState({
						loading: false,
						error: true,
						errorMsg: 'Unable to obtain film data'
					})
				});
			})
		})
		.catch( err => {
			this.setState({
				loading: false,
				error: true,
				errorMsg: 'Unable to load the characther data'
			});
			console.log("err find character's info");
		});

	}

	render() {
		const charaterElements = () => {
			const characters = data.characters;
			return characters.map( (obj, i) => {
				return <li id={`char-${i}`} onClick={this.getfilms} key={i}> 
					<h3>{obj.name}</h3>
				</li>
			})
		}

		return (
			<div>
				<h1>Star Wars</h1>
				<h2>Character Films</h2>
				<div>
					<p></p>
				</div>
				<ul>
					{charaterElements()}
				</ul>
				<Movies 
					loading={this.state.loading}
					films={this.state.films}
					error={this.state.error}
					errorMsg={this.state.errorMsg}
				/>
			</div>
		);
	}
}