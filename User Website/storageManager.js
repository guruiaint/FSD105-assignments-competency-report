function saveUser(user){
     //load old data
     let data=readUsers();

     //merge
     data.push(user);

     //save
    let val=JSON.stringify(data); //parse object into JSON string
    localStorage.setItem("users",val);
}

function readUsers(){
   
    let data=localStorage.getItem("users");
    if(!data){
        return[];
    }else{
        let list=JSON.parse(data); //parse string back into object
        return list;
    }
}

function clearUsers(){
    localStorage.removeItem("users");
}

function clearStorage(){
    //WARNING: this will clear all data
    localStorage.clear();
}