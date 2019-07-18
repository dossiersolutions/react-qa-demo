import React from 'react';
import AbstractComponent from "./AbstractComponent";
import { connect } from "react-redux";
import { Map } from "immutable";
import FillFormWindow from "./FillFormWindow";
import { addNewFieldGroup } from "../redux/actions";

class FormActionsComponent extends AbstractComponent {

    render() {
        return(<React.Fragment>
                <div className="form-group pb-3 border-bottom border-dark m-1 clearfix bg-light">
                    <button
                        type="button" className="btn btn-sm btn-info pull-right"
                        onClick={ this.props.addNewFieldGroup.bind(this, this.props.formConfig.id) }>
                            Add fieldset
                    </button>
                    <FillFormWindow
                        toggleButton = { show =>
                            <button
                                type="button"
                                onClick={ show }
                                className="btn btn-sm btn-success pull-right"
                            >
                                <span role="img" aria-label="save">&euro;</span> Fill data
                            </button> }
                        formId = { this.props.formId }
                        fieldGroupId = { this.props.fieldGroupId }
                        fieldConfig = { Map(this.props.fieldConfig) }
                        saveHandler={ this.props.editField }
                    />
                    <button
                        type="button"
                        className="btn btn-sm btn-light pull-right"
                        onClick={ this.props.getFormConfigJson.bind(this, this.props.formConfig.id) }
                    >
                        <span role="img" aria-label="preview">&#x231B;</span> JSON config
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-light pull-right"
                        onClick={ this.props.getFormConfigJson.bind(this, this.props.formConfig.id) }
                    >
                        <span role="img" aria-label="preview">&#x1F4BE;</span> JSON data
                    </button>
                </div>
        </React.Fragment>);
    }
}

const mapDispatchToProps = dispatch => ({
    addNewFieldGroup: (formId) => dispatch(addNewFieldGroup(formId))
});

export default connect(null, mapDispatchToProps)(FormActionsComponent)