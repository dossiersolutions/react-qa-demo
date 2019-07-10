import React from 'react';
import AbstractComponent from "./AbstractComponent";
import {connect} from "react-redux";
import {ADD_NEW_FIELD_GROUP} from "../redux/actionTypes";

class FormActionsComponent extends AbstractComponent {

    render() {
        return(
            <div className="form-group border-bottom border-white m-1 clearfix">
                <button type="button" className="btn btn-sm btn-info pull-right" onClick={ this.props.addNewFieldGroup.bind(this, this.props.formConfig.id) }>Add fieldset</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addNewFieldGroup: (formId) => dispatch({
        type: ADD_NEW_FIELD_GROUP,
        payload: {
            formId: formId,
            fieldGroupConfig: {
                title: 'New field group added',
                showTitle: true,
                showNewFieldWindow: false,
                fields: []
            }
        }
    })
});

export default connect(state => state, mapDispatchToProps)(FormActionsComponent)