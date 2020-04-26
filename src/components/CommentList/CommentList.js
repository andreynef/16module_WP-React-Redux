import React from 'react';
import Comment from './Comment/Comment.js';
import './CommentList.css';


const CommentList = ({itemsArr, handleDelete}) =>{//функциональный компонент с единственными получаемыми аргументами props. Типа глупый компонент который тупо принимает приказ и выполняет его(принял аргументы и использовал их не меняя ничего)я
	return (
		<ul className='list'>
			{itemsArr.map((item)=>//создание нового массива на основе старого используя его существующие данные и добавления новых (метод трансформации массива "map(item,index,array)")
					<Comment 
						key={item.id}//установление ключа который нужен элементу массива. Если его не писать то Реакт по умолчанию использует Index.
						id={item.id}
						date={item.date}//значение ключа date каждого перебираемого обьекта назначается как date.
						text={item.text}
						name={item.name}
						handleDelete={handleDelete.bind(this,item.id)}//привязать к каждому элементу в массиве по id
					/>
			)}		
		</ul>
	)
}

export default CommentList;

