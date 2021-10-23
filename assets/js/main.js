// HERE WE TRY TO GIVE DIFFERENT COLOR FOR DIFFERENT CATEGORY FOR OUR TASK

var cat = document.getElementsByClassName("category-color");

for(let i of cat){
    if(i.innerText=="DSA"){
        i.style.backgroundColor = "#008000";
        i.style.borderRadius = "50px";
        i.style.boxShadow =  "5px 5px 16px #005300","-5px -5px 16px #00ad00";


    }else if(i.innerText == "Coding"){
        i.style.backgroundColor = "#da5e0b";
        i.style.borderRadius = "50px";
        i.style.boxShadow =  "5px 5px 16px #8e3d07","-5px -5px 16px #ff7f0f";

    }else if(i.innerText == "Workout"){
        i.style.backgroundColor = "#42229b";
        i.style.borderRadius = "50px";
        i.style.boxShadow =  "5px 5px 16px #2b1665","-5px -5px 16px #592ed1";

    }else if(i.innerText == 'College'){
        i.style.backgroundColor = "#14c4db";
        i.style.borderRadius = "50px";
        i.style.boxShadow =  "5px 5px 16px #0d7f8e","-5px -5px 16px #1bffff";

    }else{
        i.style.backgroundColor = "#771692";
        i.style.borderRadius = "50px";
        i.style.boxShadow =  "5px 5px 16px #0d7f8e","-5px -5px 16px #1bffff";

    }
}