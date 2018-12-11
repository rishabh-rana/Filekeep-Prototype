import React, { Component } from "react";

class Dash extends Component {
  componentDidMount() {
    if (
      this.props.id &&
      this.props.id !== "null" &&
      this.props.projects === null
    ) {
      this.props.syncprojects(this.props.id);
    }
  }
  render() {
    if (this.props.projects === null || this.props.projects === "null") {
      return <span>Loading...</span>;
    }

    var {
      signout,
      createnewproject,
      projects,
      chooseproject,
      uid,
      shareproject
    } = this.props;
    let signoutbutton = <button onClick={signout}>Signout</button>;
    return (
      <div>
        <h1>Dashboard {signoutbutton}</h1>
        <div
          style={{
            background: "salmon",
            display: "inline-block",
            padding: "10px",
            width: "250px",
            margin: "20px"
          }}
        >
          <span>Add new project:</span>
          <input
            onKeyPress={e => createnewproject(uid, e)}
            type="text"
            style={{ width: "90%", display: "block" }}
          />
          <hr />
          <span>Enter a ShareId to access a shared project:</span>
          <input
            onKeyPress={e => shareproject(uid, e)}
            type="text"
            style={{ width: "90%", display: "block" }}
          />
        </div>

        {projects &&
          Object.keys(projects).map(function(id) {
            return (
              <div
                key={id}
                style={{
                  background: "dodgerblue",
                  display: "inline-block",
                  padding: "10px",
                  width: "250px",
                  margin: "20px"
                }}
              >
                <button onClick={() => chooseproject(id)}>
                  {projects[id]}
                </button>
                <span>Share this id with teammates: {id}</span>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Dash;
