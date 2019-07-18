import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'
import FormComponent from "./FormComponent";
import { deleteForm, toggleFormVisibility } from "../redux/actions";

class FormListItemComponent extends AbstractComponent {

    render() {
        return (
            <React.Fragment>
            <div className={"list-group-item list-group-item-action"}>
                <strong>{ this.props.formConfig.name }</strong>
                <button type="button" className="btn btn-xs pull-right" onClick={ this.props.deleteForm.bind(this, this.props.formConfig.id) }>
                    <span role="img" aria-label="delete">&#9940;</span>
                </button>
                <button type="button" className="btn btn-xs pull-right" onClick={ this.props.toggleFormVisibility.bind(this, this.props.formConfig.id) }>
                    <span role="img" aria-label="edit">&#9935;</span>
                </button>
            </div>
                <FormComponent formConfig={ this.props.formConfig }/>
            </React.Fragment>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    toggleFormVisibility: (id) => dispatch(toggleFormVisibility(id)),

    deleteForm: (id) => dispatch(deleteForm(id))
});

export default connect(null, mapDispatchToProps)(FormListItemComponent)

