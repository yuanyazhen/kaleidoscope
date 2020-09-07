import React, { Component, PureComponent } from "react";

class PureChild extends PureComponent {
  render() {
    console.log("Rendering Pure Child");
    return <span>
        {`I'm Pure Child Component ${new Date().valueOf()}`}
        {this.props.data && this.props.data.a}
    </span>;
  }
}

class ComponentChild extends Component {
  render() {
    console.log("Rendering Normal Child");
    return <span>{`I'm Child Component - ${new Date().valueOf()}`}</span>;
  }
}

function FunctionalChild(props) {
  console.log("Rendering Functional Child");
  return (
    <span>
        {`I'm Functional Child Component - ${new Date().valueOf()}`}
        -
        {props.data && props.data.a}
    </span>
  );
}

export { FunctionalChild, PureChild, ComponentChild };