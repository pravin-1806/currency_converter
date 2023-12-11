import { useState } from 'react';
import './App.css';
import Inputbox from './Components/Inputbox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';
import { useEffect } from 'react';

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from); //it is a hook created by us to fetch a data of currency
  const options= Object.keys(currencyInfo);
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
    setAmount(0);
    // setAmount(convertedAmount);
    // setConvertedAmount(amount);
  }
  useEffect(()=>{
    convert();
  },[from,to,amount]);

  const clear=()=>{
    setFrom('usd');
    setTo('inr');
    setAmount(0);
    setConvertedAmount(0);
  }

  return (
    <div className='c'>
      <form className='cont' onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
        <Inputbox 
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectedCurrency={from}
        />
        <button onClick={swap} className='btn1' >Swap</button>
        <Inputbox 
          label='To'
          amount={convertedAmount}
          currencyOptions={options}
          amountDisabled={true}
          onCurrencyChange={(currency)=>setTo(currency)}
          selectedCurrency={to}
          className='second'
        />
        <button
          type='submit'
          className='btn2'
        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

        <div className='hsamp'>
          <button className='samp' onClick={clear}>Clear</button>
        </div>
        </form>
    </div>
  );
}

export default App;
