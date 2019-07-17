import React from 'react';

export default ({ fieldConfig }) => {

    return (<React.Fragment>
        <input type="checkbox" className="form-check-input" id="exampleInput1" placeholder={ fieldConfig.placeholder }/>
        { fieldConfig.label
            ? <label
                htmlFor="exampleInput1">{ fieldConfig.label }</label>
            : null
        }
        { fieldConfig.description
            ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ fieldConfig.description }</small>
            : null
        }
    </React.Fragment>);

}