import { useId } from 'react';
import React from 'react'
import './InputStyle.css';

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency="usd",
  amountDisabled=false,
  currencyDisabled=false,
  className=""
}) {
  const id=useId();
  return (
    <div className={` box ${className}`}>
      <div className='box2'>
        <label htmlFor={id} style={{color: 'gray', display: 'inline-block', fontSize:'11px'}}>{label}</label>
        <input
        id={id}
        type="number" 
        className='amountBox' 
        placeholder={amount}
        disabled={amountDisabled}
        value={amount}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='box3'>
        <p style={{color:'gray', fontSize:'11px', margin:'0px'}}>Currency Type</p>

        <select className='currency' 
        value={selectedCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
        > {currencyOptions.map((currency)=>( <option key={currency} value={currency}>{currency}</option> ))} </select>

      </div>
    </div>
  )
}

export default Inputbox
