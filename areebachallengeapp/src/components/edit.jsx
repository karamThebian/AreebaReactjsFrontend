import React, { Component } from "react";
import axios from "axios";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      address: "",
      phoneNumber: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var putUrl = "client/";

    putUrl = putUrl + this.state.id + "?";
    if (this.state.name.length > 0) {
      putUrl = putUrl + "name=" + this.state.name;
    }
    if (this.state.address.length > 0) {
      putUrl = putUrl + "&address=" + this.state.address;
    }
    if (this.state.phoneNumber.length) {
      putUrl = putUrl + "&phoneNumber=" + this.state.phoneNumber;
    }
    console.log(putUrl);

    axios
      .put(putUrl)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ id: "", name: "", address: "", phoneNumber: "" });
  };
  render() {
    const { id, name, address, phoneNumber } = this.state;
    return (
      <React.Fragment>
        <main className="container">
          <div className="bg-light p-5 rounded">
            <h1>Areeba Client Control System</h1>
            <p className="lead">This is the Edit component</p>
            <div>
              <form onSubmit={this.submitHandler}>
                <div className="col-sm-6">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    id="id"
                    placeholder="ID"
                    required
                    value={id}
                    onChange={this.changeHandler}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={this.changeHandler}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    value={address}
                    onChange={this.changeHandler}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="tell"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{6}"
                      value={phoneNumber}
                      onChange={this.changeHandler}
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  style={{ marginTop: `30px` }}
                  onClick={this.props.onEditClientClick}
                  className="btn  btn-lg btn-primary"
                >
                  Edit Client &raquo;
                </button>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Edit;
