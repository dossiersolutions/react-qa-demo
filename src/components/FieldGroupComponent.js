import React from 'react';
import { connect } from "react-redux";
import FieldGroupRenderer from './FieldGroupRenderer';
import { deleteFieldGroup } from "../redux/actions";
import { addNewField } from "../redux/actions/fieldActions";
import PropTypes from 'prop-types';

/**
 * Fields collection - grouped in fieldset
 */
class FieldGroupComponent extends React.Component {

    render() {
        const {
            fieldGroupConfig: {
                formId,
                id: fieldGroupId
            },
            fieldGroupConfig,
            saveFieldConfig,
            deleteFieldGroup
        } = this.props;
        return(<FieldGroupRenderer
            formId={ formId }
            fieldGroupId={ fieldGroupId }
            fieldGroupConfig={ fieldGroupConfig }
            saveFieldConfig={ saveFieldConfig }
            deleteFieldGroup={ deleteFieldGroup }
        />);
    }
}

FieldGroupComponent.propTypes = {
    fieldGroupConfig: PropTypes.object,
    formId: PropTypes.number,
    fieldGroupId: PropTypes.number,
    saveFieldConfig: PropTypes.func,
    deleteFieldGroup: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    saveFieldConfig: (formId, fieldGroupId, fieldConfig) => dispatch(addNewField(formId, fieldGroupId, fieldConfig)),
    deleteFieldGroup: (formId, fieldGroupId) => dispatch(deleteFieldGroup(formId, fieldGroupId))
});

export default connect(null, mapDispatchToProps)(FieldGroupComponent)