import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/authContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if(action.type === "USER_INPUT"){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === "EMAIL_VALIDATE"){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: "", isValid: false}
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PASSWORD_VALIDATE") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const loginContext = useContext(AuthContext)
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: undefined})

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: "", isValid: undefined})

  const emailRef = useRef()
  const passwordRef = useRef()

  // useEffect(() => {
  //   console.log("useEffect Running");
  //   return () => {
  //     console.log("cleanup function");
  //   };
  // }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timeout = setTimeout(() => {
        console.log("useEffect Running");

      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
          console.log("cleanup function");

      clearTimeout(timeout);
    }

  },[emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value})

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "USER_INPUT", val: event.target.value})

    // setFormIsValid(
    //   emailState.value.includes("@") && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "EMAIL_VALIDATE"})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "PASSWORD_VALIDATE"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
    loginContext.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        label={"E-Mail"}
          isValid={emailIsValid}
          id={"email"}
          type={"email"}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          label={"Password"}
          isValid={passwordIsValid}
          id={"password"}
          type={"password"}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
