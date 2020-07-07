import React from 'react';

const RegionSelect = (props) => {
    return(
        <select className="region form-control" onChange={props.onRegionChanged} defaultValue={'DEFAULT'}>
            <option style={{marginBottom: '1rem'}} value="DEFAULT" disabled>Filter by region</option>
            {props.regions && props.regions.map(region => (
                <option className="regionOption" key={region} value={region}>{region}</option>
            ))}
        </select>
    )  
}
export default RegionSelect;