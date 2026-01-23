//4 *4 star pattern

for(let i = 0; i < 4; i ++){
    let row = ""
    for(let j = 0; j < 3; j++){
        row = row + " *";
    }
    console.log(row);
    
}


//increasing star pattern

for(let i = 0; i < 4; i ++){
    let row = ""
    for(let j = 0; j < i +1; j++){
        row = row + " *";
    }
    console.log(row);
    
}

//increasing number patteren

for(let i = 0; i < 4; i ++){
    let row = ""
    for(let j = 0; j < i +1; j++){
        row = row + (j+1);
    }
    console.log(row);
    
}

// decreasing number pattern

for(let i = 0; i <= 4; i ++){
    let row = ""
    for(let j = 5; j > i ; j--){
        row = row + j ;
    }
    console.log(row);
    
}
//star pattern name i dont know

for(let i = 0; i <= 4; i++){
    let row = "";
    for(let j=0 ; j < 5 - (i+1); i++){
        row = row + "";
    }
    for(let k=0; k < i+1; k++){
        row = row + "*"
    }
    console.log(row);
    
}

//1,10,101

let n = 5;

for(let i = 0; i < n; i++){
    let row = "";
    let switch1 = 1;
    for(let j=0 ; j < i+1; j++){
         row = row + switch1;
        
        if(switch1==1){
            switch1 = 0
        }else{
            switch1 = 1
        }
       
    }
  
    console.log(row);
    
}
