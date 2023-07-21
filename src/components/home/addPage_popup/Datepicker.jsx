import React, { useRef, useEffect, useState } from 'react'

function Datepicker(props) {
    const [selectedDate, setSelectedDate] = useState('');
    const datepickerRef = useRef(null);

    useEffect(() => {
        $(datepickerRef.current).datepicker({
            // Configure the datepicker options as needed
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayHighlight: true,
            // Add any other options you want to customize the datepicker
        }).on('changeDate', (e) => {
            setSelectedDate(e.target.value);
            props.updateChange(e.target.value);
        });
    }, []);

  return (
    <div className="mt-3 col-sm-4">
        <div className="input-group date" id="datepicker">
            <input type="text" className="form-control" placeholder={props.label} ref={datepickerRef} value={selectedDate} readOnly required />
            <span className="input-group-append">
                <span className="input-group-text bg-white d-block">
                    <i className="fa fa-calendar"></i>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Datepicker