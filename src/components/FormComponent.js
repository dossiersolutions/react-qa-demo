import React from 'react';
import { connect } from 'react-redux';
import FormActionsComponent from "./FormActionsComponent";
import FieldGroupComponent from "./FieldGroupComponent";

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
        const formId = this.props.formConfig.id;
        return (
            <div className={ this.props.formConfig.collapsed ? "collapse" : "bg-light p-1 border border-light mb-5" } >
            <FormActionsComponent formConfig={ this.props.formConfig } getFormConfigJson={ this.getFormConfigJson }/>
            <form>
                {
                    Object.values(this.props.formConfig.fieldsets).map(function(fieldGroupConfig) {
                        return (
                            <FieldGroupComponent
                                key={`fieldset-${fieldGroupConfig.id}`}
                                fieldGroupConfig={{ ...fieldGroupConfig, formId: formId }}
                            />
                        );
                }) }
            </form>
            </div>
        );
    }

}

export default connect(state => state)(FormComponent)

