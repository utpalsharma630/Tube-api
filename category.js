function dataCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=> displayCategories(data.categories)
    )
}
function displayCategories(categories){
    const categoriesContainer=document.getElementById('categories-container');
    
    for(let cat of categories){
        console.log(cat);
        
        const div= document.createElement('div');
        div.innerHTML=`
        <button id="btn-${cat.category_id}" onclick="videosCategory(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        categoriesContainer.append(div);
    }
}

dataCategories()
