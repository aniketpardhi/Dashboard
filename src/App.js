import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Single from "./Pages/Single/Single";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import { productInputs, userInputs } from "./Components/Formsource";
import "./Style/Style.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./Pages/Context/DarkModeContext";


function App() {
  // const [submittedData, setSubmittedData] = useState(null);

  // const handleFormSubmit = (formData) => {
  //   setSubmittedData(formData);
  // };
//   document.title = "DashBoard";
 const{darkMode}=useContext(DarkModeContext);
  return (
    <>
     <div className= {darkMode ? "app dark":"app"}>
     <BrowserRouter>
     
        <Routes>
          
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
       
      </BrowserRouter>
     </div>
       {/* <Form onSubmit={handleFormSubmit} />
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}  */}

    
    </>
  );
}

export default App;
