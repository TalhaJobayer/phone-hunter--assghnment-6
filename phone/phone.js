const searchInput=()=>{
    const input=document.getElementById('input');
    const inputValue=input.value;
    if(inputValue>0 || 0>inputValue){
    alert("The Number Will Not Be Searched Here.Please Search By Name")
   }
   else if(inputValue== "" ){
        alert("plese search by name")
   }
   else{ 
       input.value="";
       document.getElementById('spinner').style.display="block";
    // console.log(inputValue);
    const url=`https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhone(data.data))
   }
}
const displayPhone=(phones)=>{
  const divContainer=document.getElementById('divContainer');
  divContainer.textContent="";
    phones.forEach(phone => {
      if(phone==!phone){
        document.getElementById('spinner').style.display="none";
        alert("udfgho")
      }
      else if(phone){
        document.getElementById('spinner').style.display="none";
       const div1=document.createElement('div')
        div1.innerHTML=`
        <div class="col">
              <div class="card">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: center;">${phone.phone_name}</h5>
                  <p class="card-text" style="text-align: center;">Brand:${phone.brand}</p>
                  <p class="card-text" style="text-align: center;">Brand:${phone.slug}</p>
                </div>
                <button onclick="displayDetails('${phone.slug}')"  class="btn btn-success w-40 mx-auto">Details</button>
              </div>
            </div>
        `
        divContainer.appendChild(div1);
    }
    
        console.log(phone);

    });

}
const displayDetails= dispalyId =>{
  const url=`https://openapi.programming-hero.com/api/phone/${dispalyId}`
 
  fetch(url)
  .then(res=>res.json())
  .then(data=>showDetails(data.data))
}
const showDetails=(allDetailes)=>{
  console.log(allDetailes);
  divContainer.textContent="";
 
  
  
  const deatilsContainer=document.getElementById('deatilsContainer');

  deatilsContainer.innerHTML=`
      
        <div class="col-lg-4">
        <img  src="${allDetailes.image}" class="card-img-top" alt="...">
               
            </div>
            <div class="col-lg-7">
            <h4>Main Features</h4>
            <p><b>Display Size</b>: ${allDetailes.mainFeatures.displaySize}</p>
            <p><b>Chipset</b>: ${allDetailes.mainFeatures.chipSet}</p>
            <p><b>Memory</b>: ${allDetailes.mainFeatures.memory}</p>
            <p><b>sensors</b>: ${allDetailes.mainFeatures.sensors}</p>
            <h4>Others</h4>
            <p><b>Bluetooth</b>: ${allDetailes.others.Bluetooth}</p>
            <p><b>GPS</b>: ${allDetailes.others.GPS}</p>
            <p><b>NFC</b>: ${allDetailes.others.NFC}</p>
            <p><b>USB</b>: ${allDetailes.others.USB}</p>
            <p><b>WLAN</b>: ${allDetailes.others.WLAN}</p>
            <p><b>release Date</b>: ${allDetailes.releaseDate}</p>
            
          </div>
       

        `
        
       
       
    
     
}