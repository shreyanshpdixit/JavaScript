function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        const length = names.length;
        
        const randomIndex = Math.floor(Math.random() * length);
        
        const selectedName = names[randomIndex];
    
    return `${selectedName} is going to buy lunch today!`;
    /******Don't change the code below*******/    
    }