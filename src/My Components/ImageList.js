import React from 'react';
import ImageItem from './ImageItem';


class ImageList extends React.Component {
    render() {
      
      // const animalImages = this.props.filteredAnimals.map(
      //     creatureImage => <ImageItem 
      //     key={creatureImage.title} 
      //     ImageItemProp= {creatureImage} />)

    return (
      <ul className="animal-list">
        { this.props.filteredAnimals.map(creatureImage =>
      <ImageItem
      key={creatureImage.title}
      ImageItemProp= {creatureImage} />)}
      
      </ul>
    );
  }
}

export default ImageList;