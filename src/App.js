import React from 'react';
import './App.css';
import FormListRenderer from "./components/FormListRenderer";
import AddFormComponent from "./components/AddFormComponent";
import { connect } from "react-redux";

class App extends React.Component {

    render() {
      return (
          <div className="container">
              <h1>Form-craft</h1>
              <AddFormComponent />
              <FormListRenderer forms={ this.props.forms }/>
          </div>
      );
    }

}

function mapStateToProps(state) {
    return {
        forms: state.global.byIds
    };
}

export default connect(mapStateToProps)(App);
