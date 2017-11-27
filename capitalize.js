/**
 * Created by È‰—© on 2017/10/11.
 */
var string = "i believe i am the best";
function capitalize(string){
   var words = string.split(" ");
   for(var i = 0 ; i < words.length ;i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(0)
   }
   return words.join(" ")
}
console.log(capitalize(string))

