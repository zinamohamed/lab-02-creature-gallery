import React from 'react';
import './App.css';
import Header from './My Components/header.js'
import ImageList from './My Components/ImageList.js'
import images from './data.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="dropdown">
        
        <label for="creatures">Pick An Animal:</label>

        <select name="creatures" id="creatures">
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
          <button>Submit!</button>
      
      </div>
      
      <ImageList ImageItemProp= { images }/>
    </div>
  );
}

export default App;
