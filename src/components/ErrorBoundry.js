import React from 'react';

class ErrorBoundry extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            hasErorr: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasErorr: true })
    }

    render(){
        if(this.state.hasErorr){
            return(
                <h1>Error occured!</h1>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry