function videoCategory(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=> res.json())
    .then(data=>displayVideos(data.videos)
    )
}
function displayVideos(videos){
    const videosContiner=document.getElementById('videos-container');
    for(let video of videos){
        console.log(video);
        
    }
}
videoCategory()




