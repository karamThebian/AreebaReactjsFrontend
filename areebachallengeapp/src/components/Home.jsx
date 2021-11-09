import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="bg-light p-5 rounded">
            <h1>Areeba Client Control System</h1>
            <p className="lead">
              This webpage allows us to modify the clients in our Postgre
              Database, Please select a function from the navigation bar.
            </p>
            <button
              onClick={this.props.onViewAllClick}
              className="btn btn-lg btn-primary"
            >
              View all Clients &raquo;
            </button>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
