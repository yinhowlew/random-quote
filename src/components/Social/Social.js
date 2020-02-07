import React from 'react';
import './Social.css';
import { quotes } from '../../quotes.js'
import { fakequotes, fakeauthors } from '../../FakeQuotes.js'


const Social = ({ number, number1, number2, isFake }) => {
	const link = 
	"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
	+
	quotes[number].quote
	+
	" -"
	+
	quotes[number].author

	const fakeLink = 
	"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
	+
	fakequotes[number1].quote
	+
	" -"
	+
	fakeauthors[number2].author


	return (
		<div className='social'>
			<a 
				href={
					isFake === false ?
					link : fakeLink
				} 
/*eslint-disable-next-line*/
				target="_blank">
				<img 
					width="30px"
					height="30px"
					src='https://sociable.co/wp-content/uploads/2012/06/new-twitter-logo.jpg' 
					alt='twitter' 
				/>
			</a>
		</div>
	)
}

export default Social;