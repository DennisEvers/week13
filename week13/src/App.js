import logo from './logo.svg';
import './App.css';
import Navigation from './Nav'
import Password from './Login'
//This is the imports i used when creating the components for the nav bar and the form section

function App() {
  return (
    <div>
      <h1 className='title'>BECOME LEGEND</h1>
      <Navigation/>
      <h3 className="login">Login</h3>
      <Password/>
    </div>
    
    
  
  );
}

// above is the code that runs the app. When the app runs it creates the div that have my titles housed inside
//as well as the compnents to the form and the navbar that then run pulling the info from the other js files
export default App;



//Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
//Create a Navigation component that contains links styled like a navbar.
//The links don't have to go anywhere.
//Put the Navigation component at the top of the page and the LoginForm in the center of the page.
//Video Steps:
