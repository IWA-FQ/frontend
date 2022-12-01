import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {
    cleanLocalStorage,
    getRoles,
    isAuthenticated,
    setRoles,
    updateCurrentUser
} from "./services/authentication.service";
import ProtectedRooters from "./routing/ProtectedRooters";
import {Role} from "./models/Role";
import PublicRooter from "./routing/PublicRooter";

const AppRouting = () => {
    if(isAuthenticated()) {
        let roles = getRoles()
        if(roles) return ProtectedRooters()
        return <PublicRooter />
    }
    return <PublicRooter />

}

function App() {
  return (
      <BrowserRouter>
        <AppRouting/>
      </BrowserRouter>
  );
}

export default App;
