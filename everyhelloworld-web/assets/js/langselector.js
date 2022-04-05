function selectLanguage(){
    if (document.getElementById("langselect").value == "")
    {
        alert("Please type in a language!");
    } else{
        var value = document.getElementById("langselect").value;
        console.log(value);
        getCode(value);
    }
}

function getCode(codelanguage){
    //check if language is available

    var langfile = '/langstorage/' + codelanguage;

    if (UrlExists(langfile) == true){
        var client = new XMLHttpRequest();
        client.open('GET', '/langstorage/' + codelanguage);
        client.onreadystatechange = function() {
            document.getElementById("codearea").value = client.responseText;
        }
        client.send();
    }else{
        alert("Language not available")
    }
}

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}