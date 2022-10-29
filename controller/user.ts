import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source"
import { getRepository } from "typeorm";

interface UserBody {
  firstName: string,lastName: string,
  Dateofbirth:string,age:number,
  standard: number, city: string, 
  skills: string,Briefintroduction: string,
  Enrollmentfromdate: string,Enrollmenttodate: string,
  status: string,subject: string
}
export const getUsers = async (req: Request, res: Response) => {
    try {
      const users = await AppDataSource.manager.find(User)
      console.log("Loaded users: ", users)
  
      return res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
   // const user = await getRepository(User).findOneBy({ id: parseInt(id) });
    const user = await AppDataSource.manager.findOneBy(User, {
      id: parseInt(id)
  })
  
      if (!user) return res.status(404).json({ message: "User not found" });
  
      return res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const createUser = async (
    req: Request,
    res: Response
  ) => {
     const user = await AppDataSource.getRepository(User).create(req.body)
      const results = await AppDataSource.getRepository(User).save(user)
      return res.send(results)
  }
  
  export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
     const user = await AppDataSource.manager.findOneBy(User, {
      id: parseInt(id),
  })
      if (!user) return res.status(404).json({ message: "Not user found" });
  
      await AppDataSource.getRepository(User).update({ id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
   }
  }
};    