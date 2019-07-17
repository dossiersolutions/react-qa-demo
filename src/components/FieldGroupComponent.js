import React from 'react';
import AbstractComponent from "./AbstractComponent";
import { connect } from "react-redux";
import { ADD_NEW_FIELD, DELETE_FIELD_GROUP } from "../redux/actionTypes";
import FieldGroupRenderer from './FieldGroupRenderer';

/**
 * Fields collection - grouped in fieldset
 */
class FieldGroupComponent extends AbstractComponent {

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
    saveFieldConfig: (formId, fieldGroupId, fieldConfig) => dispatch({
        type: ADD_NEW_FIELD,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId,
            fieldConfig: fieldConfig
        }
    }),

    deleteFieldGroup: (formId, fieldGroupId) => dispatch({
        type: DELETE_FIELD_GROUP,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId
        }
    })
});

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldGroupComponent)