import { h, Component } from 'preact';

export default class BigString extends Component {
  render() {
    return (
      <ul class="wrapper">
        <li>
          <span>Offload Text analysis to a background thread | </span>
          <button type="button" name="button">Find number of words</button>
          <ul>
            <li>...</li>
          </ul>
        </li>
        <li>
          <p>Run examples to see sample data...</p>
          <ol id="big-string-window" class=''></ol>
        </li>
      </ul>
    )
  }
}
