import React ,{ Component } from 'react';

const statData = {
    "Total New Count": "4620",
    "Total Repeat Count" :"200",
    "Average Repeat Count" : "80",
    "Average Dwell Time" : "42.54"
}


class RowOne extends Component{

    render(){
        return(
            <div className='rowC col-md-12 row filldiv'>
            <div className="col-md-7">
            <div className="col-md-3 addborder ">
             <b>Total New Count </b>
             <p>{statData["Total New Count"]} </p>
            </div>
            <div className="col-md-3 addborder ">
            <b>Total Average Count </b>
            <p>{statData["Total Repeat Count"]} </p>
            </div>
            <div className="col-md-3 addborder ">
            <b> Average Repeat Count </b>
            <p>{statData["Average Repeat Count"]} </p>
            </div>
            <div className="col-md-3 addborder "> 
            <b> Average Dwell Time </b>
            <p>{statData["Average Dwell Time"]} </p>
            </div>
            </div>
            <div className="col-md-5">
            <div className=""> 
            <b> Add a checkBox Tree here </b>
            
            
            </div>
            </div>
            
             
            </div>
        );
    }
}

export default RowOne;