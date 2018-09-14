import React from 'react';
import Movies from '../movies/movies';
import data from '../../characters.json';
import Logo from './Star_Wars_Logo.svg'
import Character from '../character/character';
import './main.css';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: null,
			films: null,
			loading: null,
			error: null,
			errorMsg: null,
			selectedButton: null
		}
		this.getfilms = this.getfilms.bind(this);
	}

	componentWillMount() {
		//hashing the data to make it faster to access later
		const hashData = data.characters.reduce( (acc, cur, i) => {
				acc[i] = cur;
				return acc;
			},{});
		this.setState({
			characters: hashData
		})
	}

	//click listenr which fetcheds movie list
	getfilms(e) {
		let selectedChar = e.currentTarget.id;
		selectedChar = Number(selectedChar.split('-')[1]);

		if (selectedChar !== this.state.selectedButton) {
			const charactersObj = this.state.characters;
			const url = charactersObj[selectedChar]['url'];

			let filmsArr = [];
			this.setState({
				loading: true,
				error: null,
				errorMsg: null,
				selectedButton: selectedChar
			})
			
			fetch(url)
			.then( res => res.json())
			.then( obj => {
				//counts the films
				//this is used since the foreach index was unreliabe
				let flimIndex = 0;

				//loop through the fims to get each films info
				obj.films.forEach( (filmUrl) => {
					fetch(filmUrl)
					.then( res => res.json())
					.then( data => {
						filmsArr = [...filmsArr, data];
						//check if we reached the last url
						if( flimIndex === obj.films.length -1) {
							this.setState({
								films: filmsArr,
								loading: false
							})
						}
						flimIndex++;
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
			});
		}

	}

	render() {
		const charaterElements = () => {
			const characters = data.characters;
			return characters.map( (obj, i) => {
				return <Character 
						data={obj} 
						index={i} 
						key={i} 
						onClick={this.getfilms}
						selectedButton={this.state.selectedButton}
						/>
			});
		}

		return (
			<div>
				<header className="container" role="banner">
					<img  
					className="sitelogo" 
					src={Logo} alt="star wars logo" 
					/>
					<h2>Choose a character to see what films they appeared in.</h2>
					<ul className="list-styling ">
						{charaterElements()}
					</ul>
				</header>
				<main className="container">
					<Movies 
						loading={this.state.loading}
						films={this.state.films}
						error={this.state.error}
						errorMsg={this.state.errorMsg}
					/>
				</main>	
			</div>
		);
	}
}