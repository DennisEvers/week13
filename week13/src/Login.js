import React, {Component} from "react";


// above is the code in order to import the react program to creat the component 
// below is the export so that the class can be used in the main app js as a component
export default class Form extends Component {
    render() {
        return (

            <form className="form">
                <p>User Name</p>
                <input type='text' placeholder="user name"></input>
                <br></br>
                <p>Password</p>
                <input type='text' placeholder="password"></input>
                <br></br>
                <input type='submit'></input>
                
            </form>
        )
    }
}

// the class uses render to creat a function of sorts in order to return the information i have given it
// this information is the two input fields for username and password as well as a submit button. 
// the function takes this component and plugs into the main app where i call the class using the import login 