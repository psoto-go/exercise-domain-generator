/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateUrls(pronuns, arr2, arr3) {
  let results = [];
  for (var i in pronuns) {
    for (var j in arr2) {
      for (var k in arr3) {
        results.push(pronuns[i] + "." + arr2[j] + "." + arr3[k] + "\n");
      }
    }
  }
  return results;
}
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let r = generateUrls(pronoun, adj, noun);
  let container = document.getElementById("urls");
  container.innerHTML = r;
};