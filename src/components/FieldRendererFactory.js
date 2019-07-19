import React from 'react';
import InputTextFieldRenderer from "./fields/InputTextFieldRenderer";
import CheckboxFieldRenderer from "./fields/CheckboxFieldRenderer";
import SelectFieldRenderer from "./fields/SelectFieldRenderer";

export default function FieldRendererFactory({ fieldConfig }) {

    let field = null;

    switch (fieldConfig.type) {
        case 'string':
            field = <InputTextFieldRenderer
                key = {`field-${fieldConfig.id}`}
                id = { fieldConfig.id }
                label = { fieldConfig.label }
                placeholder = { fieldConfig.placeholder }
                description = { fieldConfig.description }
            />;
            break;
        case 'checkbox':
            field = <CheckboxFieldRenderer
                key = {`field-${fieldConfig.id}`}
                id = { fieldConfig.id }
                label = { fieldConfig.label }
                placeholder = { fieldConfig.placeholder }
                description = { fieldConfig.description }
            />;
            break;
        case 'select':
            field = <SelectFieldRenderer
                key = {`field-${fieldConfig.id}`}
                id = { fieldConfig.id }
                label = { fieldConfig.label }
                placeholder = { fieldConfig.placeholder }
                description = { fieldConfig.description }
            />;
            break;
        default:
            throw new Error("Invalid form field config")
    }

    return (<React.Fragment>{ field }</React.Fragment>);

}