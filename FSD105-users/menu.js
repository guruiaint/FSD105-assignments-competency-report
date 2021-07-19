function setNavInfo(){
    //get the user array
    let list=readUsers();
    let count=list.length;

    //update label
    $(".menu-info > label").text(count + " users");
}
setNavInfo();