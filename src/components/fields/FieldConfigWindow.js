import React from 'react';
import Select from 'react-select';


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
const FieldConfigWindow = ({toggleButton, formId, fieldGroupId, fieldConfig, saveHandler}) => {

    const [isShown, setIsShown] = React.useState(false);
    const [fieldType, setFieldType] = React.useState(fieldConfig.type);
    const [fieldConfigState, setFieldConfigState] = React.useState(fieldConfig);

    const hide = () => {
        setIsShown(false);
    };

    const show = () => setIsShown(true);

    const saveClickHandler = function(formId, fieldGroupId) {
        saveHandler(formId, fieldGroupId, fieldConfigState);
        hide();
    };

    const changeFieldType = (selectedType) => {
        setFieldType(selectedType);
    };

    const handleInputChange = function(event) {
        setFieldConfigState({ ...fieldConfigState, [event.target.id]: event.target.value } );
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
                                options={[
                                    {label: "String", value: "string"},
                                    {label: "Checkbox", value: "checkbox"},
                                    {label: "Select", value: "select"}
                                ]}/>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="label"
                                    placeholder="Label"
                                    onChange={handleInputChange }
                                    value={ fieldConfigState.label }
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text" className="form-control"
                                    id="placeholder" placeholder="Placeholder"
                                    onChange={ handleInputChange }
                                    value={ fieldConfigState.placeholder }
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text" className="form-control"
                                    id="description" placeholder="Description"
                                    onChange={ handleInputChange }
                                    value= { fieldConfigState.description }
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={ () => hide }>Close</button>
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