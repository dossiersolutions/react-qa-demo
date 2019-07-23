import React from 'react';
import { connect } from "react-redux";
import FieldConfigWindow from "./FieldConfigWindow";
import { Map } from "immutable";
import { deleteField, editField } from "../../redux/actions/fieldActions";
import PropTypes from "prop-types";
import { bindActionCreators} from "redux";

class FieldActionsComponent extends React.Component {

    render() {
        const {
            formId,
            fieldGroupId,
            fieldConfig,
            editField,
            deleteField
        } = this.props;
        return(
            <React.Fragment>
                <FieldConfigWindow
                    toggleButton = { show =>
                        <button
                            type="button"
                            onClick={ show }
                            className="btn btn-sm btn-outline-info float-right col"
                        >
                            <span role="img" aria-label="edit">&#x270E;</span>
                        </button> }
                    formId = { formId }
                    fieldGroupId = { fieldGroupId }
                    fieldConfig = { Map(fieldConfig) }
                    saveHandler={ editField }
                />
                <button type="button" className="btn btn-sm btn-outline-danger float-right col"
                    onClick={ deleteField.bind(this, formId, fieldGroupId, fieldConfig.id) }
                >
                    <span role="img" aria-label="delete">&times;</span></button>
            </React.Fragment>
        );
    }

}

FieldActionsComponent.propTypes = {
    formId: PropTypes.number,
    fieldGroupId: PropTypes.number,
    fieldConfig: PropTypes.object,
    editField: PropTypes.func,
    deleteField: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteField, editField
        }, dispatch
    );
};

export default connect(null, mapDispatchToProps)(FieldActionsComponent)