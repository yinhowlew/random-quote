import React from 'react';
import './NewQuote.css';

const NewQuote = ({ onButtonSubmit, onRandomSubmit, isFake }) => {
	return (
		<div>
			<button 
				onClick={onButtonSubmit}
				className='button'
				style={{
					backgroundColor: isFake ? '#cc0000' : '#00cc99',
				}}
			>
			Real quote
			</button>
			<button 
				onClick={onRandomSubmit}
				className='button'
				style={{
					backgroundColor: isFake ? '#cc0000' : '#00cc99',
				}}				
			>
			Fake quote
			</button>			
		</div>
	)
}

export default NewQuote;