import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testActionCreators'
import { Button } from 'semantic-ui-react'

// mapStateToProps function
 const mapState = (state) => ({
     //Note: "test" is the field name for the testReducer
     //in the Root Reducer
     data: state.test.data
 })

 // mapDispatchToProp action creators
 // (each will return a type and a payload)
const actions = {
    incrementCounter,
    decrementCounter 
}

 class TestComponent extends Component {
    render() {
        //The connect HOC will have used mapState(...)
        //and actions to make the data and the actions accessible
        //via the component's props
        const {data, incrementCounter, decrementCounter} = this.props;

        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment' />
                <Button onClick={decrementCounter} negative content='Decrement' />
            </div>
        )
    }
}

//The connect(..) is a HOC which takes a mapStateToProps function
//(which is mapState() in this case)
export default connect(mapState, actions)(TestComponent);