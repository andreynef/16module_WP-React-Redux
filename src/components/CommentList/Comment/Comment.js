import React from 'react';
import './Comment.css'

const Comment = ({name, handleDelete, text, date, id}) =>{
  return (
    <li 
			className='listItem'
		>
			<div className='listHeader'>
				<div className='name'>{name}</div>
				<button 
					id={id}
					type="button"
					className='cross'   
					aria-label="удалить"
					onClick={() => handleDelete(id)} // тжсм onClick={handleDelete.bind(this, id)}
					>
				</button>
			</div>
			<div className='text'>{text}</div>
			<div className='date'>{date}</div>
		</li>
  );
}
export default Comment