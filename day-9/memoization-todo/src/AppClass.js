import React from "react";
import { connect } from "react-redux";

import Button from "./components/Button";

class AppClass extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>{this.props.counter}</h1>
        <Button text="Azalt" onClick={this.props.azalt} />
        <Button text="Arttır" onClick={this.props.arttir} />
      </div>
    );
  }
}

// state -> redux state
const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

/**
 *
 * @param {*} dispatch
 * params - action (object)
 */
const mapDispatchToProps = (dispatch) => {
  return {
    arttir: () => dispatch({ type: "arttır" }),
    azalt: () => dispatch({ type: "azalt" }),
  };
};

/**
 * ()=> <App counter={state.value} arttır={()=>{}} azalt={()=>{}} />
 * {
 *  counter: 10,
 *  arttır: ()=>{},
 *  azalt: ()=>{}
 * }
 */
export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
