import * as React from 'react'
import AddPizzaForm from './AddPizzaForm'
import {connect} from 'react-redux'

class AddPizzaFormContainer extends React.Component {
    addPizza = (pizza) => {
      this.props.dispatch({
        type: 'ADD_PIZZA',
        payload: {
          id: Math.ceil(Math.random() * 10000),
          ...pizza
        }
      })
    }

    render() {
      return <AddPizzaForm addPizza={this.addPizza} />
    }
}

export default connect() (AddPizzaFormContainer)