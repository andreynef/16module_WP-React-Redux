import React from 'react';
import Comment from './Comment/Comment.js';
import './CommentList.css';


const CommentList = ({itemsArr, handleDelete}) =>{
	return (
		<ul className='list'>
			{itemsArr.map((item)=>
					<Comment 
						key={item.id}
						id={item.id}
						date={item.date}
						text={item.text}
						name={item.name}
						handleDelete={handleDelete}
					/>
			)}		
		</ul>
	)
}

export default CommentList;

