import { h, Component } from 'preact';

export default class BigCanvas extends Component {
  render() {
    return (
        <div class="wrapper">
          <span>Offload Canvas/Pixel manipulation to a background thread | </span>
          <button type="button" name="button">Strip Blue channel</button>
          <ul>
            <li>...</li>
          </ul>
        </div>
    )
  }
}
