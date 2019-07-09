import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'
import FormListItemComponent from "./FormListItemComponent";

class FormListComponent extends AbstractComponent {

    render() {
        return (
            <React.Fragment>
            <div className="list-group">
                { this.props.forms.map(function(formConfig) {
                    return <FormListItemComponent key={`form-${formConfig.id}`} formConfig={ formConfig }/>;
                }) }
            </div>
            </React.Fragment>
        );
    }

}

function mapStateToProps(state) {
    return {
        forms: state.global.forms
    };
}

export default connect(mapStateToProps)(FormListComponent)

