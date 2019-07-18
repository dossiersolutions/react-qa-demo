import React from 'react';
import { connect } from "react-redux";
import FieldConfigWindow from "./FieldConfigWindow";
import { Map } from "immutable";
import { deleteField, editField } from "../../redux/actions/FieldActions";

class FieldActionsComponent extends React.Component {

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

const mapDispatchToProps = dispatch => ({
    deleteField: (formId, fieldGroupId, fieldId) => dispatch(deleteField(formId, fieldGroupId, fieldId)),
    editField: (formId, fieldGroupId, fieldConfig) => dispatch(editField(formId, fieldGroupId, fieldConfig))
});

export default connect(null, mapDispatchToProps)(FieldActionsComponent)