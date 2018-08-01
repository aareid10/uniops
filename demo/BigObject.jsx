import { h, Component } from 'preact';

(async () => {
  const genBigObj = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10000', true);
      xhr.onload = (e) => resolve(JSON.parse(xhr.response));
      xhr.onerror = () => resolve(undefined);
      xhr.send();
   });
})();

export default class BigObject extends Component {
  render() {
    return (
      <div class="wrapper">TEST4</div>
    )
  }
}
