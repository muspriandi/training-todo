import * as Yup from 'yup'

export const todoItem = {
    todoItemName: "",
    todoDeadline: ""
}

export const validationSchema = function ( values) {
    return Yup.object().shape({
        todoItemName: Yup.string()
        .min(5, "Todo Item must be 5 characters at min")
        .required("Todo Item is required"),
        todoDeadline: Yup.string()
        .required("Deadline is required")
    })
}

export const defaultValue = Object.assign({}, todoItem);