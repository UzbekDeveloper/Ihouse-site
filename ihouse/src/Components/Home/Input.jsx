import React, { useState, useCallback } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
// Translator
import { useTranslation } from 'react-i18next';


const Input = () => {
  // Translator
  const { t } = useTranslation();


  // Req, res axios
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();

  const handleChange = useCallback((setState, event) => {
      setState(event.target.value);
  }, []);
  
  const handleSubmit = useCallback(async () => {
    const response = await axios.post("/api/form", {
      name,
      email,
      subject,
    });
    console.log(response);
  }, [name, email, subject]);


  return (
    <div>
      <div className="inp-home d-flex justify-content-center align-items-start">
        <form onSubmit={handleSubmit}  className="input-home site-width site-width d-flex justify-content-around justify-content-center">
          <input
            name="name"
            onChange={handleChange.bind(null, setName)}
            type="text"
            placeholder={t("home.inpName")}
            className="input-name"
          />
          <input
            name="subject"
            onChange={handleChange.bind(null, setSubject)}
            type="text"
            placeholder={t("home.inpNubmer")}
            className="input-name"
          />
          <Button
            variant="light"
            class="btn btn-primary"
            type="submit"
            // type="submit"
          >
            {t("home.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Input
