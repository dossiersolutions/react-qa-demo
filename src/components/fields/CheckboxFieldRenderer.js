import React from 'react';

export default ({ id, label, placeholder, description }) => {

    return (<React.Fragment>
        <input
            type="checkbox"
            className="form-check-input"
            id={`field-${id}`}
            placeholder={ placeholder }
        />
        { label
            ? <label htmlFor={`field-${id}`}>
                { label }
              </label>
            : null
        }
        { description
            ? <small
                id={`field-description-${id}`}
                className="font-italic text-secondary pl-4">
                    { description }
              </small>
            : null
        }
    </React.Fragment>);

}