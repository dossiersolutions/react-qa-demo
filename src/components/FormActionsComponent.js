import React from 'react';
import AbstractComponent from "./AbstractComponent";

export default class FormActionsComponent extends AbstractComponent {


    render() {
        return(
            <div className="form-group border-bottom border-white m-1 clearfix">
                <button type="button" className="btn btn-sm btn-info pull-right">Add fieldset</button>
            </div>
        );
    }
}