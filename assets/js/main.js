var cat = document.getElementsByClassName("category-color");

for(let i of cat){
    if(i.innerText=="DSA"){
        i.style.backgroundColor = "green";
    }else if(i.innerText == "Coding"){
        i.style.backgroundColor = "yellow";

    }else if(i.innerText == "Workout"){
        i.style.backgroundColor = "grey";

    }else if(i.innerText == 'College'){
        i.style.backgroundColor = "blue";

    }else{
        i.style.backgroundColor = "pink";

    }
}