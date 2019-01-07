import React, { Component } from 'react'

class AddGoods extends Component {
  constructor(){
    super();

    this.state = {
      code: "",
      name: "",
      price: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newGoods = {
      code: this.state.code,
      name: this.state.name,
      price: this.state.price
    };
    console.log(newGoods);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input 
            type = "text"
            className = "form-control form-control-lg"
            placeholder = "Code goods"
            name = "code"
            value = {this.state.code}
            onChange = {this.onChange}
          />
          <input 
            type = "text"
            className = "form-control form-control-lg"
            placeholder = "Name goods"
            name = "name"
            value = {this.state.name}
            onChange = {this.onChange}
          />
          <input 
            type = "text"
            className = "form-control form-control-lg"
            placeholder = "Price goods"
            name = "price"
            value = {this.state.price}
            onChange = {this.onChange}
          />

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default AddGoods;