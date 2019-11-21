window.addEventListener("load", getLoaded);
function getLoaded(){
  Init();
  load();
}

function Init() {
    console.log("Init");
    var apiKey = "ac4c1819fc814b4da5f6a7d81ecc1596";

    var category = ["business"];

    var callbackFunction = [
        
        
        
        { news: businessNews }
        

    ];


    for (var i = 0; i < category.length; i++) {
        Request(category[i], apiKey, callbackFunction[i].news);
    }

    
}

function Request(category, apiKey, callback) {
  var url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=${apiKey}`;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
          var errStatus = xhr.status;
          var errText = xhr.statusText;
          console.log(errStatus + ": " + errText);
      } else {
          var data = JSON.parse(xhr.responseText);
          callback(data);
      }
  };
}

function businessNews(news) {
  console.log("businessNews", news.articles);

  var businessElem = document.querySelector("#business");
  console.log(businessElem);

  for (var i = 0; i <5; i++) {

      var h3 = document.createElement('h3');
      h3.className = "news_title";
      h3.innerHTML = news.articles[i].title;
      businessElem.appendChild(h3);

      var img = document.createElement('img');
      img.setAttribute("src", news.articles[i].urlToImage);
      img.setAttribute("alt", news.articles[i].title);
      img.className = "news_img";
      businessElem.appendChild(img);

      var desc = document.createElement('p');
      desc.className = "news_description";
      desc.innerHTML = news.articles[i].description;
      businessElem.appendChild(desc);

      var author = document.createElement('span');
      author.className = "news_author";
      author.innerHTML = news.articles[i].author;
      businessElem.appendChild(author);

      var publishedAt = document.createElement('span');
      publishedAt.className = "news_publishedAt";
      publishedAt.innerHTML = news.articles[i].publishedAt;
      businessElem.appendChild(publishedAt);
  }
}








//document.querySelector('button').addEventListener('click',load);
//https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json
function load(){
  let url='https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    fetch(url)
    .then(
        function(response){
            console.log(response);
            return response.json();
        }
    )
    .then(
      
        function(data){
          var сurrencyTable = document.getElementById('сurrency');
          let headerTr = document.createElement('tr');
    headerTr.innerHTML = `<th>Код валюти</th><th>Валюта</th><th>Курс</th>
                         <th>Шифр валюти</th><th>Дата</th>`;

                         headerTr.style.border="solid  1px rgb(47, 255, 220)";
                         
            сurrencyTable.appendChild(headerTr);
 // console.log(Array.isArray(data.workers));
          for (var i=0; i<data.length; i++){
              ;       
    
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${data[i].r030}</td><td>${data[i].txt}</td>
              <td>${data[i].rate}</td><td>${data[i].cc}</td>
              <td>${data[i].exchangedate}</td>`;
              tr.style.border="solid 1px rgb(47, 255, 220)";
              
              сurrency.appendChild(tr);

              


            }
        }
    )
}
 


// Калькулятор валют
function moneyConverterD(valNum){
  let url='https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    fetch(url)
    .then(
        function(response){
            console.log(response);
            return response.json();
        }
    )
    .then(
      
        function(data){
          for (var i=0; i<data.length; i++){
        document.getElementById("outputgrn").innerHTML=valNum*data[27].rate.toFixed(2);
        }}
    )

    
}

function moneyConverterE(valNum){
 let url='https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    fetch(url)
    .then(
        function(response){
            console.log(response);
            return response.json();
        }
    )
    .then(
      
        function(data){
         for (var i=0; i<data.length; i++){
        document.getElementById("outputgrne").innerHTML=valNum*data[34].rate.toFixed(2);
        }}
    )

    
}





 




       var slideIndex = 0;
       showSlides();
       
       function showSlides() {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
         }
         slideIndex++;
         if (slideIndex > slides.length) {slideIndex = 1}    
         for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";  
         dots[slideIndex-1].className += " active";
         setTimeout(showSlides, 2000); 
       }





       var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'line',

    
    data: {
        labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень','Серпень', 'Вересень', 'Жовтень', 'Листопад'],
        datasets: [{
            label: 'Комерційний курс долара США',
            backgroundColor: '#1b7fd0',
            borderColor: '#1b7fd0',
            data: [28.1750, 27.1750, 27.0500, 26.8600, 26.3250, 26.3750,25.9050,25.2950,24.8250,24.8250,24.4050]
        }]
    },

   
    options: {}
});