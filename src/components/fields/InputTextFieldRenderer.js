import React from 'react';

export default ({ id, label, placeholder, description }) => {

    return (
        <React.Fragment>
            { label
                ? <label
                    htmlFor={`field-${id}`}>{ label }</label>
                : null
            }
            <input
                type="text"
                className="form-control"
                id={`field-${id}`}
                placeholder={ placeholder }
            />
            { description
                ? <small
                    id={`field-description-${id}`}
                    className="font-italic text-secondary pl-4">
                        { description }
                    </small>
                : null
            }
        </React.Fragment>
    );

}