var num = Math.floor(Math.random()*10);
function numToWords(num){

    var words = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var numString = num.toString();
     if(num == 0) return 'zero';
     if(num<10){
        return words[num];
     }
}
console.log(numToWords(num));