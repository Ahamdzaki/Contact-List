import {StrictMode} from "react";
import "./styles.css";
import Card from "./Card";
import Contacts from "./contact";
import Avater from "./Avater";
function App(){
  return (
  <div>
  <h1>My Contacts</h1>
	<Avater image = "https://avatars.githubusercontent.com/u/92436779?v=4"/>
  <Card
    name = {Contacts[0].firstname}
    img = {Contacts[0].image}
    tel = {Contacts[0].phonenumber}
    email = {Contacts[0].email}
  />
  <Card 
  name={Contacts[1].firstname}
  img = {Contacts[1].image}
  tel = {Contacts[1].phonenumber}
  email = {Contacts[1].email}
  />
  <Card 
  name = {Contacts[2].firstname}
  img = {Contacts[2].image}
  tel = {Contacts[2].phonenumber}
  email = {Contacts[2].email} />

  <Card 
  name = {Contacts[3].firstname}
  img = {Contacts[3].image}
  tel = {Contacts[3].phonenumber}
  email = {Contacts[3].email} />

  <Card 
  name = {Contacts[4].firstname}
  img = {Contacts[4].image}
  tel = {Contacts[4].phonenumber}
  email = {Contacts[4].email} />
  
  </div>)
}
export default App;
