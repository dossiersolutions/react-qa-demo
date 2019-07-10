import React from 'react';
import './App.css';
import FormListComponent from "./components/FormListComponent";
import AddFormComponent from "./components/AddFormComponent";

function App() {
  return (
    <div className="container">
        <h1>Form-craft</h1>
        <AddFormComponent />
        <FormListComponent/>
    </div>
  );
}

export default App;
