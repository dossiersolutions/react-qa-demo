import React from "react";

export default class AbstractComponent extends React.Component {

    render() {
        return (
            <div>
                Don't forget to override render method in your component.
            </div>
        );
    }

}