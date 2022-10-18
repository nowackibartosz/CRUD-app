import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const yupSchema = yup.object({
  name: yup.string().min(3).required("name min 3"),
  surname: yup.string().min(3).required("surname min 3"),
  street: yup.string().min(5).required("street min 5"),
  code: yup.number(5).min(5).required("2cyfry - 3 cyfry"),
  // code: yup.number(5).matches(/^[0-9]{5}$/, "Must be exactly 5 digits"),

  // .matches(/d{2}-d{3}/)
  city: yup.string().min(3).required("city min 3"),
  region: yup.string().min(3).required("region min 3"),
  imageURL: yup.string().min(5).required("image"),
  // number: yup.string().includes("+11").required("DO +11"),
});






const ClientsIdEdit = ({clientData }) => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      name: clientData[id].name,
      surname: clientData[id].surname,
      street: clientData[id].street,
      code: clientData[id].code,
      city: clientData[id].city,
      region: clientData[id].region,
      number: clientData[id].number,

    },

    onSubmit: (values) => {
      
      clientData[id].push(values);
      console.log(clientData)
      ///??????????????????????////
    
    },
    validationSchema: yupSchema, //wpięcie schematu walidacji
  });



  return (
    <div>
     
     <form onSubmit={formik.handleSubmit}>
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
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
          />
        </div>
        <div>
          <label htmlFor="code">Post-Code</label>
          <input
            type="text"
            id="code"
            name="code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.code}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </div>
        <div>
          <label htmlFor="region">Region</label>
          <input
            type="text"
            id="region"
            name="region"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.region}
          />
        </div>
        <div>
          <label htmlFor="imageURL">imageURL</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageURL}
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
        </div>

        <button type="submit">SAVE</button>
      </form>

      {formik.touched.name && formik.errors.name ? (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      ) : null}
      {formik.touched.surname && formik.errors.surname ? (
        <p style={{ color: "red" }}>{formik.errors.surname}</p>
      ) : null}
      {formik.touched.street && formik.errors.street ? (
        <p style={{ color: "red" }}>{formik.errors.street}</p>
      ) : null}
      {formik.touched.code && formik.errors.code ? (
        <p style={{ color: "red" }}>{formik.errors.code}</p>
      ) : null}
      {formik.touched.city && formik.errors.city ? (
        <p style={{ color: "red" }}>{formik.errors.city}</p>
      ) : null}
      {formik.touched.region && formik.errors.region ? (
        <p style={{ color: "red" }}>{formik.errors.region}</p>
      ) : null}
      {formik.touched.imageURL && formik.errors.imageURL ? (
        <p style={{ color: "red" }}>{formik.errors.imageURL}</p>
      ) : null}
      {formik.touched.number && formik.errors.mumber ? (
        <p style={{ color: "red" }}>{formik.errors.mumber}</p>
      ) : null}


      <br />
      <br />
      
      <Link to={`/clients/${id}`}>
        {" "}
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default ClientsIdEdit;
