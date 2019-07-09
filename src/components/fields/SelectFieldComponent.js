import React from 'react';
import AbstractFieldComponent from "./AbstractFieldComponent";

export default class SelectFieldComponent extends AbstractFieldComponent {

    fieldConfig;

    render() {
        return (
            <React.Fragment>
                {this.props.fieldConfig.label
                    ? <label
                        htmlFor="exampleInput1">{ this.props.fieldConfig.label }</label>
                    : null
                }
                <select className="form-control" id="sel1">
                    <option>Not good</option>
                    <option>Average</option>
                    <option>Above average</option>
                    <option>Excellent</option>
                </select>
                { this.props.fieldConfig.description
                    ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ this.props.fieldConfig.description }</small>
                    : null
                }
            </React.Fragment>
        );
    }
}