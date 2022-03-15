import React from "react";

import { useFormik } from 'formik'
import * as Yup from 'yup'


function Form({handleNext,Reset}) {
    const formik = useFormik({
        initialValues: { name: ""},
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
            handleNext()
        },
        validationSchema: Yup.object({
            name:Yup.string().required("Required"),
        
           
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


            
            

                <br />
                <input type="submit" />
                <input type="reset" onClick={()=>Reset()}/>

            </form>
        </>
    )
}

export default Form