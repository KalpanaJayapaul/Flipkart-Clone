document.addEventListener("DOMContentLoaded", function () {
    console.log("Flipkart");

    
    const searchBar = document.querySelector("input");
    searchBar.addEventListener("focus", function () {
        searchBar.style.border = "2px solid #2874f0";
    });

    searchBar.addEventListener("blur", function () {
        searchBar.style.border = "none";
    });

    let bannerIndex = 0;
    const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
    const bannerImg = document.querySelector(".banner img");

    setInterval(() => {
        bannerIndex = (bannerIndex + 1) % banners.length;
        bannerImg.src = banners[bannerIndex];
    }, 3000);
});