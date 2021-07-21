function login(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();

    console.log(email,password);

    let userList=readUsers();
        for (let i = 0; i<userList.length; i++){
            let user=userList[i];
        if(user.email === email && user.password === password){
            found=true;
            console.log("You are logged in")
        }
    }


    if(!found){
        console.error("Invalid credentials");
    }
}

function init(){

        //hook events
        $("#btnLogin").click(login);
    }
window.onload=init;