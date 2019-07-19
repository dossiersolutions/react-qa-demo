import React from 'react';
import { connect } from 'react-redux';
import { addNewForm } from "../redux/actions/formActions";
import PropTypes from 'prop-types';

class AddFormComponent extends React.Component {

    render() {
        const {
            addNewForm
        } = this.props;
        return (
            <React.Fragment>
            <button
                type="button"
                className="btn btn-info"
                onClick={ addNewForm }
            >
                <span role="img" aria-label="craft-new-form">&#x2795;</span> Craft new form
            </button>
            <br/>
            <br/>
            </React.Fragment>
        );
    }

}

AddFormComponent.propTypes = {
    addNewForm: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    addNewForm: () => dispatch(addNewForm())
});

export default connect(null, mapDispatchToProps)(AddFormComponent)

