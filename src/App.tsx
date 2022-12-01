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
    cleanLocalStorage()
    setRoles([Role.EMPLOYEE,Role.ADMIN])
    updateCurrentUser(1,"Quentin","Desbrousses","quentin.desb@gmail.com","Montpellier",34000,"UX Design","cv.fr")
    return ProtectedRooters()
    if(isAuthenticated()) {
        let roles = getRoles()
        if(roles) return ProtectedRooters()
        return <PublicRooter />
    }
    else {
        return <PublicRooter />
    }
}

function App() {
  return (
      <BrowserRouter>
        <AppRouting/>
      </BrowserRouter>
  );
}

export default App;
