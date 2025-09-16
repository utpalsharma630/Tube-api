const videosCategory=(id)=>{
    loaderInput()
    const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        classListRemove()
        const clickedBtn=document.getElementById(`btn-${id}`)
        clickedBtn.classList.add('active')
        // console.log(clickedBtn);
        
        displayVideos(data.category)
    })
    
}


// class list remove--------------


function classListRemove(){
    const classRemove=document.getElementsByClassName('active')
    for(let btn of classRemove){
        btn.classList.remove('active')
    }
    hideLoaderInput();
}



// details button with modal

