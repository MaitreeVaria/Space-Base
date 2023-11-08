
var urlf="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=lxuWxYrkZGqumyxigMta9ixZFS2V6JWRpdCcoQLs"
  sendApiRequest1("https://api.wheretheiss.at/v1/satellites/25544")
  sendApiRequest2("https://api.nasa.gov/planetary/apod?api_key=lxuWxYrkZGqumyxigMta9ixZFS2V6JWRpdCcoQLs")
  sendApiRequest3("https://api.spaceflightnewsapi.net/v4/articles/")

async function sendApiRequest1(url){
 let response = await fetch(url);
 console.log(response)
  let data= await response.json()
   console.log(data)
  lat=data.latitude
 long=data.longitude
 document.querySelector("#long").innerHTML+="<h4> Latitude:"+lat +"</h4>"
 document.querySelector("#long").innerHTML+="<h4> Longitude:"+long +"</h4>"
  document.querySelector("#long").innerHTML+="<h4> Velocity:"+data.velocity +" kmph</h4>"
    document.querySelector("#long").innerHTML+="<h4> Altitude:"+data.altitude +" km</h4>"
 map(lat,long)
}

function map(lat, long){
var  url= "https://www.mapquestapi.com/staticmap/v5/map?key=maFLx7Al5JQYaLG01DA9RjiJxE4kfvGj&type=sat&size=600,500&zoom=3&locations="+lat+","+long+"|https://assets.mapquestapi.com/icon/v2/circle-sm.png"
  document.getElementById('iss').setAttribute('src',url)
  
}

async function sendApiRequest2(url){
  let response = await fetch(url);
  let data= await response.json()
  document.querySelector("#apodtext").innerHTML+="<h1>"+data.title+"</h1>"
  document.querySelector("#apod").innerHTML+="<img src="+data.url+ ">"
  document.querySelector("#apodtext").innerHTML+=data.explanation

}
async function sendApiRequest3(url){
  let response = await fetch(url);
  let data= await response.json()
	document.getElementById('a').setAttribute('href',data.results[0].url)
	document.querySelector("#newstext1").innerHTML+="<h4>"+data.results[0].title +"</h4>"
    document.querySelector("#news1").innerHTML+= "<img src="+data.results[0].image_url+">"
    document.querySelector("#newstext1").innerHTML+=data.results[0].published_at.substring(0, 10)
    document.getElementById('b').setAttribute('href',data.results[1].url)
    document.querySelector("#newstext2").innerHTML+="<h4>"+data.results[1].title+"</h4>"
    document.querySelector("#news2").innerHTML+= "<img src="+data.results[1].image_url+">"
    document.querySelector("#newstext2").innerHTML+= data.results[1].published_at.substring(0, 10)
    document.getElementById('c').setAttribute('href',data.results[2].url)
 	document.querySelector("#newstext3").innerHTML+="<h4>"+data.results[2].title +"</h4>"
    document.querySelector("#news3").innerHTML+= "<img src="+data.results[2].image_url+">"
    document.querySelector("#newstext3").innerHTML+=data.results[2].published_at.substring(0, 10)
    document.getElementById('d').setAttribute('href',data.results[3].url)
	document.querySelector("#newstext4").innerHTML+="<h4>"+data.results[3].title +"</h4>"
    document.querySelector("#news4").innerHTML+= "<img src="+data.results[3].image_url+">"
    document.querySelector("#newstext4").innerHTML+=data.results[3].published_at.substring(0, 10)
    document.getElementById('e').setAttribute('href',data.results[4].url)
	document.querySelector("#newstext5").innerHTML+="<h4>"+data.results[4].title+"</h4>"
    document.querySelector("#news5").innerHTML+= "<img src="+data.results[4].image_url+">"
    document.querySelector("#newstext5").innerHTML+= data.results[4].published_at.substring(0, 10)
    document.getElementById('f').setAttribute('href',data.results[5].url)
	document.querySelector("#newstext6").innerHTML+="<h4>"+ data.results[5].title+"</h4>"
    document.querySelector("#news6").innerHTML+= "<img src="+data.results[5].image_url+">"
    document.querySelector("#newstext6").innerHTML+=data.results[5].published_at.substring(0, 10)

 }





