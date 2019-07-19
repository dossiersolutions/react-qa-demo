import React from 'react';
import { connect } from 'react-redux';
import FormComponent from "./FormComponent";
import { deleteForm, toggleFormVisibility } from "../redux/actions";
import PropTypes from "prop-types";

class FormListItemComponent extends React.Component {

    render() {
        const {
            toggleFormVisibility,
            deleteForm,
            formConfig,
            formConfig: {
                id: formId,
                name,
                collapsed
            }
        } = this.props;
        return (
            <React.Fragment>
            <div className={"list-group-item list-group-item-action"}>
                <strong>{ name }</strong>
                <button
                    type="button"
                    className="btn btn-sm btn-danger pull-right"
                    onClick={ deleteForm.bind(this, formId) }
                >
                    <span role="img" aria-label="delete">&times;</span>
                </button>
                <button
                    type="button"
                    className="btn btn-sm pull-right"
                    onClick={ toggleFormVisibility.bind(this, formId) }
                >
                    { collapsed
                        ? <span role="img" aria-label="expand">&#x25BC;</span>
                        : <span role="img" aria-label="collapse">&#x25B2;</span>}
                </button>
            </div>
                <FormComponent formConfig={ formConfig }/>
            </React.Fragment>
        );
    }

}

FormListItemComponent.propTypes = {
    toggleFormVisibility: PropTypes.func,
    deleteForm: PropTypes.func,
    formConfig: PropTypes.object,
    formId: PropTypes.number,
    name: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
    toggleFormVisibility: (id) => dispatch(toggleFormVisibility(id)),

    deleteForm: (id) => dispatch(deleteForm(id))
});

export default connect(state => state, mapDispatchToProps)(FormListItemComponent)

