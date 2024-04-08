import React, { useState } from 'react'
import { genrateDate, months } from './utils/calender'
import cn from './utils/cn';
import dayjs from 'dayjs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


const App = () => {
  // console.log(genrateDate());
  const days=["S","M","T","W","T","F","S"];
  const currentDate=dayjs();
  const [today,setToday]=useState(currentDate);
  const [selectDate,setSelectDate]=useState(currentDate);

  // WHEREEVER IN THE CODE THERE IS A USER INTERACTION THEN HOOKS-USE STATE IS USED 

  return(

    <div className='flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center'>

    <div className='w-96 h-96'>

      {/* HERE WE HAVE ADDED THE MONTH ABOVE THE CALENDER DATES AND CURRENT MONTH WILL BE DISPLAYED HERE */}

      <div className='flex justify-between'>

      <div>
        <h1 className='font-semibold'>
          {months[today.month()]},{today.year()}
        </h1>
      </div>

      <div className='flex items-center gap-5'>
        <GrFormPrevious className='w-5 h-5 cursor-pointer'
        onClick={()=>{
          setToday(today.month(today.month()-1));
        }}/>
        <h1 className='cursor-pointer' onClick={()=>{
          setToday(currentDate);

        }}>Today</h1>
        <GrFormNext className='w-5 h-5 cursor-pointer'
        onClick={()=>{
          setToday(today.month(today.month()+1));
        }}/>

 {/* THIS IS THE LOGIC FOR GOING TO THE PREVIOUS OR THE NEXT MONTH OF THE YEAR */}

      </div>
      </div>

      <div className='w-full grid grid-cols-7'>

        {days.map((day,index)=> {
          return <h1 key={index} className='h-14 grid place-content-center text-red-700 font-semibold text-sm'>
            {day}
            </h1>;
        })}

      </div>

      {/* THIS PART IS THE INSIDE DATES OF THE CALENDER THE WHOLE THING  */}

      <div className='w-full grid grid-cols-7'>

        {/* LINE 62 WILL SHOW THE NEXT MONTH AND YEAR IF THE TOGGLE BUTTON IS CLICKED AND ALL THE DATES WILL BE CHANGED */}

      {genrateDate(today.month(),today.year()).map(({date, currentMonth, today }, index)=>{
        return(
          <div key={index} className='h-14 border-t grid place-content-center text-sm'>
            <h1 className={cn(
              currentMonth? "" : "text-gray-500",
              today?"bg-red-700 text-white":"",
              selectDate.toDate().toDateString===date.toDate().toDateString?"":"bg-black text-white",

              // TERNARY OPERATOR IS ALSO USED HERE
              
              "h-10 w-10 grid place-content-center",
              "rounded-full",
              "hover:bg-black hover:text-white transition-all",
              "cursor-pointer"
            )}

            onClick={()=>{
              setSelectDate(date);
            }}
            // from line 78-79 it is written when we click any date in the calender then that date will show in the schedule section

            >
              {date.date()}</h1>
          </div>
        );
      })}
       </div>
    </div>

    <div className='w-96 h-96 px-5'>
      <h1 className='font-semibold'>
        Schedule for {selectDate.toDate().toDateString()}
      </h1>
      <p className='text-gray-500'><input className='border-none' placeholder='Write your thoughts' type="text" /></p>
    </div>
</div>

  );
};

export default App
