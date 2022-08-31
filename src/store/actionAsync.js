import { loginService } from "../services"
import { saveUser } from "./authReducer"

export const loginAction = (loginCredentials) => {

    return async (dispatch) => {
        try {
            const { data } = await loginService(loginCredentials)
            dispatch(saveUser(data))

        } catch (error) {
            console.log("error::", error)
        }
    }
}