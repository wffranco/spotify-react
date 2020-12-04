import logo from '../logo.svg';
import './Home.scss';

export default function Home() {
  return (
    <main class="Home flex-fill d-flex flex-column" fluid>
      <div class="flex-fill"></div>
      <div class="text-center">
        <h1>Demo de spotify.</h1>
        <img src={logo} className="Home-logo" alt="logo" />
        <h3>react.js + redux + bootstrap</h3>
        <h6>
          <span className="mr-2">Source code:</span>
          <a href="https://github.com/wffranco/spotify-react">https://github.com/wffranco/spotify-react</a>
        </h6>
      </div>
      <div class="flex-fill"></div>
    </main>
  );
}
