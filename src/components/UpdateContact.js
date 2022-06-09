import React from "react";
import { withRouter } from "./withRouter";
import { useLocation } from "react-router-dom";

class UpdateContact extends React.Component {
  // holds the component state
  state = {
    name: "",
    email: "",
  };
  
  update = (e) => {
    const contacts = this.props.contacts;

    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields must be filled out!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");

  };

  render() { 
    return (
      <div className="ui main">
        <h2>Update Contact Form</h2>
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button green" onClick={(e)=>this.update(e)}>Update Contact</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateContact);
