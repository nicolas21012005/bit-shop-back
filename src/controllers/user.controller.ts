import Express from "express";
import mongoose from "mongoose";
import UserModel from "../models/user.model";

// export const createUser = (req: Express.Request, res: Express.Response) => {
//   return res.status(201).json({ msg: "usuario creado" });
// };

export const getUsers = async (req: Express.Request, res: Express.Response) => {
try{
  const User = await UserModel.find() //los usuarios existentes
  res.status(200).json({User})

}catch(error){
  console.log(error)
  return res.status(400).json({msg: "ha ocurrido un error", error})
}
}

export const createUser = async (req: Express.Request, res: Express.Response) => {

  try {

    let newUser = req.body
    const user = await UserModel.create(newUser) 
    if (user){
      return res.status(201).json({msg:user})
    }

  } catch (error) {
    console.log(error)
    return res.status(400).json({msg: "ha ocurrido un error", error})
  }
}

export const updateUser = async (req: Express.Request, res: Express.Response) => {
// {
//   id : DataToUpdate
// }
  try {

    let {dataToUpdate, _id} = req.body
    const updateData = await UserModel.findByIdAndUpdate(_id, dataToUpdate) 
    return res.status(201).json({msg: "usuario actualizado correctamente"})

  } catch (error) {
    console.log(error)
    return res.status(400).json({msg: "ha ocurrido un error", error})
  }
}




