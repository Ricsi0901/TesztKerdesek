class Kartya {
    constructor(elem, adat) {
      this.elem = elem;
     
     
      
        this[kerdes] = this.elem.children(".kerdes");
        this[v1] = this.elem.children(".valasz1");
        this[v2] = this.elem.children(".valasz2");
        this[v3] = this.elem.children(".valasz3");
        this[v4] = this.elem.children(".valasz4");
        
     
  
      this.adat = adat;
      
      
      this.setAdatok(adat);
     
    }
  
    setAdatok(ertekek) {
      
     
        this[kerdes].html(ertekek[elkerdesement]);
        this[valasz1].html(ertekek[v1]);
        this[valasz2].html(ertekek[v2]);
        this[valasz3].html(ertekek[v3]);
        this[valasz4].html(ertekek[v4]);
      
    }
    
  
   
  }