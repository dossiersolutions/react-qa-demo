import React from 'react';
import useWindowWidth from "../hooks/ResizeHook";
import FieldConfigWindow from "./fields/FieldConfigWindow";
import {CONSTANTS} from "../constants";
import FieldActionsComponent from "./fields/FieldActionsComponent";
import FieldRendererFactory from "./FieldRendererFactory";

const FieldGroupRenderer = ({ formId, fieldGroupId, fieldGroupConfig, saveFieldConfig, deleteFieldGroup }) => {

    const width = useWindowWidth();

    return (
        <div className="form-group m-1 p-1">
            <div className="form-group bg-white border-bottom border-secondary m-1 p-3 text-lg-center">
                { fieldGroupConfig.title
                    ? <span className="text-info">{ fieldGroupConfig.title }</span>
                    : null
                }
                { fieldGroupConfig.description
                    ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ fieldGroupConfig.description }</small>
                    : null
                }
                <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-sm btn-outline-danger pull-right"
                        onClick={ deleteFieldGroup.bind(this, fieldGroupConfig.formId, fieldGroupConfig.id)}
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
                    formId = { fieldGroupConfig.formId }
                    fieldGroupId = { fieldGroupConfig.id }
                    fieldConfig = { CONSTANTS.NEW_FIELD_CONFIG }
                    saveHandler = { saveFieldConfig }
                />
            </div>
            <div className="form-group border border-secondary border-white">
                {
                    fieldGroupConfig.fields.map(function(fieldConfig) {
                        return (<div className="row border-bottom border-white p-2" key={`field-wrapper-${fieldGroupConfig.id}-${fieldConfig.id}`}>
                            <div className="col-11 align-top" key={`field-component-wrapper-${fieldConfig.id}`}>
                                <FieldRendererFactory fieldConfig={ fieldConfig }/>
                            </div>
                            {width > 950
                                ? <div className="col-1 align-top"
                                       key={`field-actions-wrapper-${fieldConfig.id}`}>
                                    <FieldActionsComponent formId={formId} fieldGroupId={fieldGroupId}
                                                           fieldConfig={fieldConfig}/>
                                </div>
                                : null
                            }
                        </div>);
                    }) }
            </div>
        </div>
    );

};

export default FieldGroupRenderer;

