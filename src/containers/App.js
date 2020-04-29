import React from 'react';
import CommentList from '../components/CommentList/CommentList.js';
import Form from '../components/Form/Form.js';
import './App.css'
import {connect} from 'react-redux';
import {handleDeleteAction, handleChangeAction, handleSubmitAction} from '../actions';

let App = ({itemsArr, inputValue, textAreaValue, handleDelete, handleChange, handleSubmit}) => {
  return (
    <div className='centralContainer'>
      <section className='sectionList'>
        <h1 className='titleList'> Список комментариев </h1>
        <CommentList
          handleDelete={handleDelete} 
          itemsArr={itemsArr}
        />
      </section>
      <section className="sectionForm">
        <h2 className="titleForm">Форма</h2>
          <Form 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            textAreaValue={textAreaValue}
          />
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    itemsArr: state.items,
    inputValue: state.form.nameField,
    textAreaValue:state.form.textField
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (event) => {
      let action = handleSubmitAction(event);
      dispatch(action);
      },
    handleDelete: (id) => dispatch(handleDeleteAction(id)),
    handleChange: (event)=> dispatch(handleChangeAction(event)),
  }
}
//сложно
App = connect(mapStateToProps,mapDispatchToProps)(App);
    

export default App



  



























//   addToList() {
//     this.setState(prevState => ({
//         list: prevState.list.concat(this.state.text),
//         text: ''
//     }))
// }

// removeItem(item) {
//   const item = getItem(this.state.list, item.id) // Method to get item in list through comparison (IE: find some item with item.id), it has to return ITEM and INDEX in array
//   const newlist = [].concat(list) // Clone array with concat or slice(0)
//   newlist.splice(item.index, 1);
//   this.setState({list: newlist});       
// }
