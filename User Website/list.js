function displayUsers(users){
    //travel the array
    for(let i=0;i<users.length; i++){
        //get each user
        let user=users[i];
        //display the user
        let syntax=
        `<tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.paymentType}</td>
            <td style="background-color:${user.color}"></td>
        </tr>`;
        $("#tblUsers").append(syntax);
    }

}

function init(){
    console.log("Listing Users");

    var users=readUsers();
    displayUsers(users);
    // hook events
    $("#btnClear").click(function(){
        clearUsers();
        location.reload();
    });
}

window.onload=init;