import { users } from "../data/userData.js"


export const getUsersFromService = (req) => {
    try {
        return users;
    } catch (error) {
        return error.message
    }
}