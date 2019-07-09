import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from './AbstractComponent'

class FormComponent extends AbstractComponent {

    formConfig;

    // proveravamo global state... a ne props ?
    render() {
        return (
            <div className={ this.props.global.byIds[this.props.formConfig.id].collapsed ? "collapse" : "bg-light p-1 border border-light" } >
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.
                        </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="form-group">
                    <button type="button" className="btn btn-sm btn-success pull-right">
                        &#x231A; Save
                    </button>
                    <button type="button" className="btn btn-sm btn-light pull-right">
                        &#x1F519; Cancel
                    </button>
                    <button type="button" className="btn btn-sm btn-light pull-right">
                        &#x231B; Preview
                    </button>
                    <br/>
                </div>
            </form>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(FormComponent)

