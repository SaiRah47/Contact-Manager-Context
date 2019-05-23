import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  DeleteOnClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="card-title">
                <i className="fas fa-user" /> &nbsp;
                {name}&nbsp;
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  style={{
                    cursor: "pointer"
                  }}
                  className="fas fa-sort-down"
                />
                <i
                  onClick={this.DeleteOnClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  className="fas fa-times"
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem",
                      color: "black"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item card-text">
                    <b>Email: {email}</b>
                  </li>
                  <li className="list-group-item card-text">
                    <b>Phone: {phone} </b>
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
