var Water = function Water(red, blue){
    var blueI=0;
    var redI=0;
    var blueResult=[];
    while (blueI<blue.length && redI<red.length){
        if (red[redI]>blue[blueI]) {
            blueResult.push({['Bottle number ' + blueI +' from']: redI+1 , quantity: blue[blueI]});
            red[redI] = red[redI] - blue[blueI];
            blueI++;
        } else {
            blueResult.push({['Bottle number ' + blueI +' from']: redI+1 , quantity: red[redI]});
            blue[blueI] = blue[blueI] - red[redI];
            red[redI] = 0;
            redI++;
        }
    }
    return blueResult;
}
console.log('water is requred');
module.exports = Water;
