import React from 'react';
import './App.css';
import Header from './My Components/header.js';
import ImageList from './My Components/ImageList.js';
import images from './data.js';


export default class App extends React.Component {
  // initalize state //
  state = {
    keyword: '',
  }
  
  render () {
    const filteredAnimals = images.filter((ImageList) => {
      // if the user does not select a specific keyword, show all //
      
       if (!this.state.keyword) return true;
      // if the user selects a specific keyword, show image with the same keyword //
      
      if (ImageList.keyword === this.state.keyword)return true;
      
      return false;
    });
  
    return (
    <div className="App">
      <Header/>
      <div className="dropdown">
          <p>Sort By Creature:</p>
        <form className="form">
  
        <select value={this.state.keyword} onChange={(e)=> {this.setState({keyword: e.target.value})}} name="creatures" id="creatures">
          
          <option value="select">Select</option>
          <option value="narwhal">Narwhal</option>
          <option value="rhino">Rhino</option>
          <option value="unicorn">Unicorn</option>
          <option value="triceratops">Triceratops</option>
          <option value="mouflon">Mouflon</option>
          <option value="markhor">Markhors</option>
          <option value="addax">Addax</option>
          <option value="chameleon">Chameleon</option>
          <option value="lizard">Lizard</option>
          <option value="dragon">Dragon</option>
        </select>
        </form>
      
      </div>
      <div className="image-gallery">
        <ImageList filteredAnimals= {filteredAnimals}/>
      </div>
    </div>
  );
}

}
