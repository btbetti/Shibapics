import React from 'react';
import './PictureList.css';

const PictureList = ({ pictures }) => {
	return (
		<div className='pictureList'>
		{
			pictures.map((picture, i) => {
				return(
					<img className='image' alt='pictures' src={picture} key={i}/>
				)
			})
		}
		</div>
	)
}

export default PictureList;