import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
      const {items, clearList, handleDelete, handleEdit} = this.props
    return (
      <div>
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>Todo List</h3>
                {items.map(item => {
                    return <TodoItem key={item.id}
                                     item={item.item}
                                     handleDelete={()=> handleDelete(item.id)} 
                                     handleEdit={()=> handleEdit(item.id)}
                            />
                })}
                
                
                <button type='button'
                        className='btn btn-danger mt-5 btn-block'
                        onClick={clearList}
                >
                Clear List
                </button>
            </ul>

      </div>
    )
  }
}
