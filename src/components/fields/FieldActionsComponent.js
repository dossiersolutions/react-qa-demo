import React from 'react';
import AbstractComponent from "../AbstractComponent";

export default class FieldActionsComponent extends AbstractComponent {

    render() {
        return(
            <React.Fragment>
                <button type="button" className="btn btn-sm btn-outline-info float-right col">Edit</button><br/>
                <button type="button" className="btn btn-sm btn-outline-danger float-right col">Delete</button>
            </React.Fragment>
        );
    }

}