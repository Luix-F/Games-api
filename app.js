function fazerget(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criarlinha(usuario){
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdIdNome = document.createElement("td");
  tdId.innerHTML = usuario.results;
  tdIdNome.onnerHTML = usuario.results;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  
  
  return linha;
}

var pg = 1;
var  direct;

function main(){
  //let data = fazerget("https://api.rawg.io/api/developers?key=47a3b9e0df574e72bf58ede4560626bf");
  //let data = fazerget("https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&page=1");
  
  //let strHtml = usuario.results[3].games[2].name;
  
  //let tabela = document.getElementById("tabela")

  //console.log(strHtml);
  
  p1.innerHTML = "";
  p2.innerHTML = "";
  p3.innerHTML = "";
  p4.innerHTML = "";
  p5.innerHTML = "";
  p6.innerHTML = "";
  p7.innerHTML = "";
  p8.innerHTML = "";
  p9.innerHTML = "";
  p10.innerHTML = "";
  p11.innerHTML = "";
  p12.innerHTML = "";
  p13.innerHTML = "";
  p14.innerHTML = "";
  p15.innerHTML = "";
  p16.innerHTML = "";
  p17.innerHTML = "";
  p18.innerHTML = "";
  p19.innerHTML = "";
  p20.innerHTML = "";
  p21.innerHTML = "";

  //console.log(usuario.results[3].games[2].name);

  //strHtml = usuario.results[3].games[2].name;
  /*
  p1.innerHTML = usuario.results[0].name;
  p1.innerHTML += `<br>`;
  */
  let data = fazerget(direct);
  let usuario = JSON.parse(data); 
  console.log(usuario);

  let i = 0;
  if (usuario.results.length > 0){ 
  let aux0 = usuario.results[i].slug;
  p1.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux0}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux0}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
} else {
  p1.innerHTML =`<p class="des">Sem resultado</p>`;
  
}

  i++;
  if (usuario.results.length > 1){
  let aux1 = usuario.results[i].slug;
  
  p2.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux1}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux1}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  
  i++;
  if (usuario.results.length > 2){
  let aux2 = usuario.results[i].slug;
  
  p3.innerHTML =`<p class="des onclick = "more('https://api.rawg.io/api/games/${aux2}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux2}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 3){
  let aux3 = usuario.results[i].slug;
  
  p4.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux3}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux3}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 4){
  let aux4 = usuario.results[i].slug;
  
  p5.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux4}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux4}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 5){
  let aux5 = usuario.results[i].slug;
  
  p6.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux5}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux5}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 6){
  let aux6 = usuario.results[i].slug;
  p7.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux6}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux6}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 7){
  let aux7 = usuario.results[i].slug;
  p8.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux7}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux7}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 8){
  let aux8 = usuario.results[i].slug;
  p9.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux8}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux8}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  
  i++;
  if (usuario.results.length > 9){
  let aux9 = usuario.results[i].slug;
  p10.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux9}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux9}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 10){
  let aux10 = usuario.results[i].slug;
  p11.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux10}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux10}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 11){
  let aux11 = usuario.results[i].slug;
  p12.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux11}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux11}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 12){
  let aux12 = usuario.results[i].slug;
  p13.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux12}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux12}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 13){
  let aux13 = usuario.results[i].slug;
  p14.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux13}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux13}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
}
  i++;
  if (usuario.results.length > 14){
  let aux14 = usuario.results[i].slug;
  p15.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux14}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux14}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }

  i++;
  if (usuario.results.length > 15){
  let aux15 = usuario.results[i].slug;
  p16.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux15}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux15}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }

  i++;
  if (usuario.results.length > 16){
  let aux16 = usuario.results[i].slug;
  p17.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux16}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux16}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }

  i++;
  if (usuario.results.length > 17){
  let aux17 = usuario.results[i].slug;
  p18.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux17}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux17}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }

  i++;
  if (usuario.results.length > 18){
  let aux18 = usuario.results[i].slug;
  p19.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux18}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux18}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }

  i++;
  if (usuario.results.length > 19){
  let aux19 = usuario.results[i].slug;
  p20.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux19}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux19}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }

  i++;
  if (usuario.results.length > 20){
  let aux20 = usuario.results[i].slug;
  p21.innerHTML =`<p class="des" onclick = "more('https://api.rawg.io/api/games/${aux20}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');">${usuario.results[i].name}</p>
  <img src="${usuario.results[i].background_image}" onclick = "more('https://api.rawg.io/api/games/${aux20}?key=47a3b9e0df574e72bf58ede4560626bf&page=1');"></img>`;
  }
}
  
  //p1.innerHTML += `<img class="thumbnail" src="${usuario.results[0].background_image}" alt="chip"></img>`
  /*
  usuario.results[3].games.forEach(element => { 
    let linha = criarLinha(element);
    tabela.appendChild(linha);
  });*/

  function lanc(){
    direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&dates=2022-08-01,2023-12-31&page=${pg}`;
    es.innerHTML = `<img src="./img/es.png" onclick ="pgs();"></img>`;
    di.innerHTML = `<img src="./img/di.png" onclick ="pgp();"></img>`;
    main();
  };

  function enviar(){
    
    if(chat.value == "")
    {
      direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&dates=2022-08-01,2023-12-31&page=${pg}`;
      es.innerHTML = `<img src="./img/es.png" onclick ="pgs();"></img>`;
      di.innerHTML = `<img src="./img/di.png" onclick ="pgp();"></img>`;
    } else {
      direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&search=${chat.value}`;
      es.innerHTML = ``;
      di.innerHTML = ``;
    }
    main();
  };


