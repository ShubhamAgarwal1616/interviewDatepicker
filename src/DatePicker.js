import React, {useState} from 'react';


function DatePickerOptions() {
  const getCurrentDate = () => new Date().getDate();

  const getTotalDays = () => {
    let date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  const getMonthRow = (row, totalDays) => {
    let day = 7 * row + 1;
    let gap = row === 3;
    let curDate = getCurrentDate();
    let days= [];
    if (row === 0) {
      for (let i = 1 ; i <= gap ; i++) {
        days.push((<td className='day'>{}</td>))
      }
    }
    for (let i = day - gap ; i < (day - gap) + 7 ; i++) {
      if (i <= totalDays) {
        days.push((<td className='day'>{i}</td>))
      }
    }
    return (
      <tr className='row'>
        {days}
      </tr>
    )
  }

  const getDaysView = () => {
    let totalDays = getTotalDays();
    let numRows = parseInt(((totalDays / 7) + 1).toFixed(0));
    return Array.from(Array(numRows).keys()).map((row) => {
      console.log(row)
      return getMonthRow(row, totalDays)
    })
  }


  return (
    <div className='datePickerOptions'>
      <table>
        {getDaysView()}
      </table>
    </div>
  )
}


export function DatePicker() {
  const [open, setOpen] = useState(false);

  return (
    <div className='container'>
      <input className='datePickerInput' type='text' onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}/>
      {open && <DatePickerOptions/>}
    </div>
  )
}
