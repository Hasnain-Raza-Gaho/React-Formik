import React from "react";
import { useFormik } from "formik";
import "./App.css";
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      Status:'',
      Country:''

    },
    onSubmit: (values) => {
      console.log("form submited", values, formik.errors);
      
    },
    validationSchema: Yup.object({
      username: Yup.string().max(10,"less than 10").required("thi sis rweq fild"),
      name: Yup.string().max(10,"less than 10").required("thi sis rweq fild"),
      email: Yup.string().max(10,"less than 10").required("thi sis rweq fild")
      .email('please provide  a valid email')
      
    })
  });
  console.log( formik.errors)
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Enter UserName"
        />
        {formik.errors.username && <p style={{color:'red'}} >{formik.errors.username}</p>  }
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter Name"
        />
        {formik.errors.name && <p style={{color:'red'}} >{formik.errors.name}</p>  }

        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter Email"
        />

{formik.errors.email && <p style={{color:'red'}} >{formik.errors.email}</p>  }

        <p>Your Status</p>
        <input
          type="radio"
          name="Status"
          value="Single"
          onChange={formik.handleChange}
        />
        <label>Single</label>
        <input
          type="radio"
          name="Status"
          value="Commited"
          onChange={formik.handleChange}
        />
        <label>Commited</label>


        <input
          type="radio" 
          name="Status"
          value="Coder"
          onChange={formik.handleChange}
        />
        <label>Coder</label>


      <select name="country" onChange={formik.handleChange}>
        <option value={null} disabled>Select Country</option>
        <option value="Pak">Pakistan</option>
        <option value="China">China</option>
        <option value="Afg">Afghanistan</option>
      </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
