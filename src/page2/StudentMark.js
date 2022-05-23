import {PureComponent} from "react";

export default class StudentMark extends PureComponent {
  state = {
    mark: 0
  };
  componentDidMount() {
    this.setState({mark: this.props.mark});
  };
  inputChange = (e) => {
    this.setState({mark: e.target.value});
  }
  render() {
    const { id, name, clicker} = this.props;
    return (
      <p>
        {name}:
        <input
          type="number" min="0" max="5"
          value={this.state.mark}
          onChange={this.inputChange}
        />
        <button onClick={()=>clicker(id,this.state.mark)}>O</button>
      </p>
    );
  }
}
