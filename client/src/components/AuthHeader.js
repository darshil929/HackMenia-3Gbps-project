import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthHeader = (props) => {
  const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    
    useEffect(() => {
      if(!user) {
          navigate("/sign-in");
      }
    }, [navigate, user]);
  
    return <>
        {props.children}
    </>
  };

export default AuthHeader;