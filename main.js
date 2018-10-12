let carContiner = document.querySelector('.car-continer');
let trackContiner = document.querySelector('.track-continer');
let startBtn = document.querySelector('.start-btn');
let racingTrack = document.querySelector('.racing-section');
let lines = document.querySelectorAll('.track-line');
let carList = new List();
let trackList = new List();
let selectedList = new List();
let arrayOfIntervalKeys = [];


carList.addToList(new Merseceds('#347D38', 48, 'Mersedes'));
carList.addToList(new BMW('#1D28DC', 50, 'BMW'));
carList.addToList(new Toyota('#3887C8', 47, 'Toyota'));
carList.addToList(new Lexus('#DF912A', 51, 'Lexus'));
carList.addToList(new Audi('black', 49, 'Audi'));

trackList.addToList(new Track("Asphalt", '#D8D8D8' , 1.2));
trackList.addToList(new Track('Ice', '#C5F1F2', 0.7));
trackList.addToList(new Track('Ground', '#D9D1A1', 1));

carList.render(carList.elementList, carContiner);
trackList.render(trackList.elementList, trackContiner);

carList.elementList.forEach(function(elem){
   elem.addEventListener('click',function(){
       
       if(selectedList.list.length < 3){
           this.classList.add('red-bordered-elem');
           selectedList.list.push(carList.list[this.getAttribute('data-pos')]);
       }
       
       addElemsToStartTrack();
   });
});

trackList.elementList.forEach(function(elem){
    elem.addEventListener('click',function(){
       
        if(selectedList.selectedTrack === null){
           selectedList.selectedTrack = trackList.list[this.getAttribute("data-pos")];
           this.classList.add('red-bordered-elem');
        }
        
        addElemsToStartTrack();
       
    });
});

startBtn.addEventListener('click', function(){
    this.setAttribute('disabled', 'disabled');
    this.classList.remove('enabled-btn');
    let arrayOfStartCars = document.querySelectorAll(".ready-to-start-car");
    let selectedTrackFactor = selectedList.selectedTrack.factor;
    let selectedTrackName = selectedList.selectedTrack.type;
    arrayOfStartCars.forEach(function(elem){
        let pos = elem.getAttribute('data-pos');
        let speed = selectedList.list[pos].speed;
        selectedList.list[pos].move(elem, selectedTrackFactor, lines[pos], speed, arrayOfIntervalKeys, stopAll, selectedTrackName, arrayOfStartCars);
    });
    
});