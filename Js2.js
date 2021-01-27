ii.innerHTML="I really really love you";
var randomColor = Math.floor(Math.random()*16777215).toString(16);
ii.style.color="#"+randomColor;

iii.innerHTML="and this is the truth";
var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
iii.style.color="#"+randomColor1;

iiii.innerHTML="lola + bunny";
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
iiii.style.color="#"+randomColor2;

var ii=document.getElementById("output1");

var iii=document.getElementById("output2");

var iiii=document.getElementById("output3");


ii.innerHTML="i love you baby very very much.";

fetch(
  "https://cors-anywhere.herokuapp.com/https://ondemand.websol.barchart.com/getQuote.json?apikey=71f698950c9cdadc3d19bb7411177a78&symbols=ADBE",
  {
    method: "GET",
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
      "Access-Control-Allow-Origin": "*",
    },
  }
)
  .then((res) => res.json())
  .then((data2) => {
     // console.log(data2)
    let z=data2.results[0].lastPrice;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ii.style.color="#"+randomColor;
    ii.innerHTML="i love you baby very very much.";
  })
  .catch((err) => console.log(err.message));

  fetch("https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD",
  {
      method: "GET",
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
  .then((res) => res.json())
.then((data3) => {
    //console.log(data3)
  let z2=(data3.rates.INR).toFixed(2);
  var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  iii.style.color="#"+randomColor2;
  iii.innerHTML="even if i dont say it. i really really love you.";
})
.catch((err) => console.log(err.message));

var j = setInterval(async () => {
    fetch(
        "https://cors-anywhere.herokuapp.com/https://ondemand.websol.barchart.com/getQuote.json?apikey=71f698950c9cdadc3d19bb7411177a78&symbols=ADBE",
        {
          method: "GET",
          headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((res) => res.json())
        .then((data2) => {
           // console.log(data2)
          let z=data2.results[0].lastPrice;
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          ii.style.color="#"+randomColor;
          ii.innerHTML="i love you my baby";
        })
        .catch((err) => console.log(err.message));

        fetch("https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD",
        {
            method: "GET",
            headers: {
              accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "accept-encoding": "gzip, deflate, br",
              "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => res.json())
      .then((data3) => {
          //console.log(data3)
        let z2=(data3.rates.INR).toFixed(2);
        var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
        iii.style.color="#"+randomColor2;
        iii.innerHTML="i love you babe";
      })
      .catch((err) => console.log(err.message));
  }, 5000);
