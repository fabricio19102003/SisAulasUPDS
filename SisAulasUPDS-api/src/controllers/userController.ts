import type {Request, Response} from "express";
import * as queries from "../db/queries";

export async function getAllUsers(req:Request, res:Response) {
    try {
        const users = await queries.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users!")
        res.status(500).json({error: "Failed to get all users!"})
    }
}

export async function getUserById(req:Request, res: Response) {
    try {
        const {id} = req.params as {id: string};
        const user = await queries.getUserById(id);

        if(!user){ return res.status(404).json({error: "User not found!"}); }
        res.status(200).json(user);
        
    } catch (error) {
        console.error('Error getting the user!', error)
        res.status(500).json({error: 'Failed to load user!'})
    }
}