const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list")
arrows.forEach((arrow,index) => {
    const len=movieLists[index].querySelectorAll("img").length;
    
    let arrowClick=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/270);
        arrowClick++;
        if(len-(7+arrowClick)+(7-ratio)>=0){
            movieLists[index].style.transform="translateX(-480px)";
        }
        else{
            movieLists[index].style.transform="translateX(0px)";
            arrowClick=0;
        }
            
    })
    console.log(window.innerWidth);
    console.log(Math.floor(window.innerWidth/270));
});
const themeball=document.querySelector(".toggle-ball");
const changeContent=document.querySelectorAll(".container,.navbar,.sidebar,.toggle,.logo,.menu-list-items,.profile-text,.down-arrow,.left-menu-icon,.movie-list-title,.movie-list-item-title,.movie-list-item-desc,.arrow");
themeball.addEventListener("click",()=>{
changeContent.forEach(i=>{
    i.classList.toggle("active");
})
themeball.classList.toggle("active");
});
