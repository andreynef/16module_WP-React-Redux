const HANDLE_DELETE = 'HANDLE_DELETE'
const HANDLE_CHANGE = 'HANDLE_CHANGE'
const HANDLE_SUBMIT = 'HANDLE_SUBMIT'

export const handleDeleteAction = id => {
	return {
		type: HANDLE_DELETE,
		id
	}
}

export const handleChangeAction = event => {
	return {
		type: HANDLE_CHANGE,
		event
	}
}

export const handleSubmitAction = event => ({
		type: HANDLE_SUBMIT,
		event
})