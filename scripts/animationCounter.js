let counterBlock = document.querySelector(".counter")
let counterData = document.querySelectorAll(".counter__title span");
let counterList = Array.from(counterData);

let currValue = [];
let listOfAnimation = [];

for (let i = 0; i < counterList.length; i++){
    currValue.push(0);
        setInterval((elem)=>{
            let maxValue = +elem.getAttribute("data-count");
            currValue[i]
            if(counterList[i].getBoundingClientRect().top < window.innerHeight * .9){
                if(currValue[i]<maxValue){
                    currValue[i]++;
                } else {
                    clearInterval();
                }
                
                elem.innerText = currValue[i];
            }
        }, 
        speedOfAnimation(counterList[i].getAttribute("data-count")),
        counterList[i]);
}


function speedOfAnimation(value){
    let speed = 1000/value;
    return speed;
}




