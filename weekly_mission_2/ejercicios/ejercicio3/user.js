export default class User{


    constructor(userName,name,bio,age){

        this.userName = userName
        this.name = name
        this.bio = bio
        this.age = age


    }
   

    getNameandUser(){

        return `this is the name: ${this.name} and this is the username: ${this.userName} `
    }



}
