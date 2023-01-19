import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        Name : "",
        Department : "",
        Rating : "",
        employees : []
      }
    
      changeHandler = (e)=>{
        this.setState({[e.target.name] : e.target.value})
        // console.log(e.target.name + " " + e.target.value)
        // console.log({[e.target.name] : e.target.value})
        // console.log(this.state)
      }

      submitForm = (e) =>
      {
        e.preventDefault();
        const empObj = {
            Name : this.state.Name,
            Department : this.state.Department,
            Rating : this.state.Rating
        }
       const arr = this.state.employees
       arr.push(empObj)
        this.setState({employees : arr})

      }

  render() {
    return (
      <div >
         <h1 style={{textAlign: 'center'}}>EMPLOYEE FEEDBACK FORM</h1>
        <div className='form-container'>
            <form >
                <div className="labels">
                <label htmlFor='name'>Name:</label>
                <input type="text" name='Name' onChange={this.changeHandler} value={this.state.Name} ></input>
                </div>
               
               <div className="labels">
                <label htmlFor='Dapartment'>Department:</label>
                <input type="text" name='Department' onChange={this.changeHandler} value={this.state.Department}></input>
                </div>
                <div className="labels">
                <label htmlFor='Rating'>Rating:</label>
                <input type="number" name='Rating' onChange={this.changeHandler} value={this.state.Rating} max='10'></input>
                </div>
                <button onClick={this.submitForm}>SUBMIT</button>  {/*Default type of button is that of type submit. Evertything gets flushed out when we click the button. we can use preeventDefault() fnct*/}
            </form>
      </div>

      <div className='feedback-div'>
        
        {this.state.employees.map((value,index)=>
        {
            return(
                
                <span key={index}>{value.Name} | {value.Department} | {value.Rating} </span>
                
            )
        })}
      </div>
      </div>
    )
  }
}
