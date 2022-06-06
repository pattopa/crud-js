
import {v4 as uuidv4} from "uuid"
let users=
[{names: "ihame gilbert",
age: "24",
message: "hello",
createDate: "21-11-2022",
id: uuidv4()},
{names: "iranzi aimable",
age: "25",
message: "hello",
createDate: "21-01-2022",
id: uuidv4()},
{names: "ngirumwami dan",
age: "26",
message: "hello",
createDate: "10-11-2022",
id: uuidv4()}]

export const getUser=function(req,res){
    res.json(users)
}

export const createUser= function(req,res){
    const{names,age,message,createDate} =req.body
users.push({
    names,
    age,
    message,
    createDate,
    id: uuidv4()
})
res.json(users)
}

export const getOneUser=function(req,res){
    const userid=req.params.id
    const user=users.find(function(user){
        return user.id == userid
    })
    res.json(user)
}


export const deleteUser=function(req,res){
    const userid = req.params.id

    users =users.filter(function(user){
        return user.id !=userid
    })
    res.json(users)
}

export const updateUser=function(req,res){
    const userid = req.params.id
    const {names,age,message,createDate}=req.body

    users =users.map(function(user){
        if (user.id == userid) {
            return {
                names,
                age,
                message,
                createDate,
                id: user.id
            }
        }
        return user
    })
    res.json(users)
}

