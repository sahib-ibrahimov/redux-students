import {PureComponent} from "react";
import connector from "../redux/connector";

class Adder extends PureComponent {
  state = {
    name: ""
  };
  inputChange = (e) => {
    this.setState({name: e.target.value});
  };
  clicker = () => {
    if(this.state.name === "") return;
    this.props.addStudent(this.state.name);
    this.setState({name: ""});
  };
  render() {
    return (
      <>
        <input
          onChange={this.inputChange}
          value={this.state.name}
        />
        <button onClick={this.clicker}>Add</button>
      </>
    );
  };
}

export default connector(Adder);
