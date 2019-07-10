import React from 'react';
import AbstractComponent from "../AbstractComponent";
import {connect} from "react-redux";
import {ADD_NEW_FORM, DELETE_FIELD, EDIT_FIELD} from "../../redux/actionTypes";

class FieldActionsComponent extends AbstractComponent {

    render() {
        return(
            <React.Fragment>
                <button type="button" className="btn btn-sm btn-outline-info float-right col"
                        onClick={ this.props.editField.bind(this, this.props.formId, this.props.fieldGroupId, this.props.fieldConfig.id) }
                >&#9998;</button><br/>
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
    editField: (formId, fieldGroupId, fieldId) => dispatch({
        type: EDIT_FIELD,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId,
            fieldId: fieldId
        }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldActionsComponent)