class Track{
    constructor(type, color, factor){
        this.type = type;
        this.color = color;
        this.factor = factor;
    }
    
    createElem() {
        
        let continer = document.createElement('div');
        continer.classList.add('track-choose-continer');
        continer.classList.add('box-choosed');
        
        let trackdiv = document.createElement('div');
        trackdiv.classList.add('track-type-box');
        
        trackdiv.style.background = this.color;
        
        let dashedLine = document.createElement('div');
        dashedLine.classList.add('dashed-line');
        
        
        let trackType = document.createElement('p');
        trackType.classList.add('track-type');
        trackType.textContent = this.type;
        
        let trackFactor = document.createElement('p');
        trackFactor.textContent = 'Factor: ' + this.factor;
        
        trackdiv.appendChild(dashedLine);
        continer.appendChild(trackdiv);
        continer.appendChild(trackType);
        continer.appendChild(trackFactor);
        
        return continer;
        
    }
    
}
