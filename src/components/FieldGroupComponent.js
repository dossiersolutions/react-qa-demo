import React from 'react';
import { connect } from "react-redux";
import FieldGroupRenderer from './FieldGroupRenderer';
import { deleteFieldGroup } from "../redux/actions";
import { addNewField } from "../redux/actions/FieldActions";

/**
 * Fields collection - grouped in fieldset
 */
class FieldGroupComponent extends React.Component {

    fieldGroupConfig;

    formId;

    render() {
        return(<FieldGroupRenderer
            formId={ this.props.fieldGroupConfig.formId }
            fieldGroupId={ this.props.fieldGroupConfig.id }
            fieldGroupConfig={ this.props.fieldGroupConfig }
            saveFieldConfig={ this.props.saveFieldConfig }
            deleteFieldGroup={ this.props.deleteFieldGroup }
        />);
    }
}

const mapDispatchToProps = dispatch => ({
    saveFieldConfig: (formId, fieldGroupId, fieldConfig) => dispatch(addNewField(formId, fieldGroupId, fieldConfig)),
    deleteFieldGroup: (formId, fieldGroupId) => dispatch(deleteFieldGroup(formId, fieldGroupId))
});

export default connect(null, mapDispatchToProps)(FieldGroupComponent)