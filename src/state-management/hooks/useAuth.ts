import {useContext} from "react";
import AuthContext from "../context/authContext.ts";

const useAuth = () => useContext(AuthContext);

export default useAuth;