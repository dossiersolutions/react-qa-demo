import React from 'react';

export default ({ fieldConfig }) => {

    return (
        <React.Fragment>
            { fieldConfig.label
                ? <label
                    htmlFor="exampleInput1">{ fieldConfig.label }</label>
                : null
            }
            <select className="form-control" id="sel1">
                // TODO from state
                <option>Not good</option>
                <option>Average</option>
                <option>Above average</option>
                <option>Excellent</option>
            </select>
            { fieldConfig.description
                ? <small id="exampleInput1" className="font-italic text-secondary pl-4">{ fieldConfig.description }</small>
                : null
            }
        </React.Fragment>
    );
    
}