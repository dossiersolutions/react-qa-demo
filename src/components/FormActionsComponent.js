import React from 'react';
import { connect } from "react-redux";
import { Map } from "immutable";
import FillFormWindow from "./FillFormWindow";
import { addNewFieldGroup } from "../redux/actions";
import PropTypes from "prop-types";

class FormActionsComponent extends React.Component {

    render() {
        const {
            addNewFieldGroup,
            formConfig: {
                id: formId
            }

        } = this.props;
        return(<React.Fragment>
                <div className="form-group pb-3 border-bottom border-dark m-1 clearfix bg-light">
                    <button
                        type="button" className="btn btn-sm btn-info pull-right"
                        onClick={ addNewFieldGroup.bind(this, formId) }>
                            Add fieldset
                    </button>
                    <FillFormWindow
                        toggleButton = { show =>
                            <button
                                type="button"
                                onClick={ show }
                                className="btn btn-sm btn-success pull-right"
                            >
                                <span role="img" aria-label="save">&#x1F4BE;</span> Fill data
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
                        <span role="img" aria-label="preview">&#x2193;</span> JSON config
                    </button>
                </div>
        </React.Fragment>);
    }
}

FormActionsComponent.propTypes = {
    formId: PropTypes.number
};

const mapDispatchToProps = dispatch => ({
    addNewFieldGroup: (formId) => dispatch(addNewFieldGroup(formId))
});

export default connect(null, mapDispatchToProps)(FormActionsComponent)