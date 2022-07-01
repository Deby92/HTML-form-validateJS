/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const fields = {
  Card: false,
  Cvc: false,
  Ammount: false,
  FirstName: false,
  LastName: false,
  City: false,
  State: false,
  PostalCode: false,
  WeAccept: false,
  Message: false
};
inputs.forEach(input => {
  input.addEventListener("keyup", validateFormulario);
  input.addEventListener("blur", validateFormulario);
});

formulario.addEventListener("submit", e => {
  e.preventDefault();

  const weAccept = getElementById("weAccept");
  if (
    fields.card &&
    fields.cvc &&
    fields.ammount &&
    fields.firstName &&
    fields.lastName &&
    fields.city &&
    fields.state &&
    fields.postalCode &&
    fields.message &&
    weAccept.checked
  );
  {
    formulario.reset();

    document
      .getElementById("alert.alert-danger.m-3")
      .classList.add("alert.alert-danger.m-3-activo");
  }
    else {
        document.getElementById('alert.alert-danger.m-3').classListAdd('alert.alert-danger.m-3-activo');
    }
});
