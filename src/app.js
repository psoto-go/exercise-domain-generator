/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateUrls(pronuns, arr2, arr3, point) {
  let results = [];
  for (var i in pronuns) {
    for (var j in arr2) {
      for (var k in arr3) {
        for (var h in point) {
          results.push(pronuns[i] + "." + arr2[j] + "." + arr3[k] + point[h]);
        }
      }
    }
  }
  return results;
}

function generateBr(array) {
  var finale = [];
  for (var i in array) {
    finale.push(array[i] + "<br/>");
  }
  return finale;
}
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var point = [".com", ".net", ".us", ".io,"];
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let r = generateBr(generateUrls(pronoun, adj, noun, point));
  let container = document.getElementById("urls");
  container.innerHTML = r;
};
