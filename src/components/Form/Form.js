import React from 'react';
import './Form.css'

const Form = ({inputValue,textAreaValue,handleSubmit, handleChange}) =>{

  return (
		<form
			onSubmit={handleSubmit}
			action="#" 
			method="post"
		>
			<label className='label'>*Введите свое имя
				<input
					className='input'
					placeholder="имя"
					type="text"
					name='nameField' 
					onChange={handleChange}
					value={inputValue}
					autoFocus
					required
				/>
			</label>

			<label className='label'>*Введите свой комментарий
				<textarea 
					className='textArea'
					name='textField' 
					type="text" 
					placeholder='комментарий' 
					value={textAreaValue}
					onChange={handleChange}
					required
					maxLength = {100}
					>
				</textarea>
			</label>
			<input 
				type='submit'
				className ='button'
				value ='Добавить комментарий'
			>
			</input>
		</form>
  );
}

export default Form;