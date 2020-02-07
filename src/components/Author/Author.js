import React from 'react';
import './Author.css';
import { quotes } from '../../quotes.js'
import { fakeauthors } from '../../FakeQuotes.js'

const Author = ({ number, number2, isFake }) => {
	return (
		<div 
			className='author green'
			style={{
				color: isFake ? '#cc0000' : '#00b386',
			}}					
		>
			{isFake === false 
			?
			<div>
			- {quotes[number].author}
			</div>
			:
			<div>
			- {fakeauthors[number2].author}
			</div>
			}
		</div>
	)
}

export default Author;