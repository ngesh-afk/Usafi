$(document).ready(function()
{
getdevices();
getDeviceData();
}); 
function getdevices(){
 // api url 
const api_url = 
"https://api.waziup.io/api/v2/devices"; 

// Defining async function 
async function getdevice(url) { 

// Storing response 
const response = await fetch(url); 

// Storing data in form of JSON 
var data = await response.json(); 
console.log(data); 
// if (response) { 
// 	hideloader(); 
// } 
show(data); 
} 
// Calling that async function 
getdevice(api_url); 

// Function to define innerHTML for Select box
function show(data) { 
let tab = 

 `<option selected>Choose Device </option>`; 

// Loop to access all rows 
for (let r of data) { 
    tab += `
    <option value=${r.id}>${r.id}</option>`; //call device using their id
} 
// Setting innerHTML as tab variable 
document.getElementById("inputGroupSelect04").innerHTML = tab; 
} 
}
//function to get device data
function getDeviceData(){
    $(document).on('change','#inputGroupSelect04',function(){
        var id=$(this).val();

         // api url 
       var sensorh="HUM";
       var sensort="TC";
       var sensorwt="WTL";
       var sensortc="CTR";
    
        const api_url_hum = 
        `https://api.waziup.io/api/v2/devices/${id}/sensors/${sensorh}`; 
        const api_url_tc = 
        `https://api.waziup.io/api/v2/devices/${id}/sensors/${sensort}`; 
        const api_url_wtl = 
        `https://api.waziup.io/api/v2/devices/${id}/sensors/${sensorwt}`; 
        const api_url_ctr= 
        `https://api.waziup.io/api/v2/devices/${id}/sensors/${sensortc}`; 
        const api_url_location= 
       `https://api.waziup.io/api/v2/devices/${id}`;

        
       

// Defining async function for Location
async function getdevicel(url) { 

    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data.location); 
    // if (response) { 
    // 	hideloader(); 
    // } 
    showl(data.location); 
    } 
    
    // Calling that async function 
    getdevicel(api_url_location); 
    
    // Function to hide the loader 
    // function hideloader() { 
    // 	document.getElementById('loading').style.display = 'none'; 
    // } 
    // Function to define innerHTML for HTML table 
    function showl(data) { 
    let lg = data.longitude;
    let lat=data.latitude;
    // "location": {
    //     "latitude": 5.36,
    //     "longitude": 4.0083
    //   },
    
    console.log('The longitude is ', lg );
    console.log('The latitude is ', lat );
    
        
    
    // Setting innerHTML as tab variable 
    //$("#humidity").text(hum); 
    $("#longitude").val(lg);
    $("#latitude").val(lat);
}



  // Defining async function for Humidity
  async function getdeviced(url) { 

   // Storing response 
  const response = await fetch(url); 

   // Storing data in form of JSON 
  var data = await response.json(); 
   console.log(data); 
  // if (response) { 
  // 	hideloader(); 
  // } 
  showd(data); 
  } 

   // Calling that async function 
   getdeviced(api_url_hum); 

   // Function to hide the loader 
   // function hideloader() { 
  // 	document.getElementById('loading').style.display = 'none'; 
  // } 
  // Function to define innerHTML for HTML table 
  function showd(data) { 
  let hum = data.value.value;

  console.log('The Humidity is ', hum );
    

   // Setting innerHTML as tab variable 
  //$("#humidity").text(hum); 
   $("#humidity").html(hum);
}
       


// Defining async function for Temperature
async function getdeviceT(url) { 

    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    // if (response) { 
    // 	hideloader(); 
    // } 
    showT(data); 
    } 
    
    // Calling that async function 
    getdeviceT(api_url_tc); 
    
    // Function to hide the loader 
    // function hideloader() { 
    // 	document.getElementById('loading').style.display = 'none'; 
    // } 
    // Function to define innerHTML for HTML table 
    function showT(data) { 
    let temp = data.value.value;
    
    console.log('The Temperature is ',temp );
        
    
    // Setting innerHTML as Temperature variable 
   
    $("#temperature").html(temp);
    } 
            





 // Defining async function for Water tank level
async function getdeviceWT(url) { 

    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    // if (response) { 
    // 	hideloader(); 
    // } 
    showWT(data); 
    } 
    
    // Calling that async function 
    getdeviceWT(api_url_wtl); 
    
    // Function to hide the loader 
    // function hideloader() { 
    // 	document.getElementById('loading').style.display = 'none'; 
    // } 
    // Function to define innerHTML for HTML table 
    function showWT(data) { 
    let water = data.value.value;
    
    console.log('The Water Tank is ',water );
        
    
    // Setting innerHTML as Temperature variable 
   
    $("#waterlevel").html(water);
    } 
           

 // Defining async function for Tap Count
async function getdeviceTC(url) { 

    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    // if (response) { 
    // 	hideloader(); 
    // } 
    showTC(data); 
    } 
    
    // Calling that async function 
    getdeviceTC(api_url_ctr); 
    
    // Function to hide the loader 
    // function hideloader() { 
    // 	document.getElementById('loading').style.display = 'none'; 
    // } 
    // Function to define innerHTML for HTML table 
    function showTC(data) { 
    let tc = data.value.value;
    
    console.log('The Tap Count is ',tc );
        
    
    // Setting innerHTML as Temperature variable 
   
    $("#tapc").html(tc);
    $('#tcp').css('width', tc);
    } 
            
        
    });
    
}

