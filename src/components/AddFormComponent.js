import React from 'react';
import { connect } from 'react-redux';
import { addNewForm } from "../redux/actions/formActions";
import PropTypes from 'prop-types';

class AddFormComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
            <button type="button" className="btn btn-info"
                    onClick={ this.props.addNewForm }>Craft new form</button>
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

