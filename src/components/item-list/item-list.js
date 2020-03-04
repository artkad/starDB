import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {
  render() {
    return(
      <div>
        <ul className='list-group'>
          <li className='list-group-item'><span>Luke Skywalker</span></li>
          <li className='list-group-item'><span>Darth Vader</span></li>
          <li className='list-group-item'><span>R2-D2</span></li>
        </ul>
      </div>
    )
  }
}