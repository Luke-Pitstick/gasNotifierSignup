import { useState } from "react";
import { FirestoreInteface } from "../../controllers/firestoreController";
import "./Form.css";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


const firebaseConfig = JSON.parse("../firebaseConfig.json");

const Form = () => {
  const firestore = new FirestoreInteface(firebaseConfig);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");

  const changePhone = (phone) => {
    setPhone(phone.replace(/\D/g, ""));
  }

  const data = {
    username,
    email,
    phone,
    zipcode
  }

  const handleSubmit = firestore.addDocument(data);

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="usernameinput">Username:</label>
        <input type="text" id="usernameinput" name="username" className="form-element" onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="emailinput">Email:</label>
        <input type="email" id="emailinput" name="email" className="form-element" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="phoneinput">Phone Number:</label>
        <input type="tel" id="phoneinput" name="phonenumber" className="form-element" onChange={(e) => changePhone(e.target.value)}/>
        <label htmlFor="zipcodeinput">Zipcode:</label>
        <input type="text" id="zipcodeinput" name="zipcode" className="form-element" onChange={(e) => setZipcode(e.target.value)}/>
        <input type="submit" className="submit-button"/>
      </form>
    </div>
  );
};

export default Form;

