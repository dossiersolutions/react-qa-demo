import React from 'react';
import FormListItemComponent from "./FormListItemComponent";

const FormListRenderer = ({ forms }) => {

    return (
        <React.Fragment>
        <div className="list-group">
            { forms.map(function(formConfig) {
                return <FormListItemComponent key={`form-${formConfig.id}`} formConfig={ formConfig }/>;
            }) }
        </div>
        </React.Fragment>
    );

};

export default FormListRenderer;

