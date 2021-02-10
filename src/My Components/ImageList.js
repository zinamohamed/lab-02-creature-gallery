import React from 'react';
import ImageItem from './ImageItem';


class ImageList extends React.Component {
    render() {
      
      const animalImages = this.props.filteredList.map(
          creatureImage => <ImageItem 
          key={creatureImage.title} 
          ImageItemProp= {creatureImage} />)

    return (
      <ul class="animal-list">
        {animalImages}
      </ul>
    );
  }
}

export default ImageList;