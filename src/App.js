import React from 'react';
import './App.css';
import Header from './My Components/header.js';
import ImageList from './My Components/ImageList.js';
import images from './data.js';
import Dropdown from './My Components/Dropdown';


export default class App extends React.Component {
  // initalize state //
  state = {
    keyword: '',
    // initalize state for horns //
    horns: '',
  }

  // creating handlers to set horns and keyword 

  keywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  hornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  //
  
  render () {
    const filteredAnimals = images.filter((ImageList) => {
      // if the user does not select a specific keyword or horns, show all //
      
       if (!this.state.keyword && !this.state.horns) return true;
      
       // if the user selects a specific keyword, show image with the same keyword //
      
     
      if (ImageList.keyword === this.state.keyword)return true;

      // if the user selects a specific horns, show image with the same horns //

      if (ImageList.horns === this.state.horns)return true;
      
      return false;
    });
  
    return (
    <div className="App">
      <Header/>
      <div className="dropdown">
        <div className="dropdown-box">
          Sort By Creature:
          <Dropdown
             
              currentValue={this.state.keyword}
              handleChange={this.keywordChange}
              options={['narwhal', 'unicorn', 'rhino', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}
          />
        </div>
        <div className="dropdown-box">
          Sort by # of Horns:
          <Dropdown
              
              currentValue={this.state.horns}
              handleChange={this.hornsChange}
              options={['1', '2', '3', '100']}
          />
        </div>
      </div>
      <div className="image-gallery">
        <ImageList filteredAnimals= {filteredAnimals}/>
      </div>
    </div>
  );
}

}
