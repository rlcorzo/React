import React from "react";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){
  return(
    <React.Fragment>
      <NavBar/>
      <ItemListContainer/>
    </React.Fragment>
  );


}

export default App;