const url = 'https://reqres.in/api/users';
var targetTag = document.getElementById('main-content');
targetTag.style.display = 'none';

async function getDataUsingFetch() {
    let response = await fetch(url);
    let data =await response.json();
    console.log(data);
    targetTag.style.display = 'block';
    targetTag.innerText = "Using Fetch " + "\n\n" + JSON.stringify(data);
}

async function getDataUsingAxios() {
    let response = await axios.get(url);
    let data =  response.data;
    console.log(data.data);
    targetTag.style.display = 'block';
    targetTag.innerText = "Using Axios " + "\n\n" + JSON.stringify(data);
}

async function getDataUsingJQuery() {
    $.ajax({
        url : url,
        type : "GET", 
        success : (result) => {
            console.log(result.data);
            targetTag.style.display = 'block';
            targetTag.innerText = "Using JQuery " + "\n\n" + JSON.stringify(result);
        } ,
        error : (error) => {
            console.log(error);
        }
    })
}

async function getDataUsingXMLHttpRequest() {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = async () => {
        if(request.status === 200) {
            let response = request.response;
            console.log(response);
            targetTag.style.display = 'block';
            targetTag.innerText = "Using XMLHttpRequest " + "\n\n" + response;     
        }
        else {
            console.log(request.status);
        }
    }
}


var makeAPICall = () => {
    var selectedType = document.getElementsByName('API_Select');
    for(let i of selectedType) {
        if(i.checked) {
            selectedType = i.value;
            break;
        }
    }
    
    if(!(typeof(selectedType) === typeof("")))
        console.log("Please Select any type");
    else {
        if(selectedType === "XMLHttpRequest") {
            getDataUsingXMLHttpRequest();
        }
        else if(selectedType === "fetch") {
            getDataUsingFetch();
        }
        else if(selectedType === "Axios") {
            getDataUsingAxios();
        }
        else {
            getDataUsingJQuery();
        }
    }
    
}