onload = () => {

  if(chat.value == "")
  {
    direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&dates=2022-08-01,2023-12-31&page=${pg}`;
  } else {
    direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&search=${chat.value}`;
  }
  main();
};

function pc(){
  direct = `https://api.rawg.io/api/platforms?key=47a3b9e0df574e72bf58ede4560626bf`;
};

function pgp(){
  pg++;
  pages.innerHTML =`<p class="des">${pg}</p>`;
  direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&dates=2022-08-01,2023-12-31&page=${pg}`;
  main();
};

function pgs(){
  if (pg > 1){
    pg--;
    pages.innerHTML =`<p class="des">${pg}</p>`;
    direct = `https://api.rawg.io/api/games?key=47a3b9e0df574e72bf58ede4560626bf&dates=2022-08-01,2023-12-31&page=${pg}`;
    main();
  }
};

function inicial(){
  
  main();
};


function more(dete){
  p1.innerHTML = "";
  p2.innerHTML = "";
  p3.innerHTML = "";
  p4.innerHTML = "";
  p5.innerHTML = "";
  p6.innerHTML = "";
  p7.innerHTML = "";
  p8.innerHTML = "";
  p9.innerHTML = "";
  p10.innerHTML = "";
  p11.innerHTML = "";
  p12.innerHTML = "";
  p13.innerHTML = "";
  p14.innerHTML = "";
  p15.innerHTML = "";
  p16.innerHTML = "";
  p17.innerHTML = "";
  p18.innerHTML = "";
  p19.innerHTML = "";
  p20.innerHTML = "";
  p21.innerHTML = "";

  let dat = fazerget(dete);
  let nov = JSON.parse(dat);
  let non = nov.slug;
  
  
  p1.innerHTML =`<p class="des">${nov.name}</p>`;
  if (nov.background_image_additional != null){
  p1.innerHTML += `<img src="${nov.background_image}"></img>`;
  }

  p1.innerHTML += `<p class="des">${nov.description}</p>`;

  if (nov.background_image != null){
  p1.innerHTML += `<style>
  .card_area1 {
    background-image: url(${nov.background_image}) ;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 0px 0px;
  }
</style>`;
  }

p2.innerHTML = `<p class="des">.</p>`;
if (nov.background_image_additional != null){
  p2.innerHTML +=`<img src="${nov.background_image_additional}"></img>`;
}

  dete = `https://api.rawg.io/api/games/${nov.slug}/screenshots?key=47a3b9e0df574e72bf58ede4560626bf`;
  dat = fazerget(dete);
  nov = JSON.parse(dat);

  /*p2.innerHTML += `<img src="${nov.results[0].image}"></img>
  <img src="${nov.results[1].image}"</img>
  <img src="${nov.results[2].image}"</img>
  <img src="${nov.results[3].image}"</img>`;
*/

  let j = 0;
  while(nov.results.length > j)
  {
    console.log("entr");
    p2.innerHTML += `<img src="${nov.results[j].image}"></img>`;
    j++;
  }


  p3.innerHTML = `<p class="des">.</p>
  <img width="40" height="80" src="./img/botão-voltar.png" onclick = "inicial();"></img>`;

  dat = fazerget(`https://api.rawg.io/api/games/${non}/stores?key=47a3b9e0df574e72bf58ede4560626bf`);
  nov = JSON.parse(dat);

  if (nov.results.length > 0){ 
    p3.innerHTML += `<a href="${nov.results[0].url}" target="_blank"><img src="./img/lognov.png" alt="gith"></a>`;
   }
};