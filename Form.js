
// JavaScript source code
import './App.css';
import React from 'react';
import  { Component } from 'react';
import { render } from '@testing-library/react';
import "./Form.css";
import logo from './logo.png';



/*
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
fullName:null        }
    }

    
}

handleSubmit = (event) => {
    event.preventDefault()
}

handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState(
        {
            [event.target.name]: event.target.value
        }
    )
}
*/
class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            FullName: "",
            Address: "",
            City: "",
            ContactNumber: "",
            StudentJoinDate: "",
            PostalCode: "",
            Province: "",
            Stream: "",
            Degree: "",
            Decieses:"",
            Prescription:"",
            CategoriesofMediines:"",
            Amount:"",
            Durations:"",
            Department: "",
            isLoading: false,
            Form: []
        }
    }
    handleChange = (e, { name, value }) => {
        console.log(name, value)
        this.setState({ [name]: value })
    }







    render() {

        return (

            <div className='form-content-right' >

                <img src="logo.png" alt="NSBM Logo" height="80" width="160" />


                <h1>Student Online Registration Portal</h1>

                <form onSubmit={this.sendDataSomewhere}>
                    <div id='container1'>

                        <div className='left'>
                            <label><label1>*</label1>Full Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <input type='text' name='FullName' value={this.state.FullName} onChange={this.handleChange} required />
                            </label>

                        </div>

                        <div className='right'>
                            <label><label1>*</label1>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='email' name='FEmail' value={this.state.Email} onChange={this.handleChange} required />
                            </label></div>

                        <br />  <br />
                    </div>

                    <div id='container2'>

                        <div className='left'>
                            <label><label1>*</label1>Street Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type='text' name='Address' value={this.state.Address} onChange={this.handleChange} required />
                            </label></div>

                        <div className='right'>
                            <label>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='City' value={this.state.City} onChange={this.handleChange} />
                            </label></div>
                        <br /><br />
                    </div>

                    <div id='container3'>

                        <div className='left'>
                            <label><label1>*</label1>Contact Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type='text' name='ContactNumber' value={this.state.ContactNumber} onChange={this.handleChange} required />
                            </label></div>

                        <div className='right'>
                            <label><label1>*</label1>Faculty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                <input type='text' name='Faculty' value={this.state.Faculty} onChange={this.handleChange} required />
                            </label></div><br /><br />
                    </div>

                    <div id='container4'>

                        <div className='left'>
                            <label><label1>*</label1>Guardian&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Guardian' value={this.state.Guardian} onChange={this.handleChange} required />
                            </label></div>

                        <div className='right'>
                            <label><label1>*</label1>Guardian's Profession&nbsp;&nbsp;&nbsp;&nbsp;



                <input type='text' name='GuardianProfession' value={this.state.GuardianProfession} onChange={this.handleChange} />
                            </label></div><br /><br />
                    </div>


                    <div id='container5'>

                        <div className='left'>
                            <label><label1>*</label1>O/L Results&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Results2' value={this.state.OLResults} onChange={this.handleChange} required />
                            </label></div>

                        <div className='right'>
                            <label><label1>*</label1>Student Join Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <input type='text' name='StudentJoinDate' value={this.state.StudentJoinDate} onChange={this.handleChange} required />
                            </label></div><br /><br />
                    </div>

                    <div id='container6'>

                        <div className='left'>
                            <label>Postal Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='PostalCode' value={this.state.PostalCode} onChange={this.handleChange} /></label></div>

                        <div className='right'>
                            <label>Province&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                <input type='text' name='Province' value={this.state.Province} onChange={this.handleChange} /></label></div>


                        <br />  <br />
                    </div>

                    <div id='container7'>

                        <div className='left'>
                            <label><label1>*</label1>Sream&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Stream' value={this.state.Stream} onChange={this.handleChange} required />
                            </label></div>

                        <div className='right'>
                            <label><label1>*</label1>Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='Degree' value={this.state.Degree} onChange={this.handleChange} required />
                            </label></div><br />  <br />
                    </div>

                    <div id='container8'>

                        <div className='left'>
                            <label><label1>*</label1>Guardian's Contact Number &nbsp;
                <input type='text' name='GuardianContactno' value={this.state.GuardianContactno} onChange={this.handleChange} required />
                            </label></div>

                        <div className='right'>
                            <label><label1>*</label1>A/L Results&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type='text' name='Results' value={this.state.ALResults} onChange={this.handleChange} required />
                            </label></div><br /><br />
                    </div>

                    <div id='container9'>

                        <div className='left'>
                            <label><label1>*</label1>University for related Degree&nbsp;
                <input type='text' name='UniversityforrelatedDegree' value={this.state.UniversityforrelatedDegree} onChange={this.handleChange} />
                            </label></div>

                        <div className='right'>
                            <label>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                <input type='text' name='Department' value={this.state.Department} onChange={this.handleChange} />
                            </label></div><br />  <br />
                    </div>

                    <br />




                    <b>Please fill all the required fields before submit the request</b>
                    <br />
                    <div id="container10">

                        <button className='submitbutton' type='submit'>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='cancelbutton' type='reset'>Cancel</button>

                    </div>


                </form>
            </div>
        )
    }
}

export default Form;
