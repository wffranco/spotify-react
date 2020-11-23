import logo from '../logo.svg';
import './Home.scss';

export default function Home() {
  return (
    <header className="Home-header pt-5">
      <p> Demo de spotify. </p>
      <img src={logo} className="Home-logo" alt="logo" />
      <p> react.js + redux + bootstrap </p>
  </header>
  );
}
