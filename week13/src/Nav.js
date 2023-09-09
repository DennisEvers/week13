import React, {Component} from "react";


// above is the code in order to import the react program to creat the component 
// below is the export so that the class can be used in the main app js as a component

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar">
                <ul>
                    <li><a href="url">HOME</a></li>
                    <li><a href="url">TEAM FINDER</a></li>
                    <li><a href="url">RAID LOCATOR</a></li>
                    <li><a href="url">CONTACT US</a></li>
                </ul>

            </nav>
        )
    }
}

// the class uses render to creat a function of sorts in order to return the information i have given it
// this information is the navbar which consists of an un ordered list of all the different links you would be 
//able to click if they went anywhere 
// the function takes this component and plugs into the main app where i call the class using the import Nav