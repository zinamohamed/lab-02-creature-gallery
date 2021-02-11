import React from 'react';

// creating reusable Dropdown Componenet //
export default class Dropdown extends React.Component {
  render() {
      return (
         <select
          // setting value of Dropdown to currentValue //
          value={this.props.currentValue}
          // call handleChange in the onChange property //
          onChange={this.props.handleChange}>
            {
              // map over options to generate different options in dropdown //
              this.props.options.map(
              imageItem => 
              <option value={imageItem}> {imageItem} </option>)
            }
        </select> 
      )
  }
}