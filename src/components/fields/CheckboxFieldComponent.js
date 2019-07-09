import React from 'react';
import AbstractFieldComponent from "./AbstractFieldComponent";
import FieldActionsComponent from "./FieldActionsComponent";

export default class InputTextFieldComponent extends AbstractFieldComponent {

    fieldConfig;

    render() {
        return (
            <React.Fragment>
                <input type="checkbox" className="form-check-input" id="exampleInput1" placeholder={ this.props.fieldConfig.placeholder }/>
                {this.props.fieldConfig.label
                    ? <label
                        htmlFor="exampleInput1">{ this.props.fieldConfig.label }</label>
                    : null
                }
                { this.props.fieldConfig.description
                    ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ this.props.fieldConfig.description }</small>
                    : null
                }
            </React.Fragment>
        );
    }
}