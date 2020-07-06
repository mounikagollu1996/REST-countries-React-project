import React, { Component } from 'react';
import { CountryService } from '../services/CountryService';
import Display from './Display';

const countryService = new CountryService();

class RestCountries extends Component {
    constructor(props) {
        super(props); 
            this.state = { 
                countries: [],
                q: ''
            }; 
        this.filterList = this.filterList.bind(this);    
        this.hanldeOnChange = this.hanldeOnChange.bind(this); 
        this.handleOnDetails = this.handleOnDetails.bind(this);           
    };

    hanldeOnChange(event) {
        const q = event.target.value.toLowerCase();
        this.setState({q}, () => this.filterList());
    }

    handleOnDetails = (e,data) =>{
        console.log(e);
    }

    filterList() {
        let countries = this.state.countries;
        let q = this.state.q;
    
        countries = countries.filter(function(country) {
          return country.name.toLowerCase().indexOf(q) !== -1;
        });
        this.setState(() => ({ countries: countries }));
      }

    loadCountries(){
        this.setState(() => ({ countries: countryService.getCountries() }));
    }

    componentDidMount() {
        this.loadCountries();
    }
    
    render() { 
        return ( 
            <div>
                <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" onChange={this.hanldeOnChange}></input>
                </form>
                <Display color={this.props.color}
                countries={this.state.countries}
                onDetails={this.handleOnDetails}/>
            </div>    
        );
    }
}
 
export default RestCountries;