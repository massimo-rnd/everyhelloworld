function selectLanguage(){
    if (document.getElementById("langselect").value == "0")
    {
        alert("Please select any language!");
    } else{
        var value = document.getElementById("langselect").value;
        console.log(value);
        getCode(value);
    }
}

function getCode(codelanguage){
    //maybe do it with a database?
    var client = new XMLHttpRequest();
    client.open('GET', '/langstorage/' + codelanguage);
    client.onreadystatechange = function() {
    document.getElementById("codearea").value = client.responseText;
    }
    client.send();
}