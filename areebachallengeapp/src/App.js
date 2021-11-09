import NavBar from "./components/navbar";
import Home from "./components/Home";
import Add from "./components/add";
import Search from "./components/search";
import Edit from "./components/edit";
import Delete from "./components/delete";
import View from "./components/view";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    homeSelected: true,
    addSelected: false,
    editSelected: false,
    deleteSelected: false,
    searchSelected: false,
  };
  handleHomeClick = () => {
    const homeSelected = true;
    this.setState({
      homeSelected: homeSelected,
      addSelected: false,
      editSelected: false,
      deleteSelected: false,
      searchSelected: false,
      viewAllSelected: false,
    });
  };
  handleAddClick = () => {
    const addSelected = true;
    this.setState({
      addSelected: addSelected,
      homeSelected: false,
      editSelected: false,
      deleteSelected: false,
      searchSelected: false,
      viewAllSelected: false,
    });
  };

  handleEditClick = () => {
    const editSelected = true;
    this.setState({
      editSelected: editSelected,
      homeSelected: false,
      addSelected: false,
      deleteSelected: false,
      searchSelected: false,
      viewAllSelected: false,
    });
  };
  handleDeleteClick = () => {
    const deleteSelected = true;
    this.setState({
      deleteSelected: deleteSelected,
      homeSelected: false,
      addSelected: false,
      editSelected: false,
      searchSelected: false,
      viewAllSelected: false,
    });
  };
  handleSearchClick = () => {
    const searchSelected = true;
    this.setState({
      searchSelected: searchSelected,
      homeSelected: false,
      addSelected: false,
      editSelected: false,
      deleteSelected: false,
      viewAllSelected: false,
    });
  };
  handleViewAllClick = () => {
    const viewAllSelected = true;
    this.setState({
      searchSelected: false,
      homeSelected: false,
      addSelected: false,
      editSelected: false,
      deleteSelected: false,
      viewAllSelected: viewAllSelected,
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          onHomeClick={this.handleHomeClick}
          onAddClick={this.handleAddClick}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.handleDeleteClick}
          onSearchClick={this.handleSearchClick}
        />
        <main className="container">
          {this.state.homeSelected ? (
            <Home onViewAllClick={this.handleViewAllClick} />
          ) : null}
          {this.state.addSelected ? <Add /> : null}
          {this.state.editSelected ? <Edit /> : null}
          {this.state.deleteSelected ? <Delete /> : null}
          {this.state.searchSelected ? <Search /> : null}
          {this.state.viewAllSelected ? <View /> : null}
        </main>
      </React.Fragment>
    );
  }
}
export default App;
