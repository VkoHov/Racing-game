class List {
    constructor(){
        this.selectedTrack = null;
        this.list = [];
        this.elementList = [];
        this.pos = 0;
    }
    
    addToList (item){
        this.list.push(item);
        let createdElem = item.createElem();
        createdElem.setAttribute('data-pos', this.pos);
        this.pos++;
        this.elementList.push(createdElem);
    }

    render(arr, continer){
        for(let i = 0; i < arr.length; i++){
            continer.appendChild(arr[i]);
            
        }
    }
}

