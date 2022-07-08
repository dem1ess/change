import './header.css'

function Header(props) {
  return (
      <div className="usdeur">
        <div>USD: {props.rates.USDT.toFixed(2)}</div>
        <div>EUR: {props.rates.EOS.toFixed(2)}</div>
     </div>
  );
}

export default Header