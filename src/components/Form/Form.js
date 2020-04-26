import React from 'react';
import Input from './Input/Input.js'
import TextArea from './TextArea/TextArea.js'
import './Form.css'

const Form = ({inputValue,textAreaValue,handleSubmit, handleChange}) =>{//dumb component

	// let inputValue = React.createRef();//привяжем к DOM (а не к единственной истине - store)
	// let textAreaValue = React.createRef();
  return (
		<form
			onSubmit={handleSubmit}
		>
			<Input
				handleChange = {handleChange}//отдается через пропсы метод базы
				inputValue={inputValue} //отдается через пропсы значение базы
			/>
			<TextArea 
				handleChange = {handleChange}//отдается через пропсы метод базы
				textAreaValue={textAreaValue}//отдается через пропсы значение базы
			/>
			<button 
				type="submit"
				className ='button'
			>
				Добавить комментарий
			</button>
		</form>
  );
}

export default Form;