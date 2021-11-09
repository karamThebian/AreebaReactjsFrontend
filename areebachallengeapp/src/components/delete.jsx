import React, { Component } from "react";
import axios from "axios";
class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      responseS: "",
      initiated: false,
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var putUrl = "client/";

    putUrl = putUrl + this.state.id;

    axios
      .delete(putUrl)
      .then((response) => {
        console.log(response.status);

        this.setState({
          id: this.state.id,
          responseS: response.status,
          initiated: true,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          id: this.state.id,
          responseS: error.response.status,
          initiated: true,
        });
        console.log(this.state);
      });
  };
  render() {
    const { id } = this.state;
    var booleanSuccess = false;
    if (this.state.responseS === 200) {
      booleanSuccess = true;
    } else if (this.state.responseS === 500) {
      booleanSuccess = false;
    }
    return (
      <React.Fragment>
        <main className="container">
          <div className="bg-light p-5 rounded">
            <h1>Areeba Client Control System</h1>
            <p className="lead">This is the Delete component</p>
            <div>
              <form onSubmit={this.submitHandler}>
                <div className="col-sm-6">
                  <label htmlFor="id" className="form-label">
                    Enter Id of the Client you want to delete:
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

                <button
                  type="submit"
                  style={{ marginTop: `30px` }}
                  onClick={this.props.onDeleteClientClick}
                  className="btn  btn-lg btn-primary"
                >
                  Delete Client &raquo;
                </button>
              </form>
            </div>
            {this.state.initiated & booleanSuccess ? (
              <div style={{ marginTop: `30px` }}>
                <p>Client Deleted Successfully</p>
              </div>
            ) : null}
            {this.state.initiated & !booleanSuccess ? (
              <div style={{ marginTop: `30px` }}>
                <p>Client does not exist</p>
              </div>
            ) : null}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Delete;
