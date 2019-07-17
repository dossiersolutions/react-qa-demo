import React from 'react';
import Select from 'react-select';
import { CONSTANTS } from "../../constants";
import { Map } from "immutable";
import useWindowWidth from "../../hooks/ResizeHook";


/**
 * Functional component
 * @param toggleButton
 * @param formId
 * @param fieldGroupId
 * @param fieldConfig
 * @param saveHandler
 * @returns {*}
 * @constructor
 */
const FieldConfigWindow = ({toggleButton, formId, fieldGroupId, fieldConfig, saveHandler }) => {

    const width = useWindowWidth();

    const [isShown, setIsShown] = React.useState(false);
    const [fieldType, setFieldType] = React.useState(
        CONSTANTS.FIELD_TYPE_OPTIONS.find(function(typeOption) {
            return typeOption.value === fieldConfig.get('type');
        })
    );

    const [fieldConfigState, setFieldConfigState] = React.useState(Map(fieldConfig));

    const hide = () => setIsShown(false);

    const show = () => setIsShown(true);

    const saveClickHandler = function(formId, fieldGroupId) {
        saveHandler(formId, fieldGroupId, fieldConfigState);
        hide();
    };

    const changeFieldType = (selectedType) => {
        setFieldConfigState(Map({ ...fieldConfigState.toJS(), type: selectedType.value }));
        setFieldType(selectedType);
    };

    const handleInputChange = function(event) {
        setFieldConfigState(Map({ ...fieldConfigState.toJS(), [event.target.id]: event.target.value } ));
    };

    const content = (hide) => (
        <div className="modal-backdrop show">
            <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Field</h5>
                            <button type="button" className="close" aria-label="Close"  onClick={ hide }>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Select
                                className="form-group"
                                id="field-type"
                                value={ fieldType }
                                onChange={ changeFieldType }
                                options={ CONSTANTS.FIELD_TYPE_OPTIONS }/>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="label"
                                    placeholder="Label"
                                    onChange={ handleInputChange }
                                    value={ fieldConfigState.get('label') }
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text" className="form-control"
                                    id="placeholder" placeholder="Placeholder"
                                    onChange={ handleInputChange }
                                    value={ fieldConfigState.get('placeholder') }
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text" className="form-control"
                                    id="description" placeholder="Description"
                                    onChange={ handleInputChange }
                                    value= { fieldConfigState.get('description') }
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            { width > 800
                                ?
                                <button type="button" className="btn btn-secondary" onClick={ hide }>Close</button>
                                : null
                            }
                            <button type="button" className="btn btn-primary" onClick={ () => saveClickHandler(formId, fieldGroupId) }>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
        { toggleButton(show) }
        { isShown && content(hide) }
        </React.Fragment>);

};

export default FieldConfigWindow;