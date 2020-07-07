import React, { Component } from 'react';
import { CountryService } from '../services/CountryService';
import Display from './Display';
import CountryDisplay from './countryDisplay';

const countryService = new CountryService();

class RestCountries extends Component {
    constructor(props) {
        super(props); 
            this.state = { 
                countries: countryService.getCountries(),
                q: '',
                currentIndex: '',
                isCountrySelected: false,
                countryData: [],
            }; 
        this.filterList = this.filterList.bind(this);    
        this.hanldeOnChange = this.hanldeOnChange.bind(this); 
        this.handleShowDetails = this.handleShowDetails.bind(this);  
        this.handleShowBorderDetails = this.handleShowBorderDetails.bind(this);
        this.handleOnReset = this.handleOnReset.bind(this);
    };
    handleOnReset() {
        this.setState(() => ({isCountrySelected: false}));
    }
    handleShowBorderDetails(e) {
        const border = e.target.getAttribute('value')
        let countryData = this.state.countryData;
        countryData = this.state.countries.filter(country => {
            if(country.alpha3Code === border){
                return country;
            }
        });
        this.setState(() => ({ countryData: countryData }));
        this.setState(() => ({isCountrySelected: true}));   
    }

    handleShowDetails(e) {
        const value = e.currentTarget.getAttribute('value');
        console.log(value);
        this.setState({currentIndex: value}, () => {
            let countryData = this.state.countryData;
            countryData = this.state.countries.filter((country,index) => {
                let value = parseInt(this.state.currentIndex);
                if(value === index){
                   return country;
                }
            });
            this.setState(() => ({ countryData: countryData }));
            this.setState(() => ({isCountrySelected: true}));
        })
    }

    hanldeOnChange(event) {
        const q = event.target.value.toLowerCase();
        this.setState({q}, () => this.filterList());
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
    };

    // componentDidMount() {
    //     this.loadCountries();    
    // }
  
    render() { 
        return ( 
            <div>
                {this.state.isCountrySelected ?
                <CountryDisplay country={this.state.countryData}
                color={this.props.color}
                countries={this.state.countries}
                showBorderDetails={this.handleShowBorderDetails}
                onReset={this.handleOnReset}
                /> 
                :
                <Display color={this.props.color}
                countries={this.state.countries}
                showDetails={this.handleShowDetails}
                onChange={this.hanldeOnChange}/>
                }   
            </div>    
        );
    }
}
 
export default RestCountries;