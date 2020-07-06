import React from 'react';

const Display = (props) => {
    return(  
            <table className="mt-5" style={props.color ? {color: 'white'} : {color: 'black'}}> 
                <tbody>
                    <tr style={{width: '85%', justifyContent: 'space-between'}} className="d-flex flex-wrap m-auto h-100">
                    {props.countries.map(country => (
                        <th className="mt-5" style={{width: '250px', height: '300px', cursor: 'pointer'}} key={country.name} onClick={((e) => props.onDetails(e))}>{country.name}</th>
                    ))}
                    </tr>  
                </tbody>         
            </table>    
    );
};

export default Display; 