function addElemsToStartTrack(){
    if(selectedList.list.length === 3 && selectedList.selectedTrack){
        
        
        
        for(let i = 0; i < lines.length; i++){
            let carElem = selectedList.list[i].createElemInLine();
            carElem.setAttribute('data-pos', i);
            lines[i].appendChild(carElem);
            lines[i].parentNode.style.background = selectedList.selectedTrack.color;
        }
        
        racingTrack.style.display = "block";
        startBtn.classList.add('enabled-btn');
        startBtn.removeAttribute('disabled');
        
    }
}
function stopAll (arr, arrOfCars){
    let linerLines = document.querySelectorAll('.liner-grand-line');
    for(let i = 0; i < arrOfCars.length; i++){
        arrOfCars[i].childNodes[0].removeChild(linerLines[i]);
    }
    arr.forEach(function(key){
        clearInterval(key);
    });
}