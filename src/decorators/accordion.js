import React from 'react'

export default (Component) => class AccordionWrappedComponent extends React.Component {

    state = {
        openItemId: null
    };

    render() {
        return <Component {...this.props} {...this.state} openItemHandler = {this.openItemHandler}/>
    }

    openItemHandler = id => {
        let newOpenItemId = null;
        if (this.state.openItemId !== id) {
            newOpenItemId = id;
        }

        this.setState({
            openItemId: newOpenItemId
        });
    };
}
