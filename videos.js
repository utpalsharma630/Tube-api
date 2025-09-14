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
        
        const div= document.createElement('div');
        div.innerHTML=`
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img class="w-full"
                src="${video.thumbnail}"
                alt="img" />
            </figure>
            <div class="card-body  ">
                <div>
                    <img class="w-10" src="${video.authors[0].profile_picture}" alt=""/>
                </div>
                <div>
                    <h2 class="card-title text-xl">${video.title}</h2>
                    <p>${video.authors[0].profile_name}</p>
                    <p>${video.others.views}</p>
                </div>
            </div>
        </div>
        `;
        videosContiner.append(div)
        
    }
}
videoCategory()

// {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }


