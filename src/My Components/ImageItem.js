import React from 'react';

class ImageItem extends React.Component {
  render () {
    return (
      <li className="images">
        <h2 className="animal-name">{this.props.ImageItemProp.title}</h2>
        <img className="animal-img" src={this.props.ImageItemProp.url} alt="animals"/>
        <p className="animal-bio">{this.props.ImageItemProp.description}</p>
        <span className="horns">Horns: {this.props.ImageItemProp.horns}</span>
      </li>
    )
  }
}

export default ImageItem;