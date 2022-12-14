import React from "react";

import { useFormik } from "formik";
import { yupSchema } from "../Validation/Val";
import { addClient } from "../Serwis/clientService";
import {useMutation,useQueryClient} from "@tanstack/react-query"
import { useAlertContext } from "../AlertContext/AlertContext";
// # Zadanie 2

// Podstrona na dodawanie klientów implementacja. <br />
// Stwórz formularz, który zawiera pola z walidacją
// * imie - pole wymagane, minimum 3 litery,
// * nazwisko - pole wymagane, minimum 3 litery,
// * ulica- pole wymagane, minimum 5 liter,
// * kod pocztowy - format 2 cyfr, następnie znak - i 3 cyfry, wymagane
// * miasto - minimum 3 litery, wymagane,
// * region - pole opcjonalne, napis, minimum 3 litery,
// * link do zdjecia - pole opcjonalne, string,
// * numer telefonu - zaczyna się od + i 11 cyfr, wymagane, <br />
// ## TODO:
// - [ ] przygotują strukturę w json-serwerze,
// - [ ] na podstronie: /clients przygotuj tabelę do wyświetlania wszystkich klientów i wyświetl: imie, nazwisko, miasto, numer telefonu i zdjęcie - mock danych,
// - [ ] po kliknięciu na kartę klienta przenieś użytkownika na nową podstronę, która wyświetla jego wszystkie dane - detale klienta, dodaj tam przycisk umożliwiający usuwanie klienta, przygotuj statyczne UI,
// - [ ] w detalach klienta dodaj przycisk edit, który przeniesie użykownika na formularz do edycji klienta, podstrona powinna zawierać przyciski cancel (przenosi na poprzednią stronę) i update (aktualizuje dane), na ten moment formularz statyczny (nie robi nic)

const ClientsAdd = () => {
  const { showNotification } = useAlertContext();
  const queryClient = useQueryClient()
  const mutation=useMutation(async (values)=>{
    await addClient(values)
  },{
    onSucces: ()=>{
      queryClient.invalidateQueries("clients")
      showNotification("Dodałeś klienta","success",3)
    },
    onError:()=>{

      showNotification("Nie udało się dodać","error",5)
    }
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      street: "",
      code: "",
      city: "",
      region: "",
      imageURL: "",
      number: "",
    },
    onSubmit: (values) => {
     mutation.mutate(values);
    },
    //validationSchema: yupSchema, //wpięcie schematu walidacji
  });

  return (
    <div className="clientsAdd">
      <div>ClientsAdd</div>
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

        <button type="submit">Send</button>
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
    </div>
  );
};

export default ClientsAdd;
