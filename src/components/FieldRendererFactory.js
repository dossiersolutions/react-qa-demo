import React from 'react';
import InputTextFieldRenderer from "./fields/InputTextFieldRenderer";
import CheckboxFieldRenderer from "./fields/CheckboxFieldRenderer";
import SelectFieldRenderer from "./fields/SelectFieldRenderer";

export default function FieldRendererFactory({ fieldConfig }) {

    let field = null;

    switch (fieldConfig.type) {
        case 'string':
            field = <InputTextFieldRenderer
                key={`field-${fieldConfig.id}`}
                fieldConfig={ fieldConfig }/>;
            break;
        case 'checkbox':
            field = <CheckboxFieldRenderer
                key={`field-${fieldConfig.id}`}
                fieldConfig={ fieldConfig }/>;
            break;
        case 'select':
            field = <SelectFieldRenderer
                key={`field-${fieldConfig.id}`}
                fieldConfig={ fieldConfig }/>;
            break;
        default:

    }

    return (<React.Fragment>{ field }</React.Fragment>);

}