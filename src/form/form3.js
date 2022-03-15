import React from "react";

import { useFormik } from 'formik'
import * as Yup from 'yup'


function Form() {
    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        onSubmit:(val)=>{
           

        },
        // validate: (val) => {
            
        //     let err = {}

        //     if (!val.name) {
        //         // alert("Enter name")
        //         err.name = "Enter name"

        //     }

        //     else if (!val.email) {
        //         // alert("Enter name")
        //         err.email = "Enter email"

        //     }

           

        //     else if(!val.password){
        //         err.password= "enter password"
        //     }

        //     else if((!/^(?=.*[a-z])[A-Za-z\d@$!%*?&]{1,}$/.test(val.password))){
        //         err.password="enter small letter"

        //     }
        //     else if((!/^(?=.*\d)[A-Za-z\d@$!%*?&]{1,}$/.test(val.password))){
        //         err.password="enter number"

        //     }
        //     else if((!/^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{1,}$/.test(val.password))){
        //         err.password="enter capital letter"

        //     }

        //     // else if (!/^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val.password)){
        //     //     err.password="enter Correct Password"
        //     // }

           
        
        //     return err;

        //     // console.log(val)
        // },
        onSubmit:(val)=>{
            console.log(val)
        },
        validationSchema: Yup.object({
            name:Yup.string().required("Required"),
            password:Yup.string().min(5,"max be 20 character").matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1},)(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
              ).required("Required"),
            email : Yup.string().email("invalid email")
        })

    })
    return (
        <>

            <h1>
                Form
            </h1>
            <form onSubmit={formik.handleSubmit}>


                <input type="text" id="name" onChange={formik.handleChange}
                    placeholder="Enter Value" maxLength={10} minLength={3} />


                {
                    formik.errors.name ?
                        <div style={{ color: "red" }}>{formik.errors.name}</div>

                        :
                        <></>}


                <input type="email" id="email" onChange={formik.handleChange}
                    placeholder="Enter Value" maxLength={16} />

                    {
                    formik.errors.email ? 
                   <div style={{ color: "red" }}>{formik.errors.email}</div>
                   :
                   <></>    
                }

                <input type="text" id="password" onChange={formik.handleChange}
                    placeholder="Enter Value"  />

{
                    formik.errors.password ?
                        <div style={{ color: "red" }}>{formik.errors.password}</div>

                        :
                        <></>}

                <br />
                <input type="submit" />

            </form>
        </>
    )
}

export default Form