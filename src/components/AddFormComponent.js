import React from 'react';
import { connect } from 'react-redux';
import { addNewForm } from "../redux/actions/FormActions";

class AddFormComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
            <button type="button" className="btn btn-info"
                    onClick={ this.props.addNewForm.bind(this) }>Craft new form</button>
            <br/>
            <br/>
            </React.Fragment>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    addNewForm: () => dispatch(addNewForm())
});

export default connect(null, mapDispatchToProps)(AddFormComponent)

