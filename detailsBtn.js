const detailsBtn=(videoId)=>{
    const url=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data.video);
        
        displayVideoDetils(data.video);
        
    })
    
}


const displayVideoDetils=(video)=>{
    document.getElementById('show_modal').showModal();
    const details=document.getElementById('details_container')
    details.innerHTML=`
       
    <div class="card bg-base-100 w-96 shadow-sm mx-auto">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
  </div>
</div>
            
        
    `
}





//  <!-- Open the modal using ID.showModal() method -->
// 
//