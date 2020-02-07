import React from 'react';
import { fakequotes } from '../../FakeQuotes.js'
import { quotes } from '../../quotes.js'
import './Quote.css';

const Quote = ({ number, number1, isFake }) => {
	return (
		<div 
			className='green quote'
			style={{
				color: isFake ? '#cc0000' : '#00b386',
			}}			
		>
			{isFake === false
			?
			<div>
				{quotes[number].quote}
			</div>
			:
			<div>
				{fakequotes[number1].quote}
			</div>
			}
		</div>
	)
}

export default Quote;

