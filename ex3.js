const fullNames = ["James Milner","MANIZABAYO Elie", "NSHIMIYIMANA Theogene", "Bill Gate"];
const initials = fullNames.filter(name=>name.length>10).map(name=> name.split(" ").map(name=>name.charAt(0)).join(""))
  console.log(initials)
      
     // for (const element of initials) {
    //     if(element.length>10){
    // const shortNames = element.split(' ')
     //console.log(element)
     //console.log(shortNames.map(name=>name.charAt(0)).join(""))
     
    
   
  
   
                    