const HANDLE_DELETE = 'HANDLE_DELETE'
const HANDLE_CHANGE = 'HANDLE_CHANGE'
const HANDLE_SUBMIT = 'HANDLE_SUBMIT'

export const handleDeleteAction = event => {//метод Action кот возвращает обьект с обязательным ключом TYPE и нужными данными как пропсы.
	return {//вернуть обьект
		type: HANDLE_DELETE,
		id: event// типа в компоненте JSX метод onClick привязывал к каждому элементу по id. Так что получаестся this.id выводит здесь event как id. Вобщем хз.
	}
}

export const handleChangeAction = (event) => {
	const objKey = event.target.name === 'js-textAreaName' ? 'textAreaValue' : 'inputValue';//условие определяющее какое именно свойство менять
	const targetValue = event.target.value// какое значение использовать
	return {//вернуть обьект
		type: HANDLE_CHANGE,
		[objKey]: targetValue,//передаем редюсеру те самые значения
	}
}

export const handleSubmitAction = (event) => {
	event.preventDefault()//сброс отправки формы и открытия дефолтной нов страницы
	return {//вернуть обьект
		type: HANDLE_SUBMIT,
	}
}