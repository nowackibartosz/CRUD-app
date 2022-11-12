import React from "react";
import { useState } from "react";
import "./FakeRegisterComponent.css";
import { useUserContext } from "../UserContext/UserContext";
import { useFormik } from "formik";
import { useAlertContext } from "../AlertContext/AlertContext";
// import * as yup from "yup";

// const yupSchema = yup.object({
//   password: yup.string().min(3).required(),
//   password1: yup.string().min(3).required(),
// });

const FakeRegisterComponent = () => {
  const { users, setUsers } = useUserContext();
  const { showNotification } = useAlertContext();
  const [vis, setVis] = useState(false);

  const formik = useFormik({
    initialValues: {
      login: "poklik",
      password: "123123",
      name: "Bartek",
      surname: "Nowak",
      avatar: "https://picsum.photos/150/150",
    },

    ///PMAIETAJ O CYKLU ZYCIA KOMPONENTU/////
    onSubmit: (values) => {
      const isUserLoginFree = users.some(
        (user) => user["login"] === values.login
      );

      if (isUserLoginFree) {
        showNotification("Taki użytkownik już istnieje", "success", 5);
      } else {
        setUsers((prev) => [...prev, values]);
        showNotification("Jesteś pierwszy o takim loginie", "success", 5);
        setVis(!vis);
      }
    },

    // validationSchema: yupSchema,
  });

  return (
    <div className="registerComponent">
      {vis ? (
        ""
      ) : (
        <div>
          <div>Fake Register Component</div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="login">Login</label>
              <input
                type="text"
                id="login"
                name="login"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.login}
              />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div>
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            <div>
              <label htmlFor="avatar">avatar</label>
              <input
                type="text"
                id="avatar"
                name="avatar"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.avatar}
              />
            </div>
            {/* <div>
          <label htmlFor="password2">password2</label>
          <input
            type="text"
            id="password2"
            name="password2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password2}
          />
        </div> */}
            <button type="submit">Send</button>
          </form>

          {/* {formik.touched.login && formik.errors.login ? (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      ) : null}
      {formik.touched.password && formik.errors.password ? (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      ) : null} */}
        </div>
      )}
    </div>
  );
};

export default FakeRegisterComponent;

//Formik biblioteka?
