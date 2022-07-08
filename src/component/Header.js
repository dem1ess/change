import './header.css'

function Header({rates}) {
  return (
      <div className="usdeur">
      <div className='USD'>USD: {rates.USDT.toFixed(2)}</div>
      
      <div className='EUR'>EUR: {rates.EOS.toFixed(2)}</div>
     </div>
  );
}

export default Header