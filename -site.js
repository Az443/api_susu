const api = "https://breakingbadapi.com/api/characters";

async function getData(){
    try{
    const response = await fetch(api)
    const data = await response.json();
    printData(data)

    }catch(e){
        console.log("error : " , e)

    }
}


function printData(data){
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")

    header.innerHTML += `
    <select class="form-control" onchange="getChar(this.value)">
        <option> plese select </option>
        ${data.map(charachter => `<option> ${charachter.name} </option>`)}
    </select>
    `
}
async function getChar(name){
    if (name !== 'plese select'){
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json()
    
        console.log(data);
    
        content.innerHTML = `
        <h2>${data[0].name} (${data[0].nickname}) </h2>
        <h4>${data[0].portrayed}</h4>
        <img src="${data[0].img}" width="300">
        `

    }
}

getData()