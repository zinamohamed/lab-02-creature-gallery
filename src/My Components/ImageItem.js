import React from 'react';

class ImageItem extends React.Component {
  render () {
    return (
      <li class="images">
        <img class="animal-img" src={this.props.ImageItemProp.url} alt="animals"/>
      </li>
    )
  }
}

export default ImageItem;