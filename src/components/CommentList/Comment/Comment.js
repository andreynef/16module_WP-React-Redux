import React from 'react';
import './Comment.css'

const Comment = ({name, handleDelete, text, date}) =>{//dumb component
/* 2 варианта привязки контекста
<button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button> 
<button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button> 
*/
  return (
    <li 
			className='listItem'
		>
			<div className='listHeader'>
				<div className='name'>{name}</div>
				<button 
					type="button"
					className='cross'   
					aria-label="удалить"
					onClick={handleDelete}
					>
				</button>
			</div>
			<div className='text'>{text}</div>
			<div className='date'>{date}</div>
		</li>
  );
}
export default Comment