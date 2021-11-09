import React, { Component } from "react";
class NavBar extends Component {
  state = {
    homeSelected: true,
    addSelected: true,
    editSelected: true,
    deleteSelected: true,
    searchSelected: true,
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Areeba Client Control System
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <button
                    onClick={this.props.onHomeClick}
                    className="btn nav-link "
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.props.onAddClick}
                    className="btn nav-link "
                  >
                    Add Client
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.props.onEditClick}
                    className="btn nav-link "
                  >
                    Edit Client
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.props.onDeleteClick}
                    className="btn nav-link "
                  >
                    Delete Client
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.props.onSearchClick}
                    className="btn nav-link "
                  >
                    Search Client
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
