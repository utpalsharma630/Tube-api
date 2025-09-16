document.getElementById('search-input').addEventListener('keyup',(event)=>{
    videoCategory(event.target.value)
})


// loader function------

function loaderInput(){
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('videos-container').classList.add('hidden');
}

function hideLoaderInput(){
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('videos-container').classList.remove('hidden');
}
