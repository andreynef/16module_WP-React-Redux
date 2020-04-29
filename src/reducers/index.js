
const setLocalStorage = (newSet)=>{
	localStorage.setItem('commentItems', JSON.stringify(newSet));
}

const reducer = (state = {}, action) => {

	switch (action.type){

		case 'HANDLE_SUBMIT':
			action.event.preventDefault();

			//определение id последнего комментария для корректной работы нумерации следующих комментариев (чтобы не переопределялись)
			let stateItemsLength = state.items.length;
			let lastCommentId = stateItemsLength === 0 ? [] : state.items[(state.items.length)-1].id  
			
			const newItem = {
				id:++lastCommentId,
				name:state.form.nameField,
				text:state.form.textField,
				date: new Date().toLocaleString('ru'),
			};

			const newStateAfterSubmission = {
				...state,
				items:[...state.items, newItem], 
				form: {
					nameField: '',
					textField: ''
				}
			}
			
			setLocalStorage(newStateAfterSubmission);	

			return newStateAfterSubmission

		case 'HANDLE_DELETE':
			const filteredStateItemsArr = state.items.filter(item => item.id !== action.id);
			const newStateAfterDeletion = {
				...state,
				items: filteredStateItemsArr
			}

			setLocalStorage(newStateAfterDeletion);	
			return newStateAfterDeletion
		
		case 'HANDLE_CHANGE':
			const key = action.event.target.name;
			const value = action.event.target.value
			const newStateAfterChanging = {
				...state, 
				form: {
					...state.form,
					[key]: value,				
				}
			}
			setLocalStorage(newStateAfterChanging); 				

			return newStateAfterChanging
		
		default:
			return state;
	}
}

export default reducer;