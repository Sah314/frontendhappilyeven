import React, { useState } from 'react'
import './styles.css'
//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const SelectSlot = () => {
//const dispatch = useDispatch();
const morningTime = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM"]
const afternoonTime = ["1:00 PM","2:00 PM","3:00 PM","4:00 PM"]
const available = useSelector((state) => state.availableSlots);
console.log(available);
  return (
    <div className='cont'>
      <div className="dates">
{available.map((slot)=>
(<div key={slot.date} className='dateObj'><div>{slot.date}</div><div>{slot.day}</div></div>)
)}      </div>
<h4>MORNING</h4>
<div className='mornholder'>
  {morningTime.map((time)=>(<div></div> ))}
</div>

<h4>AFTERNOON</h4>

    </div>
  )
}

export default SelectSlot