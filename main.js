// event
function hadleclick() {
    console.log('buttonclikeed');
    const button=document.querySelector("button")
button.classList.add('text-black');
}

function  sayhelo(event) {
    console.log("zhp iwarama",event.target)
}


const divs= document.querySelectorall('.btn');
for (const div of divs) {
    div.addEventListener('click', sayhelo);  
}




