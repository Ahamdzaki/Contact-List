import {StrictMode} from "react";
import "./styles.css";
import Card from "./Card";
import Contacts from "./contact";
import Avater from "./Avater";

function creatCard (contact){
  return (
    
    <Card 
    id = {contact.id}
    key = {contact.id}
    name = {contact.firstname}
    img = {contact.image}
    tel = {contact.phoneNumber}
    email = {contact.email} />
  )
  };



function App(){
  return(
  
  <div>
		<h1>My Contacts</h1>
		<Avater image = "https://avatars.githubusercontent.com/u/92436779?v=4"/>
		{Contacts.map(creatCard)}
  
  </div>
  )
}
export default App;
