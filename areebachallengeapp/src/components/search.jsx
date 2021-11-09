import React, { Component } from "react";
import axios from "axios";
import MaterialTable from "material-table";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("client/")
      .then((response) => {
        this.setState({ posts: response.data });

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const columns = [
      { title: "ID", field: "id" },
      { title: "fullName", field: "name" },
      { title: "Phone", field: "phoneNumber" },
      { title: "Address", field: "address" },
    ];

    const { posts } = this.state;
    return (
      <React.Fragment>
        <main className="container">
          <div className="bg-light p-5 rounded">
            <h1>Areeba Client Control System</h1>
            <p className="lead">List of Clients Viewed</p>
            <div>
              {
                <MaterialTable
                  title="Client Data"
                  data={posts}
                  columns={columns}
                  options={{
                    paging: false,
                    filtering: true,
                  }}
                />
              }
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
