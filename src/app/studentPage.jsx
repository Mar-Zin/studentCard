import React from "react";
import { Link } from "react-router-dom";

const StudentPage = () => {
  const student = JSON.parse(localStorage.getItem("student"));

  const getAge = function (student) {
    const lastOne = Number((2022 - student.age).toString().slice(-1));
    if (lastOne > 4 && lastOne < 15) {
      return "лет";
    }
    if (lastOne === 1 && 2022 - student.age === 1) return "год";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "года";
    return "лет";
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 offset-md-1">
          <h1>Карточка студента</h1>
          {student ? (
            <>
              <div>
                <strong>Имя: </strong>
                <span>{student.name}</span>
              </div>
              <div>
                <strong>Фамилия: </strong>
                <span>{student.surname}</span>
              </div>
              <div>
                <strong>Год рождения: </strong>
                <span>
                  {student.age} ({2022 - student.age} {getAge(student)})
                </span>
              </div>
              <div>
                <strong>Портфолио: </strong>
                <a href={student.portfolio}>{student.portfolio}</a>
              </div>
            </>
          ) : (
            <div>
              <span>Нет данных</span>
            </div>
          )}
          <Link to="/edit">
            <button className="btn btn-primary btn-sm mt-3">
              {student ? "Редактировать" : "Добавить"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
