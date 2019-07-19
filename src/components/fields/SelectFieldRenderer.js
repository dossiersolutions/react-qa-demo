import React from 'react';
import Select from "react-select";
import {CONSTANTS} from "../../constants";

export default ({ id, label, placeholder, description }) => {

    const [optionValue, setOptionValue] = React.useState(
        CONSTANTS.FIELD_TYPE_OPTIONS.first()
    );

    const changeOption = (selectedOption) => {
        setOptionValue(selectedOption);
    };

    return (
        <React.Fragment>
            { label
                ? <label
                    htmlFor="exampleInput1">{ label }</label>
                : null
            }
            <Select
                className="form-group"
                id={`field-${id}`}
                value={ optionValue }
                onChange={ changeOption }
                options={ CONSTANTS.FIELD_TYPE_OPTIONS }
            />
            { description
                ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ description }</small>
                : null
            }
        </React.Fragment>
    );
    
}