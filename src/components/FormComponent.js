import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'
import FormActionsComponent from "./FormActionsComponent";
import FieldGroupComponent from "./FieldGroupComponent";

class FormComponent extends AbstractComponent {

    formConfig;

    // proveravamo global state... a ne props ?
    render() {
        return (
            <div className={ this.props.global.byIds[this.props.formConfig.id].collapsed ? "collapse" : "bg-light p-1 border border-light mb-5" } >
            <FormActionsComponent/>
            <form>
                { this.props.global.byIds[this.props.formConfig.id].fieldsets.map(function(fieldGroupConfig) {
                    return <FieldGroupComponent key={`fieldset-${fieldGroupConfig.id}`} fieldGroupConfig={ fieldGroupConfig }/>;
                }) }
                <div className="form-group">
                    <button type="button" className="btn btn-sm btn-success pull-right">
                        &#x231A; Save
                    </button>
                    <button type="button" className="btn btn-sm btn-light pull-right">
                        &#x1F519; Cancel
                    </button>
                    <button type="button" className="btn btn-sm btn-light pull-right">
                        &#x231B; Preview
                    </button>
                    <br/>
                </div>
            </form>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(FormComponent)

