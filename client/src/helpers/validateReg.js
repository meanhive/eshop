import { useState } from 'react'
import { omit } from 'lodash'

function useValidate() {
    const [errors, setErrors] = useState({})

    const errPrint = (prop, msg) => {
        setErrors({ ...errors, [prop]: msg })
    }

    const validate = (name, value) => {
        // console.log('name =', name + ", value =" + value);
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name, "Name field must be filled")
                } else if (value.length < 3) {
                    errPrint(name, "Name atleast have 3 letters")
                } else if (!new RegExp(/^[a-z A-Z\s]+$/).test(value)) {
                    errPrint(name, "Invalid Name")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;
            case "email":
                if (value.length === 0) {
                    errPrint(name, "Email field must be filled")
                } else if (!new RegExp(/^[a-z0-9\s]+@[a-z\s]+\.[(com|in|co.in|org|net)\s]+$/).test(value)) {
                    errPrint(name, "Invalid Email Format")
                } else {
                    let newOb = omit(errors, name)
                    setErrors(newOb)
                }
                break;
            case "mobile":
                if (value.length === 0) {
                    errPrint(name, "Mobile field must be filled")
                } else if (!new RegExp(/^[6-9]\d{9}$/).test(value)) {
                    errPrint(name, "Invalid Indian Mobile Number")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb)
                }
                break;
            case "password":
                if (value.length === 0) {
                    errPrint(name, "password field must be filled")
                }
                // else if (value.length > 10) {
                //     errPrint(name, "password should not greater than 10 characters")
                // }
                else if (value.length < 6) {
                    errPrint(name, "password should contain min 6 characters")
                } else if (!new RegExp(/^[a-z A-Z 0-9\s&*#-]+$/).test(value)) {
                    errPrint(name, "password can include only  a-z, A-Z, 0-9, & * # - characters ")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;
            default:
                break;
        }
    }

    return {
        errors,
        validate
    }
}

export default useValidate
