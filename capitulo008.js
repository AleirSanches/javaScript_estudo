var data=[1,2,3,4,5,6];
var total=0;
for(var i=0; i < data.length ;i++){
    total+=data[i];
}
var med= total / data.length;
console.log("A merdía e "+med);

function Card( suit, rank){
    this.Suit = suit;
    this.Rank =  rank;

}

Card.suit = enumeration ({Clubs:1, Dioamonds: 2 , Heards: 3 , Spades : 4});
Card.rank = enumeration ( { Two: 2, Three :3 , Four: 4 , Five : 5 , Six: 6, Seven : 7 , Eigth: 8 , Nine: 9 , 
    Ten: 10, Jack: 11, Queen : 12, King: 13, Ace: 14 })

Card.prototype.toString() = function() {
    return this.rank.toString()+ "of" + this.suit.toString();
}

console.log(Card.prototype.toString( Two, Heards));