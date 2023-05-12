import React from 'react';
import userImg from '../images/person 1.png';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
    // console.log(props);
    const diffToast = ()=>{
        toast.success('Done!', {
            position:"top-center",
            theme:"dark"
        })
    }
    return (
        <div className='details'>
            <div>
               <div className="user-info">
               <img src={userImg} alt="" />
               <div className="text">
                 <h3>Addnan Islam</h3>
                 <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  <small>Sydney, Australia</small></p>
               </div>
                  </div>
                  <div className="user-physical-info">
                    <div className="weight">
                        <p><b>75</b><small>kg</small></p>
                        <p>Weight</p>
                    </div>
                    <div className="height">
                        <p><b>6.5</b></p>
                        <p>Height</p>
                    </div>
                    <div className="age">
                        <p><b>25</b><small>yrs</small></p>
                        <p>Age</p>
                    </div>
                  </div>
            </div>

            <div className="break-part">
               <h3>Add A Break</h3>
               <div className="break-time">
               <button onClick={()=> props.addBreakTime('btn-10')}><b id='btn-10'>10</b> <small>min</small></button>
               <button onClick={()=> props.addBreakTime('btn-15')}><b id='btn-15'>15</b> <small>min</small></button>
               <button onClick={()=> props.addBreakTime('btn-20')}><b id='btn-20'>20</b> <small>min</small></button>
               <button onClick={()=> props.addBreakTime('btn-25')}><b id='btn-25'>25</b> <small>min</small></button>
               </div>
            </div>

            <div className="timing-part">
                <h3>Exercise Details</h3>
                <div className="ex-time-display">
                    <h4>Exercise time</h4>
                    <p><b><span id='total-ex-time'>0</span></b> minutes</p>
                </div>
                <div className="break-time-display">
                    <h4>Break time</h4>
                    <p><b><span id='break-time-show'>0</span></b> minutes</p>
                </div>
            </div>
            <button className='complete-btn' onClick={diffToast}>
                <p>
                Activity Completed
                </p>
            </button>
            <ToastContainer/>
        </div>
    );
};

export default Details;