import UserModel from "../model/userSchema.js";
import bcrypt from "bcryptjs"

class Usercontroller {
    static createUser = async (req, res) => {
            const {name,email,password,username,order,addresses}=req.body
            let existingUser=null
            try {
                 existingUser=await UserModel.findOne({email})
            } catch (error) {
                console.log(error)

            }
            if(existingUser){
                return res.status(204).json({message:"User Exist"})
            }




            const hashPassword = await bcrypt.hash(req.body.password,10);


            const NewUser=new UserModel({
                name,
                email,
                password:hashPassword,
                username,
                order,
                addresses

            });



            try {
               await NewUser.save()

            } catch (error) {
                console.log(error)
            }
            return res.status(201).json({NewUser})
        }


    static loginUser = async (req, res) => {
                const { email, password } = req.body;
                let existingUser;
                try {
                  existingUser = await UserModel.findOne({ email })                      //.populate('orders')
                } catch (error) {
                  return console.log(error);
                }
                if (!existingUser) {
                  return res.status(404).json({ message: "Couldnt Find User By This Email" });
                }

                const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
                if (!isPasswordCorrect) {
                  return res.status(400).json({ message: "Incorrect Password" });
                }
                return res.status(200).json({ message: "Login Successfull", user: existingUser });


        }



}





export default Usercontroller