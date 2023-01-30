// import React from 'react';
// import { addDays, format } from 'date-fns'
// import {Calendar, calendar, DateRangePicker} from "react-date-range"
// import formate from 'date-fns/format';
// import { useState,useEffect,useRef } from 'react';
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css';
// const Report3 = () => {
//     // data state
//     const [calendar,setCalendar]= useState('')
//     // open close
//     const [open,setOpen]=useState(false)

//     useEffect(()=>{
//         // set creent state
//         setCalendar(formate(new Date(), "MM/dd/yyyy"))
    
// document.addEventListener("keydown",hideOnEscape,true)
// document.addEventListener("click",hideOnClickOutside,true)
// },[])
//     const [state, setState] = useState([
//         {
//           startDate: new Date(),
//           endDate: addDays(new Date(), 7),
//           key: 'selection'
//         }
//       ]);
//     //   hide dropdown on esvape
//       const hideOnEscape=(e)=>{
//       if(e.key === "Esvape"){
//         setOpen(false)
//       }

//       }
//       const [date,setData]= useState("00/00/0000")
//     //   hide on outside
//       const hideOnClickOutside=()=>{

//       }
//       const handleSelect = (date)=>{
//         setCalendar(format(data,"MM/dd/yyyy"))
//       }
    
      
//     return (
//         <div>
//            <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Report</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <div className="card-body">
//         {/* report type */}
//         <div className="form-control">
//         <select className="select w-full max-w-xs">
//   <option disabled selected>Pick your favorite Simpson</option>
//   <option>Homer</option>
//   <option>Marge</option>
//   <option>Bart</option>
//   <option>Lisa</option>
//   <option>Maggie</option>
// </select>
//         </div>
//         {/* Time range */}
//         <div className="form-control">
//         {/* <DateRangePicker
//   onChange={item => setState([item.selection])}
//   showSelectionPreview={true}
//   moveRangeOnFirstSelection={false}
//   months={2}
//   ranges={state} */}
//   <div className='calendarwrap'>
//     <Calendar 
//     date={new Date()}
//     formatDate ="mm/dd/yyy"/>
//   </div>
//       <input type="text"
//       value={calendar}
//       readOnly
//       placeholder="password" className="input input-bordered inputBox" />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Login</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Report3;