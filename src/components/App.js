import React, {useState} from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isTheme, setIsTheme] = useState(false )
  const appClass = isTheme ? "App dark" : "App light"

  function handleTheme(){
    setIsTheme(!isTheme)
   
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>{isTheme ? "Dark Mode" : "Light Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
