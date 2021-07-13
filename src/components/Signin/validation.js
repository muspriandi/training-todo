import * as Yup from 'yup'

export const userData = {
    username: "",
    password: ""
}

export const validationSchema = function ( values) {
    return Yup.object().shape({
        username: Yup.string()
        .min(5, "Username must be 5 characters at min")
        .required("Username is required"),
        password: Yup.string()
        .required("Password is required"),
    })
}

export const defaultValue = Object.assign({}, userData);