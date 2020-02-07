import React, { Component } from 'react';
import Quote from '../Quote/Quote.js';
import Author from '../Author/Author.js';
import Social from '../Social/Social.js';
import NewQuote from '../NewQuote/NewQuote.js';
import { quotes } from '../../quotes.js'
import { fakequotes, fakeauthors } from '../../FakeQuotes.js'
import './Box.css';

class Box extends Component {
	constructor() {
		super()
		this.state = {
			number: Math.floor(Math.random() * quotes.length),
			// quotes: [],
			number1:  Math.floor(Math.random() * fakequotes.length),
			number2: Math.floor(Math.random() * fakeauthors.length),
			isFake: false,
		};
	}
// 18, 16

	// componentDidMount() {
	// 	fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
	// 	.then(response=> response.json())
	// 	.then(users => this.setState({ quotes: users.quotes[this.state.number] }))
	// }

	componentDidUpdate() {
		this.state.isFake === false 
		?
		document.body.style.backgroundColor = "#00b386"
		:
		document.body.style.backgroundColor = "#cc0000"
	}

	onButtonSubmit =() => {
		this.setState({number: Math.floor(Math.random() * quotes.length)});
		this.setState({isFake: false});
		// fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
		// .then(response=> response.json())
		// .then(users => this.setState({ quotes: users.quotes[this.state.number] }))
	}

	onRandomSubmit =() => {
		this.setState({isFake: true});
		this.setState({number1: Math.floor(Math.random() * fakequotes.length)});
		this.setState({number2: Math.floor(Math.random() * fakeauthors.length)});
	}	

	render() {
		return (
			<div className="quote-box">
	        	<Quote 
	        		number={this.state.number} 
	        		number1={this.state.number1} 
	        		isFake={this.state.isFake}
	        	/>
	        	<Author 
	        		number={this.state.number} 
	        		number2={this.state.number2} 
	        		isFake={this.state.isFake}	     
	        	/>
	 			<Social 
	 				number={this.state.number} 
	        		number1={this.state.number1} 
	        		number2={this.state.number2} 
	        		isFake={this.state.isFake}	
	 			/>
	 			<NewQuote 
	 				onButtonSubmit={this.onButtonSubmit} 
	 				onRandomSubmit={this.onRandomSubmit}
	 				isFake={this.state.isFake}	
	 			/>
			</div>
		)
	}
}

export default Box;