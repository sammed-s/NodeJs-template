
import {getUsersFromService} from "../services/userService.js"

export const getUsers = (req,res)=>{
    try {

        const users = getUsersFromService(req)

        res.status(200).json({
            message : "Fetched successfully!",
            data : users
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}