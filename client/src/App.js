import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { AuthContext } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import RequireAuth from "./Components/RequireAuth";
import Login from "./Components/Login";
import cookie from 'react-cookies'

function App() {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const userId = cookie.load('userId')
  //   if(userId){
  //     setUser(userId)
  //   }
  // }, [])

  return (
    <div className="App">
      {/* <AuthContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider> */}
    </div>
  );
}

export default App;
