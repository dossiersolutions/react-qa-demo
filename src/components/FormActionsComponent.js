import React from 'react';
import { connect } from "react-redux";
import FillFormWindow from "./FillFormWindow";
import { addNewFieldGroup } from "../redux/actions";
import PropTypes from "prop-types";

class FormActionsComponent extends React.Component {

    render() {
        const {
            addNewFieldGroup,
            getFormConfigJson,
            formConfig: {
                id: formId
            }

        } = this.props;
        return(<React.Fragment>
                <div className="form-group pb-3 border-bottom border-dark m-1 clearfix bg-light">
                    <button
                        type="button" className="btn btn-sm btn-info pull-right"
                        onClick={ addNewFieldGroup.bind(this, formId) }
                    >
                        <span role="img" aria-label="add-fieldset">&#x2795;</span> Add fieldset
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
                    />
                    <button
                        type="button"
                        className="btn btn-sm btn-light pull-right"
                        onClick={ getFormConfigJson.bind(this, formId) }
                    >
                        <span role="img" aria-label="preview">&#x2193;</span> JSON config
                    </button>
                </div>
        </React.Fragment>);
    }
}

FormActionsComponent.propTypes = {
    formId: PropTypes.number,
    addNewFieldGroup: PropTypes.func,
    getFormConfigJson: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    addNewFieldGroup: (formId) => dispatch(addNewFieldGroup(formId))
});

export default connect(null, mapDispatchToProps)(FormActionsComponent)