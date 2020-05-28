let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if(distance > 360) {
        return "Freezing";
    } else if (distance < 180){
        return "Really Cold ";
    } else if (distance < 100){
        return "Cold";
    } else if (distance < 60){
        return "Warm";
    }else if (distance < 40){
        return "Hot"
    }else if (distance < 30){
        return "Really Hot";
    } else{ 
        return "Boiling Hot!";
    }
}