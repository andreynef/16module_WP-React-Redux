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

const mapStateToProps = (state) => {//преобразование кучи стора (в данном случае обьект InitialState) в узкое горлышко нужных пропсов. State = store.getState().
  return {//возврат обьекта с только необходимыми свойствами
    itemsArr: state.items,//создаю свой пропс itemsArr равный 
    inputValue: state.form.formName,
    textAreaValue:state.form.formText
  }
}
const mapDispatchToProps = (dispatch) => {//имя dispatch вернется как название метода
  return {//возврат обьекта с только методами кот нужны для этого App
    handleDelete: (id) => dispatch(handleDeleteAction(id)),// = const handleDelete = (id)=>{dispatch(obj)} 
    handleChange: (inputValue, textAreaValue)=> dispatch(handleChangeAction(inputValue, textAreaValue)),//метод handleChange в пропсах кот будет запускать dispatch у стора.
    handleSubmit: (itemsArr, inputValue, textAreaValue) => {//либо такая запись
      let action = handleSubmitAction(itemsArr, inputValue, textAreaValue);
      dispatch(action);
      },
    }
}
//сложно
App = connect(mapStateToProps,mapDispatchToProps)(App);//преобразование в спец контейнерный компонент. Коннектится с хранилищем Redux. Типа эй хранилище, выполни коннект с этими мапоПропсами и передай результат обратно в App в качестае пропсов.
    

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
