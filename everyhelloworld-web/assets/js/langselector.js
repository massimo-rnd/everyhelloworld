function selectLanguage(){
    if (document.getElementById("langselect").value == "0")
    {
        alert("Please select any language!");
    } else{
        var value = document.getElementById("langselect").value;
        console.log(value);
        
    }
}

function getCode(){
    //maybe do it with a database?
}