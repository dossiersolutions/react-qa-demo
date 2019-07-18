import React from 'react';
import { connect } from 'react-redux';
import FormActionsComponent from "./FormActionsComponent";
import FieldGroupComponent from "./FieldGroupComponent";
import { GET_FORM_CONFIG_JSON } from "../redux/actions/types";

class FormComponent extends React.Component {

    render() {
        const formId = this.props.formConfig.id;
        return (
            <div className={ this.props.formConfig.collapsed ? "collapse" : "bg-light p-1 border border-light mb-5" } >
            <FormActionsComponent formConfig={ this.props.formConfig } getFormConfigJson={ this.props.getFormConfigJson }/>
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

const mapDispatchToProps = dispatch => ({
    getFormConfigJson: (formId) => dispatch({
        type: GET_FORM_CONFIG_JSON,
        payload: {
            formId,
        }
    })
});

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)

