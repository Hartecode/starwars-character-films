import React from 'react';
import './character.css';

export default function Character(props){
		const currentBtn = (props.selectedButton)? props.selectedButton: null;
		return (
			<li  
				className={( currentBtn === props.index)? 'selectedButton': 'navlink'} 
				id={`char-${props.index}`} 
				onClick={props.onClick} 
				key={`KEY-${props.index}`}> 
					<h3>{props.data.name}</h3>
			</li>
		)
}