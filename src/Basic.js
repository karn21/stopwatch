import React from 'react';
import './Basic.css'

var basic = (props) => {
    return (

        <div className='basic'>
            <div className="time">
                <div className='time-elem'>
                    <span>{props.basicTime[0]} :</span>
                    <span>days</span>
                </div>
                <div className='time-elem'>
                    <span>{props.basicTime[1]} :</span>
                    <span>hrs</span>
                </div>
                <div className='time-elem'>
                    <span>{props.basicTime[2]} :</span>
                    <span>mins</span>
                </div>
                <div className='time-elem'>
                    <span>{props.basicTime[3]} </span>
                    <span>secs</span>
                </div>
            </div>
            <form>
                <input type="number" readOnly={props.running && 'readonly'} className='time-input' onChange={props.basicHandler} value={props.time}
                    placeholder='Enter Time in secs.'></input>
                <div >
                    <button disabled={props.running && 'disabled'} className="button btn-green" onClick={props.start} type="submit">Start <i className='fa fa-play'></i></button>
                    <button className="button btn-red" onClick={props.reset} type="submit">Reset <i className='fa fa-refresh'></i></button>
                    <button disabled={!props.running && 'disabled'} className="button btn-yellow" onClick={props.pause} type="submit">Pause <i className='fa fa-pause'></i></button>
                </div>
            </form>


        </div>

    )
}

export default basic;