import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'
import FormComponent from "./FormComponent";
import {TOGGLE_FORM_VISIBILITY} from "../redux/actionTypes";

class FormListItemComponent extends AbstractComponent {
    formConfig;

    handleEditClick(formConfig) {
        this.props.toggleFormVisibility(formConfig.id);
    }

    handleDeleteClick(formConfig) {
        console.log('Delete click', formConfig.id);

    }

    render() {
        return (
            <React.Fragment>
            <a className={"list-group-item list-group-item-action"}>
                <strong>{ this.props.formConfig.name }</strong>
                <button type="button" className="btn btn-xs pull-right" onClick={this.handleDeleteClick.bind(this, this.props.formConfig)}>
                    &#9940;
                </button>
                <button type="button" className="btn btn-xs pull-right" onClick={this.handleEditClick.bind(this, this.props.formConfig)}>
                    &#9935;
                </button>
            </a>
                <FormComponent formConfig={ this.props.formConfig }/>
            </React.Fragment>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    toggleFormVisibility: (id) => dispatch({
        type: TOGGLE_FORM_VISIBILITY,
        payload: { id }
    })
});

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormListItemComponent)

