import React, { useState, useEffect } from "react";
import TextField from "./inputFields/textField";
import { validator } from "./validator";
import { useHistory } from "react-router-dom";

const EditStudentPage = () => {
  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    surname: "",
    age: "",
    portfolio: "",
  });

  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    if (student) {
      setData({
        name: student.name,
        surname: student.surname,
        age: student.age,
        portfolio: student.portfolio,
      });
    }
  }, []);

  const validationConfig = {
    name: {
      isRequired: { message: "Поле Имя обязательно для заполнения" },
    },
    surname: {
      isRequired: { message: "Поле Фамилия обязательно для заполнения" },
    },
    age: {
      isRequired: { message: "Поле Год рождения обязательно для заполнения" },
      correctDate: { message: "Поле Год рождения не корректно" },
    },
    portfolio: {
      isRequired: { message: "Поле Портфолио обязательно для заполнения" },
      isUrl: { message: "Поле Портфолио должно быть ссылкой" },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    setErrors(validator(data, validationConfig));
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Обновлено");
    localStorage.setItem("student", JSON.stringify(data));
    console.log(data);
    history.push("/");
  };

  const handleBack = () => {
    history.push("/");
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-10 offset-md-1">
          <h3>Создать</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              label="Имя"
              value={data.name}
              name="name"
              errors={errors.name}
            />
            <TextField
              onChange={handleChange}
              label="Фамилия"
              value={data.surname}
              name="surname"
              errors={errors.surname}
            />
            <TextField
              onChange={handleChange}
              label="Год рождения"
              value={data.age}
              name="age"
              type="number"
              errors={errors.age}
              min="0"
            />
            <TextField
              onChange={handleChange}
              label="Портфолио"
              value={data.portfolio}
              name="portfolio"
              errors={errors.portfolio}
            />
            {student ? (
              <div>
                <button
                  className="btn btn-secondary btn-sm m-2"
                  onClick={handleBack}
                >
                  Назад
                </button>
                <button className="btn btn-primary btn-sm" disabled={!isValid}>
                  Обновить
                </button>
              </div>
            ) : (
              <button className="btn btn-primary btn-sm" disabled={!isValid}>
                Создать
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudentPage;
