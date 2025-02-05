"use server"
import fs from "fs/promises"
export const submitForm = async(e) => {
       console.log(e.get("name"),e.get("email"));
       let a = await fs.writeFile("harray.txt",`Hey i am ${get("name")} and My Email is ${get("email")}` )
 }