import React from 'react';
import AbstractComponent from "./AbstractComponent";
import InputTextFieldComponent from "./fields/InputTextFieldComponent";
import FieldActionsComponent from "./fields/FieldActionsComponent";
import CheckboxFieldComponent from "./fields/CheckboxFieldComponent";
import SelectFieldComponent from "./fields/SelectFieldComponent";
import FieldConfigWindow from "./fields/FieldConfigWindow";
import { connect } from "react-redux";
import { ADD_NEW_FIELD, DELETE_FIELD_GROUP } from "../redux/actionTypes";
import { Map } from "immutable";

/**
 * Fields collection - grouped in fieldset
 */
class FieldGroupComponent extends AbstractComponent {

    fieldGroupConfig;

    formId;

    NEW_FIELD_CONFIG = Map({
        label: '',
        placeholder: '',
        description: '',
        type: 'string'
    });

    render() {
        const formId = this.props.fieldGroupConfig.formId;
        const fieldGroupId = this.props.fieldGroupConfig.id;
        console.log(this.NEW_FIELD_CONFIG);
        console.log(this.NEW_FIELD_CONFIG.get('type'));
        return(
            <div className="form-group m-1 p-1">
                <div className="form-group bg-white border-bottom border-secondary m-1 p-3 text-lg-center">
                    { this.props.fieldGroupConfig.title }
                    <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-sm btn-outline-danger pull-right"
                            onClick={this.props.deleteFieldGroup.bind(this, this.props.fieldGroupConfig.formId, this.props.fieldGroupConfig.id)}
                    >
                        &times;
                    </button>
                    <FieldConfigWindow
                        toggleButton = { show =>
                            <button
                                type="button"
                                onClick={ show }
                                className="btn btn-sm btn-info pull-right"
                            >&#x002B;</button> }
                        formId = { this.props.fieldGroupConfig.formId }
                        fieldGroupId = { this.props.fieldGroupConfig.id }
                        fieldConfig = {{
                            label: '',
                            placeholder: '',
                            description: '',
                            type: 'string'
                        }}
                        saveHandler={ this.props.saveFieldConfig }
                    />
                </div>
                <div className="form-group border border-secondary border-white">
                    {
                        this.props.fieldGroupConfig.fields.map(function(fieldConfig) {
                        let field = null;
                        switch (fieldConfig.type) {
                            case 'string':
                                field = (<div className="row border-bottom border-white p-2" key={`field-wrapper-${fieldConfig.id}`}>
                                    <div className="col-11 align-top" key={`field-component-wrapper-${fieldConfig.id}`}>
                                        <InputTextFieldComponent key={`field-${fieldConfig.id}`} fieldConfig={ fieldConfig }/>
                                    </div>
                                    <div className="col-1 align-top" key={`field-actions-wrapper-${fieldConfig.id}`}>
                                        <FieldActionsComponent formId={ formId } fieldGroupId={ fieldGroupId } fieldConfig={ fieldConfig }/>
                                    </div>
                                </div>);
                                break;
                            case 'checkbox':
                                field = (<div className="row border-bottom border-white p-2" key={`field-wrapper-${fieldConfig.id}`}>
                                        <div className="col-11 align-top" key={`field-component-wrapper-${fieldConfig.id}`}>
                                            <CheckboxFieldComponent key={`field-${fieldConfig.id}`} fieldConfig={ fieldConfig }/>
                                        </div>
                                        <div className="col-1 align-top" key={`field-actions-wrapper-${fieldConfig.id}`}>
                                            <FieldActionsComponent formId={ formId } fieldGroupId={ fieldGroupId } fieldConfig={ fieldConfig }/>
                                        </div>
                                    </div>);
                                break;
                            case 'select':
                                field = (<div className="row border-bottom border-white p-2" key={`field-wrapper-${fieldConfig.id}`}>
                                    <div className="col-11 align-top" key={`field-component-wrapper-${fieldConfig.id}`}>
                                        <SelectFieldComponent key={`field-${fieldConfig.id}`} fieldConfig={ fieldConfig }/>
                                    </div>
                                    <div className="col-1 align-top" key={`field-actions-wrapper-${fieldConfig.id}`}>
                                        <FieldActionsComponent formId={ formId } fieldGroupId={ fieldGroupId } fieldConfig={ fieldConfig }/>
                                    </div>
                                </div>);
                                break;
                            default:


                        }
                        return field;
                    }) }
                </div>
            </div>
        );
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