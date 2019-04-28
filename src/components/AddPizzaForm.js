import * as React from 'react'

export default class AddPizzaForm extends React.Component {

  handleChange = (event) => {
    const value = event.target.value
    // console.log('i am event',event)
    // console.log('i am event.target.value',event.target.value)
    // console.log('i am event.target.name',event.target.name)
    const name = event.target.name

    // console.log('i am this.setState', this.setState)

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log('i am this.state.name', this.state.name)
    console.log('i am this.state.description', this.state.description)
    console.log('i am this.state', this.state)

    if(this.state.name && this.state.description) {
      this.props.addPizza({
        name: this.state.name,
        description: this.state.description,
        ingredients: []
      })
    }
  }

  render() {
    return (<div>
      
      <h2>Add a pizza</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={this.handleChange} />
        </label>      
        <input type="submit" value="Submit"/>
      </form>
      </div>)
  }
}