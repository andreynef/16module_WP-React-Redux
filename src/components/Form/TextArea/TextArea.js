import React from 'react';
import './TextArea.css'

const TextArea = ({textAreaValue, handleChange}) =>{//dumb component
	return (
		<label className='label'>*Введите свой комментарий
			<textarea 
				className='textArea'
				name='js-textAreaName' // обязательный атрибут для textarea. Использую для обределения ключа в общем методе handleChange.
				type="text" 
				placeholder="комментарий" 
				value={textAreaValue}//значение в поле зависят только от приходящих пропсов
				onChange={handleChange}//при любом изменении поля используется значение из пропсов
				required
				maxLength = {30}
				>
			</textarea>
		</label>
	);
}

export default TextArea;