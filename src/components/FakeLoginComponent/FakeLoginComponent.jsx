import React from "react";
import { useUserContext } from "../UserContext/UserContext";
import { useFormik } from "formik";

const FakeLoginComponent = () => {
  const { isLogged, users, logIn } = useUserContext();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },

    ///PMAIETAJ O CYKLU ZYCIA KOMPONENTU/////
    onSubmit: (values) => {
      if (
        users[0].login === formik.values.login &&
        users[0].password === formik.values.password
      ) {
        logIn();
      } else {
        console.log("błędne hasło");
      }
    },

    // validationSchema: yupSchema,
  });

  return (
    <div className="loginComponent">
      <div>Fake Login Component</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login2"
            name="login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password2"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
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
  );
};

///sprawdzam czy uzytkownik jest i czy haslo jest ok
export default FakeLoginComponent;
