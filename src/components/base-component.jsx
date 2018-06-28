import React from 'react';

export default class baseComponent extends React.Component {
    constructor(props) {
        super(props);

        let app = window.app = window.app || {};

        if (!app.componentByID) {
            app.componentByID = {};
        }

        if (!app.components) {
            app.components = {};
        }

        if (props.id) {
            app.componentByID[props.id] = this;
        }

        let componentName = this.constructor.name;

        if (app.components[componentName] === undefined) {
            app.components[componentName] = [];
        }

        app.components[componentName].push(this);
    }

    emit(fn, data) {
        if (this.props[fn] && typeof fn === 'string') {
            this.props[fn](data);
        }
    }
}
