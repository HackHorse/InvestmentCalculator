import React, { useState } from "react";
import Card from "../Cards/Card";
import styles from "./Form.module.css";
import Header from "../Header/Header";
import logo from "../Assests/logo.png";
import Button from "../Buttons/Button";

const Form = (props) => {
  const [userInput, setUseraInput] = useState({
    curretsavings: "",
    yearlycontribution: "",
    expectedreturn: "",
    duration: "",
  });

  const inputChangeHandler = (input,value) => {
    setUseraInput((prevValue) => {
      return { ...prevValue, [input]: +value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
   /*const investementData = {
    curretsavings: +userInput.curretsavings,
    yearlycontribution: +userInput.yearlycontribution,
    expectedreturn: +userInput.expectedreturn,
    duration: +userInput.duration
   }*/
props.getInvestmentData(userInput);

   setUseraInput({
    curretsavings: "",
    yearlycontribution: "",
    expectedreturn: "",
    duration: "",
  });

  }

  const resetHandler = () => {
    setUseraInput({
      curretsavings: "",
      yearlycontribution: "",
      expectedreturn: "",
      duration: "",
    });
  };

  return (
    <Card>
      <Header logo={logo} />
      <form className={styles.form} onReset={resetHandler} onSubmit={submitHandler}>
        <div className={styles.inputgroup}>
          <p>
            <label htmlFor="curretsavings">Current Savings ($)</label>
            <input
              type="number"
              id="curretsavings"
              value={userInput['curretsavings']}
              onChange={(event)=>{inputChangeHandler('curretsavings',event.target.value)}}
              required
            />
          </p>
          <p>
            <label htmlFor="yearlycontribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearlycontribution"
              value={userInput['yearlycontribution']}
              onChange={(event)=>{inputChangeHandler('yearlycontribution',event.target.value)}}
              required
            />
          </p>
        </div>
        <div className={styles.inputgroup}>
          <p>
            <label htmlFor="expectedreturn">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expectedreturn"
              value={userInput['expectedreturn']}
              onChange={(event)=>{inputChangeHandler('expectedreturn',event.target.value)}}
              required
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput['duration']}
              onChange={(event)=>{inputChangeHandler('duration',event.target.value)}}
              required
            />
          </p>
        </div>
        <p className={styles.actions}>
          <Button type="reset" className={styles.buttonAlt} text="Reset" />
          <Button type="submit" className={styles.button} text="Calculate" />
        </p>
      </form>
    </Card>
  );
};

export default Form;
