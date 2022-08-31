import axios from "axios"
import { baseUrl } from "../config"

const signupService = (userData) => axios.post(baseUrl, userData)

const loginService = (loginCredentials) => axios.post(baseUrl, loginCredentials)

export { signupService, loginService }
