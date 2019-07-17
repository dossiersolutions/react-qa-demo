import React from 'react';
import AbstractComponent from "../AbstractComponent";
import { connect } from "react-redux";
import { DELETE_FIELD, EDIT_FIELD } from "../../redux/actionTypes";
import FieldConfigWindow from "./FieldConfigWindow";
import { Map } from "immutable";

class FieldActionsComponent extends AbstractComponent {

    render() {
        return(
            <React.Fragment>
                <FieldConfigWindow
                    toggleButton = { show =>
                        <button
                            type="button"
                            onClick={ show }
                            className="btn btn-sm btn-outline-info float-right col"
                        >Edit</button> }
                    formId = { this.props.formId }
                    fieldGroupId = { this.props.fieldGroupId }
                    fieldConfig = { Map(this.props.fieldConfig) }
                    saveHandler={ this.props.editField }
                />
                <button type="button" className="btn btn-sm btn-outline-danger float-right col"
                    onClick={ this.props.deleteField.bind(this, this.props.formId, this.props.fieldGroupId, this.props.fieldConfig.id) }
                >&times;</button>
            </React.Fragment>
        );
    }

}

function mapStateToProps(state) {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => ({
    deleteField: (formId, fieldGroupId, fieldId) => dispatch({
        type: DELETE_FIELD,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId,
            fieldId: fieldId
        }
    }),
    editField: (formId, fieldGroupId, fieldConfig) => dispatch({
        type: EDIT_FIELD,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId,
            fieldConfig: fieldConfig
        }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldActionsComponent)