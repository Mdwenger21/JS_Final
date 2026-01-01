// Add mouse over function to the images
window.addEventListener('load', (event) => {
    console.log("Window loaded running base setup functions")
    Startup();
    console.log("Functions complete")
})

function Startup(){
    var images = document.getElementsByTagName('img');

    for (var i = 0; i<images.length;i++){
        images[i].addEventListener('mouseover', (event) => {HandleMouseOver(event.target)})
        images[i].addEventListener('focus', (event) => {HandleMouseOver(event.target)})
        images[i].addEventListener('mouseout', (event) => {HandleMouseOut(event.target)})
        images[i].addEventListener('blur', (event) => {HandleMouseOut(event.target)})
        images[i].tabIndex=0;   
    }

    PickRandomImage(images);
}

function PickRandomImage(images){
    let RanNum = Math.floor(Math.random()*images.length)
    HandleMouseOver(images[RanNum])
}

function HandleMouseOver(Photo){
    document.getElementsByClassName("Photo_Div")[0].style.backgroundImage = "URL("+Photo.src+")";
    document.getElementById("Photo_Alt_Text").hidden = false;
    document.getElementById("Photo_Alt_Text").innerHTML = Photo.alt
}

function HandleMouseOut(Photo){
    document.getElementsByClassName("Photo_Div")[0].style.backgroundImage = "URL()";
    document.getElementById("Photo_Alt_Text").hidden = true;
    document.getElementById("Photo_Alt_Text").innerHTML = ""
}