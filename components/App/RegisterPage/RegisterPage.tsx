import React, { useState } from "react";
import Form from "../../Shared/Form/Form";
import styles from "./RegisterPage.module.scss";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";
import Error from "../../Shared/Error/Error";
import Spinner from "../../Shared/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../../../redux/actions/credentials";
import { RootState, store } from "../../../redux/store";
const RegisterPage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const credentialsState = useSelector((state: RootState) => state.credentials);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Submit controller
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerAccount(formData));
  };
  const handleFieldChange =
    (fieldName: "email" | "password") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [fieldName]: e.target.value }));
    };
  const isButtonDisabled = (): boolean => {
    return Object.values(formData).some((value) => {
      return !!value === false;
    });
  };
  return (
    <>
      {credentialsState?.error && (
        <Error
          text={credentialsState?.error}
          onClose={() => console.log("click")}
        />
      )}
      {credentialsState?.loading && <Spinner />}
      <Form className={styles.registerPageForm} onSubmit={handleSubmit}>
        <Form.Item label="Электронная почта">
          <Input
            type={"email"}
            required={true}
            value={formData.email}
            placeholder="Введите адрес электронной почты"
            suffix={
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5007 2.51855C8.37065 2.51855 2.58398 8.30522 2.58398 15.4352C2.58398 22.5652 8.37065 28.3519 15.5007 28.3519H21.959V25.7686H15.5007C9.89482 25.7686 5.16732 21.0411 5.16732 15.4352C5.16732 9.82939 9.89482 5.10189 15.5007 5.10189C21.1065 5.10189 25.834 9.82939 25.834 15.4352V17.2823C25.834 18.3027 24.9169 19.3102 23.8965 19.3102C22.8761 19.3102 21.959 18.3027 21.959 17.2823V15.4352C21.959 11.8702 19.0657 8.97689 15.5007 8.97689C11.9357 8.97689 9.04232 11.8702 9.04232 15.4352C9.04232 19.0002 11.9357 21.8936 15.5007 21.8936C17.2832 21.8936 18.9107 21.1702 20.0732 19.9948C20.9127 21.1444 22.3594 21.8936 23.8965 21.8936C26.4411 21.8936 28.4173 19.8269 28.4173 17.2823V15.4352C28.4173 8.30522 22.6307 2.51855 15.5007 2.51855ZM15.5007 19.3102C13.3565 19.3102 11.6257 17.5794 11.6257 15.4352C11.6257 13.2911 13.3565 11.5602 15.5007 11.5602C17.6448 11.5602 19.3757 13.2911 19.3757 15.4352C19.3757 17.5794 17.6448 19.3102 15.5007 19.3102Z"
                  fill="#494949"
                />
              </svg>
            }
            onChange={handleFieldChange("email")}
          />
        </Form.Item>
        <Form.Item label="Пароль">
          <Input.Password
            placeholder="Введите пароль"
            value={formData.password}
            onChange={handleFieldChange("password")}
          />
        </Form.Item>
        {/* Remember me */}
        <div className="register-page__form-remember-me"></div>
        <div className={styles.registerPageFormButton}>
          <Button disabled={isButtonDisabled()}>
            {/* <CheckIcon /> */}
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
    </>
  );
};

export default RegisterPage;
