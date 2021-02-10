import React from 'react';
import ImageItem from './ImageItem';


class ImageList extends React.Component {
    render() {
    const animalImages = 
      this.props.ImageItemProp.map(
        currentAnimalImage => <ImageItem ImageItemProp = { currentAnimalImage } />
      );

    return (
      <ul class="animal-list">
        {animalImages}
      </ul>
    );
  }
}

export default ImageList;