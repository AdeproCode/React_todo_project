import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
    return (
        <div className='card card-body mt-3'>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <div className='input-group-text bg-primary text-white'>
                    <i className="fa fa-book" aria-hidden="true"/>
                    </div>
                    <input type='text'
                        className='form-control text-capitalize'
                        placeholder='Enter Todo Items'
                        value={item}
                        onChange={handleChange}
                    
                    />
                </div>
                <div className='list-group'>
                    <button type='submit'
                        className={editItem ? 'btn btn-success mt-3 btn-block' : 'btn btn-primary mt-3 btn-block'}>
                        {editItem ? "Edit Item" : "Add Item" }
                        </button>
                </div>
                
            </form>
            
        </div>
    )
  }
}
