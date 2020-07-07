import React from 'react';

const Display = (props) => {
   return (
       <div>
           <form className="form-inline d-flex justify-content-center md-form form-sm">
                    <input className="search form-control form-control-sm" type="text" placeholder="Search for a country..."
                        aria-label="Search" onChange={props.onChange}/>
            </form>
           <table className="mt-5" style={props.color ? {color: 'white'} : {color: 'black'}}> 
            <tbody className="d-flex flex-wrap mx-auto" style={{width: '85%',justifyContent: 'space-between'}}>
                {props.countries.map((country,index) => (
                    <tr className="country-box" key={country.name} value={index} onClick={props.showDetails}>
                        <td><img alt="country flag" style = {{width: '270px', height: '150px', borderRadius: '8px 8px 0 0'}}src={country.flag}/></td>
                        <td>{country.name}</td>
                        <td>{country.population}</td>
                        <td>{country.capital}</td>
                    </tr>
                ))}
            </tbody>         
        </table>
       </div>       
    );
};
export default Display;
