
const setLocalStorage = (newSet)=>{//создаем метод чтобы не повторяться
	localStorage.setItem('commentItems', JSON.stringify(newSet));
}

const todoReducers = (state = {}, action) => {//ф фильтрующая действия. Ей должны прийти пропсы с массивом state ([] если нет) и объект action.
	// alert(action)

	switch (action.type){//ВАЖНО! Из Reducers нужно возвращать копию стейта (новую базу)

		case 'HANDLE_SUBMIT':
			// alert('reducer S')
			let lastCommentId;
			if (state.items.length === 0){//если пусто ([]) 
				lastCommentId = 0;//то установить счетчик на 0
			} else {
				lastCommentId = state.items[(state.items.length)-1].id  //определение значения id последнего элемента в массиве. Последний, потому что при удалении серединного элемента при последующих добавлениях может совпасть значение id.
			}
			

			const newText = {
				id:++lastCommentId,//передача номера id на +1
				name:state.form.formName,
				text:state.form.formText,
				date: new Date().toLocaleString('ru'),
			};

			const newStateAfterSubmission = {//копия
				...state,//копирование содержимого - того что было  (тема глубокого и поверхностного копирования)
				items:[...state.items, newText],//новое вложение, значит снова копирование(...) того что было, иначе это не глубокое копирование и останутся ссылки что НЕЛЬЗЯ делать при иммутабельной концепции реакта.
				form: {
					formName: '', //обнуление полей. Простые значение не имеют ссылок, так что можно просто писать так.
					formText: ''
				}
			}
			setLocalStorage(newStateAfterSubmission);//записываем новый массив в локал в формате('text','text'), тобишь в формате JSON		

			return newStateAfterSubmission//возвращает новый массив с новыми значениями(объектами). (скобки - значит создание нового обьекта. (Тжсм  let a={} return a)

		case 'HANDLE_DELETE':
			// alert('reducer D')
			const filteredStateItemsArr = state.items.filter(item => item.id !== action.id)//создаем новый отфильтрованный массив (без элемента с нужным id)
			const newStateAfterDeletion = {//копия
				...state,
				items: filteredStateItemsArr
			}

			setLocalStorage(newStateAfterDeletion);//записываем новый массив в локал в формате('text','text'), тобишь в формате JSON				
			return newStateAfterDeletion
		
		case 'HANDLE_CHANGE':
			//замудреное обьединение 2 методов как и в Actions
			const objKey = action.textAreaValue ? 'formText' : 'formName';//условие определяющее какое именно свойство менять
			const targetValue = action.textAreaValue ? action.textAreaValue : action.inputValue// какую инфу записывать в значение

			const newStateAfterChanging = {//копия
				...state, 
				form: {
					...state.form,
					[objKey]: targetValue,				
				}
			}
			setLocalStorage(newStateAfterChanging);//записываем в локал, чтобы при перезагрузке страницы поля оставались заполненными на последнем месте 				

			return newStateAfterChanging
		
		default://если action.type не совпадает с кейсами то вернуть старый стейт
			return state;
	}
}

export default todoReducers;