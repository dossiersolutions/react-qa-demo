import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'

class AddFormComponent extends AbstractComponent {

    render() {
        return (
            <React.Fragment>
            <button type="button" className="btn btn-success">Craft new form</button>
            <br/>
            <br/>
            </React.Fragment>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AddFormComponent)

