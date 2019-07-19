import React from 'react';
import { connect } from 'react-redux';
import FormActionsComponent from "./FormActionsComponent";
import FieldGroupComponent from "./FieldGroupComponent";
import PropTypes from "prop-types";

class FormComponent extends React.Component {

    getFormConfigJson = (formId) => {
        this.props.global.byIds.filter(formConfig => {
            if (formConfig.id === formId) {
                const fileName = "form_config_" + formId + Math.floor(Date.now());
                const json = JSON.stringify(formConfig);
                const blob = new Blob([json],{ type:'application/json' });
                const href = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = href;
                link.download = fileName + ".json";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            return true;
        });
    };

    render() {
        const {
            formConfig,
            formConfig: {
                id: formId,
                collapsed
            }
        } = this.props;
        return (
            <div
                key={`form-wrapper-${formId}`}
                className={ collapsed
                    ? "collapse"
                    : "bg-light p-1 border border-light mb-5" }
            >
                <FormActionsComponent
                    formConfig={ formConfig }
                    getFormConfigJson={ this.getFormConfigJson }/>
                <form key={`form-${formId}`}>
                    {
                        Object.values(formConfig.fieldsets).map(function(fieldGroupConfig) {
                            return (
                                <FieldGroupComponent
                                    key={`form-${formId}-fieldset-${fieldGroupConfig.id}`}
                                    fieldGroupConfig={{ ...fieldGroupConfig, formId: formId }}
                                />
                            );
                    }) }
                </form>
            </div>
        );
    }

}

FormComponent.propTypes = {
    formConfig: PropTypes.object,
    formId: PropTypes.number
};

export default connect(state => state)(FormComponent)

