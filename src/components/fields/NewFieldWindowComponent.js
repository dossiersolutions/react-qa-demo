import React from 'react';
import AbstractComponent from "../AbstractComponent";
import {connect} from "react-redux";
import {ADD_NEW_FIELD, HIDE_NEW_FIELD_WINDOW} from "../../redux/actionTypes";

class NewFieldWindowComponent extends AbstractComponent {

    render() {
        return (<div className="modal-backdrop show">
            <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New field</h5>
                            <button type="button" className="close" aria-label="Close"  onClick={ this.props.closeWindow.bind(this, this.props.formId, this.props.fieldGroupId) }>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={ this.props.closeWindow.bind(this, this.props.formId, this.props.fieldGroupId) }>Close</button>
                            <button type="button" className="btn btn-primary" onClick={ this.props.save.bind(this, this.props.formId, this.props.fieldGroupId) }>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

}

const mapDispatchToProps = dispatch => ({
    closeWindow: (formId, fieldGroupId) => dispatch({
        type: HIDE_NEW_FIELD_WINDOW,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId
        }
    }),

    save: (formId, fieldGroupId) => dispatch({
        type: ADD_NEW_FIELD,
        payload: {
            formId: formId,
            fieldGroupId: fieldGroupId,
            fieldConfig: {
                id: 'NewField',
                type: 'string',
                label: 'New field added',
                description: 'sub-text',
                placeholder: 'Default value for new field'
            }
        }
    })
});

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFieldWindowComponent);