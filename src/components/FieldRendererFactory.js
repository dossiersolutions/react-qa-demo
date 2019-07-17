import React from 'react';
import InputTextFieldComponent from "./fields/InputTextFieldComponent";
import CheckboxFieldComponent from "./fields/CheckboxFieldComponent";
import SelectFieldComponent from "./fields/SelectFieldComponent";

export default function FieldRendererFactory({ fieldConfig }) {

    let field = null;

    switch (fieldConfig.type) {
        case 'string':
            field = <InputTextFieldComponent
                key={`field-${fieldConfig.id}`}
                fieldConfig={ fieldConfig }/>;
            break;
        case 'checkbox':
            field = <CheckboxFieldComponent
                key={`field-${fieldConfig.id}`}
                fieldConfig={ fieldConfig }/>;
            break;
        case 'select':
            field = <SelectFieldComponent
                key={`field-${fieldConfig.id}`}
                fieldConfig={ fieldConfig }/>;
            break;
        default:

    }

    return (<React.Fragment>{ field }</React.Fragment>);

}