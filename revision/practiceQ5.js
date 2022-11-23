function sam (x, y){
    if((x + y == 15||x - y == 15)){
        return true;
    }
    else if((x == 15 || y == 15)){
        return true;
    }
    else{
        return false;
    }
}
console.log(sam(1, 1))