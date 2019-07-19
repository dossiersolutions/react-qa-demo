import React from 'react';

const FillFormWindow = ({toggleButton }) => {

    const [isShown, setIsShown] = React.useState(false);

    const hide = () => setIsShown(false);

    const show = () => setIsShown(true);

    const content = (hide) => (
        <div className="modal-backdrop show">
            <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Fill form</h5>
                            <button type="button" className="close" aria-label="Close"  onClick={ hide }>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Here we should render form fields....
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={ hide }>Save</button>
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

export default FillFormWindow;