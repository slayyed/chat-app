import React, { useState } from "react";
import Button from "../../Shared/Button/Button";
import CodeField from "../../Shared/CodeField/CodeField";
import Form from "../../Shared/Form/Form";
import styles from "./VerificationAccount.module.scss";
const Index = () => {
  const [formState, setFormState] = useState({ code: new Array(6).fill("") });
  const getDigitCodeValue = (code: string[]) => {
    const gluedCode = code.join("");
    return gluedCode !== "" ? Number(gluedCode) : null;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const isButtonDisabled = (): boolean => {
    return Object.values(formState).some((value) => {
      if (typeof value === "object") return !getDigitCodeValue(value);
    });
  };
  return (
    <Form className={styles.registerPageForm} onSubmit={handleSubmit}>
      <Form.Item label="Код">
        <CodeField code={formState.code} setCode={setFormState} />
      </Form.Item>
      <div className={styles.registerPageFormButton}>
        <Button disabled={isButtonDisabled()}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3073 5.70678C18.4054 5.60668 18.5225 5.52716 18.6517 5.47287C18.7809 5.41859 18.9196 5.39062 19.0598 5.39062C19.2 5.39062 19.3387 5.41859 19.4679 5.47287C19.5971 5.52716 19.7142 5.60668 19.8123 5.70678C20.2235 6.12222 20.2292 6.79353 19.8267 7.21616L11.3268 17.2643C11.2303 17.3703 11.1132 17.4554 10.9826 17.5146C10.852 17.5737 10.7108 17.6056 10.5675 17.6083C10.4242 17.611 10.2818 17.5844 10.1492 17.5302C10.0165 17.476 9.89625 17.3953 9.79583 17.293L4.62371 12.0519C4.42424 11.8485 4.3125 11.5749 4.3125 11.29C4.3125 11.0051 4.42424 10.7316 4.62371 10.5282C4.72181 10.4281 4.8389 10.3485 4.96812 10.2942C5.09733 10.24 5.23608 10.212 5.37624 10.212C5.5164 10.212 5.65514 10.24 5.78436 10.2942C5.91358 10.3485 6.03067 10.4281 6.12877 10.5282L10.516 14.9743L18.2785 5.73841C18.2875 5.7273 18.2971 5.71673 18.3073 5.70678Z"
              fill="currentColor"
            />
          </svg>
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};

export default Index;
