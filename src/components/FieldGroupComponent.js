import React from 'react';
import AbstractComponent from "./AbstractComponent";
import InputTextFieldComponent from "./fields/InputTextFieldComponent";
import FieldActionsComponent from "./fields/FieldActionsComponent";
import CheckboxFieldComponent from "./fields/CheckboxFieldComponent";
import SelectFieldComponent from "./fields/SelectFieldComponent";

/**
 * Fields collection - grouped in fieldset
 */
export default class FieldGroupComponent extends AbstractComponent {

    fieldGroupConfig;

    render() {
        return(
            <div className="form-group m-1 p-1">
                <div className="form-group bg-white border-bottom border-secondary m-1 p-3 text-lg-center">
                    { this.props.fieldGroupConfig.title }
                    <button type="button" className="btn btn-sm btn-info pull-right">Add field</button>
                </div>
                <div className="form-group border border-secondary border-white">
                    { this.props.fieldGroupConfig.fields.map(function(fieldConfig) {
                        let field = null;
                        switch (fieldConfig.type) {
                            case 'string':
                                field = (<div className="row border-bottom border-white p-2">
                                    <div className="col-11 align-top">
                                        <InputTextFieldComponent key={`field-${fieldConfig.id}`} fieldConfig={ fieldConfig }/>
                                    </div>
                                    <div className="col-1 align-top">
                                        <FieldActionsComponent />
                                    </div>
                                </div>);
                                break;
                            case 'checkbox':
                                field = (<div className="row border-bottom border-white p-2">
                                        <div className="col-11 align-top">
                                            <CheckboxFieldComponent key={`field-${fieldConfig.id}`} fieldConfig={ fieldConfig }/>
                                        </div>
                                        <div className="col-1 align-top">
                                            <FieldActionsComponent />
                                        </div>
                                    </div>);
                                break;
                            case 'select':
                                field = (<div className="row border-bottom border-white p-2">
                                    <div className="col-11 align-top">
                                        <SelectFieldComponent key={`field-${fieldConfig.id}`} fieldConfig={ fieldConfig }/>
                                    </div>
                                    <div className="col-1 align-top">
                                        <FieldActionsComponent />
                                    </div>
                                </div>);
                                break;

                        }
                        return field;
                    }) }
                </div>
            </div>
        );
    }
}