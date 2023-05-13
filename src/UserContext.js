import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

const localIsLoggedIn = localStorage.getItem("isUserLoggedIn");
const userLocal = localStorage.getItem("user");
const userStorage = JSON.parse(userLocal);

const initialAuth = false;
const initialUser = {};

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    if (localIsLoggedIn !== null) {
      return true;
    } else {
      return initialAuth;
    }
  });
  const [user, setUser] = useState(() => {
    if (userLocal !== null) {
      return userStorage;
    } else {
      return initialUser;
    }
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider
      value={{ updateUser, isUserLoggedIn, setIsUserLoggedIn, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
