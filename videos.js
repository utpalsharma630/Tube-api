function videoCategory(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=> res.json())
    .then(data=>{
        classListRemove()
        document.getElementById('btn-all').classList.add('active');
        displayVideos(data.videos)}
    )
}
function displayVideos(videos){
    const videosContiner=document.getElementById('videos-container');
    videosContiner.innerHTML="";

    if(videos.length===0){
        videosContiner.innerHTML=`
        <div class="col-span-full text-center justify-items-center">
            <img class="mx-auto" src="asset/Icon.png" alt="">
            <h2 class="text-2xl font-bold text-[#171717]">Oops!! Sorry, There is no content here</h2>
         </div>
        `
        return;
    }
    

    for(let video of videos){
        console.log(video);
        
        const div= document.createElement('div');
        div.innerHTML=`
            <div class="card bg-base-100 shadow-sm">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover"
                    src="${video.thumbnail}" alt="" />
                    <span class="absolute bottom-2 right-2 text-white bg-black px-3 rounded">3hrs 56 min ago</span>
                </figure>
                <div class="py-5 px-1">
                    <div class="flex gap-5  ">
                    
                        <div>
                            <div class="avatar py-2">
                                <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                    <img src="${video.authors[0].profile_picture}" />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h2 class="text-base text-[#171717] font-bold">${video.title}</h2>
                            <p class="flex gap-2 text-sm text-[#17171770]">${video.authors[0].profile_name}
                            ${video.authors[0].verified===true ? '<img class="w-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt=""></img>' : ''}</p>
                            
                            <p class="text-sm text-[#17171770]">${video.others.views}</p>
                        </div>
                    </div> 
                </div>
                <button id="showDetails" onclick="detailsBtn('${video.video_id}')" class='btn '>Details</button>
            </div>
        `;
        videosContiner.append(div)
        
    }
}


// videoCategory();

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


