import React from 'react';

const PictureList = ({ pictures }) => {
	return (
		<div>
		{
			pictures.map((picture, i) => {
				return(
					<img alt='pictures' src={picture} key={i}/>
				)
			})
		}
		</div>
	)
}

export default PictureList;