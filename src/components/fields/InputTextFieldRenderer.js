import React from 'react';

export default ({ fieldConfig }) => {

    return (
        <React.Fragment>
            { fieldConfig.label
                ? <label
                    htmlFor="exampleInput1">{ fieldConfig.label }</label>
                : null
            }
            <input type="text" className="form-control" id="exampleInput1" placeholder={ fieldConfig.placeholder }/>
            { fieldConfig.description
                ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ fieldConfig.description }</small>
                : null
            }
        </React.Fragment>
    );

}