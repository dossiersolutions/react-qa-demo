import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'
import { ADD_NEW_FORM } from "../redux/actionTypes";

class AddFormComponent extends AbstractComponent {

    render() {
        return (
            <React.Fragment>
            <button type="button" className="btn btn-info"
                    onClick={ this.props.addNewForm.bind(this) }>Craft new form</button>
            <br/>
            <br/>
            </React.Fragment>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    addNewForm: () => dispatch({
        type: ADD_NEW_FORM,
        payload: {}
    })
});

function mapStateToProps(state) {
    return { state } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFormComponent)

