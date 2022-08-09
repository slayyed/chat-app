import React, { useState } from "react";
// import { IFormState } from "../../App/CodeVerificationLayout/CodeVerificationLayout";
import styles from "./CodeField.module.scss";

interface IFormState{
  code:string[];
}

interface ICodeFieldProps {
  size?: number;
  acceptableValues?: RegExp;
  code:string[];
  setCode: React.Dispatch<React.SetStateAction<IFormState>>
}

const CodeField: React.FC<ICodeFieldProps> = ({
  size = 6,
  acceptableValues = /\d/,
  setCode,
  code
}) => {
  
  function updateCode(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      value,
      dataset: { index },
      nextSibling,
      previousSibling,
    } = event.target;

    const isValueAccepted = acceptableValues.test(value) || value === "";

    isValueAccepted &&
      setCode((prev) => {
        const newState = [...prev.code];
        newState[Number(index)] = value;
        return {code:newState};
      });
    if (value !== "" && nextSibling) {
      (nextSibling as HTMLInputElement).focus();
    } else if (value === "" && previousSibling) {
      (previousSibling as HTMLInputElement).focus();
    }
  }


  return (
    <div className={styles.codeField}>
      {code.map((v, i) => (
        <input
          className={styles.codeFieldInput}
          type="text"
          value={code[i]}
          placeholder="X"
          name={`codefield-${i}`}
          key={i}
          maxLength={1}
          data-index={i}
          onChange={updateCode}
        />
      ))}
    </div>
  );
};

export default CodeField;
