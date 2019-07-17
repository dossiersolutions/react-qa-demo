import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'
import FormActionsComponent from "./FormActionsComponent";
import FieldGroupComponent from "./FieldGroupComponent";
import { GET_FORM_CONFIG_JSON } from "../redux/actionTypes";

class FormComponent extends AbstractComponent {

    formConfig;

    render() {
        const formId = this.props.formConfig.id;
        return (
            <div className={ this.props.global.byIds[formId].collapsed ? "collapse" : "bg-light p-1 border border-light mb-5" } >
            <FormActionsComponent formConfig={ this.props.formConfig }/>
            <form>
                {
                    Object.values(this.props.global.byIds[this.props.formConfig.id].fieldsets).map(function(fieldGroupConfig) {
                        return <FieldGroupComponent key={`fieldset-${fieldGroupConfig.id}`}
                                    fieldGroupConfig={{
                                        ...fieldGroupConfig,
                                        formId: formId
                                }}/>;
                }) }
                <div className="form-group">
                    <button type="button" className="btn btn-sm btn-success pull-right">
                        <span role="img" aria-label="save">&#x231A;</span> Fill data
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-light pull-right"
                        onClick={ this.props.getFormConfigJson.bind(this, this.props.formConfig.id) }
                    >
                        <span role="img" aria-label="preview">&#x231B;</span> Get JSON
                    </button>
                    <br/>
                </div>
            </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    getFormConfigJson: (formId) => dispatch({
        type: GET_FORM_CONFIG_JSON,
        payload: {
            formId: formId,
        }
    })
});

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)

