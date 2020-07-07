import React from 'react';

const CountryDisplay  = (props) => { 
    return(
        <div className="country-wrapper">
            <button className="mt-5" onClick={props.onReset}>back</button>
            <div className="row d-flex mt-5 m-auto" style={{width: '85%',justifyContent: 'space-between'}}>
                <img src={props.country[0].flag} style={{width: '50%'}} alt="country flag"/>
                <div className="description d-flex flex-column" style={{width: '40%'}}>
                    <div className="content d-flex flex-row"></div>
                    <div className="borders d-flex flex-row">
                        <h4>Border Countries</h4>
                        {props.country[0].borders.map(border => (
                            <button key={border} value={border} onClick={props.showBorderDetails}>{border}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>    
    )
};
export default CountryDisplay;