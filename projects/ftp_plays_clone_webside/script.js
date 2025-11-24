const filmDatabase = [
    {
        id : 0,
        name: "Mưa đỏ",
        type: "hành động",
        releaseDate: "2025",
        duration: "2 giờ",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Phim Mưa Đỏ – Red Rain do NSƯT Đặng Thái Huyền đạo diễn, dựa trên kịch bản của nhà văn Chu Lai, là một tác phẩm điện ảnh đậm chất sử thi, tái hiện 81 ngày đêm chiến đấu oanh liệt bảo vệ Thành Cổ Quảng Trị năm 1972.",
        trailer: "https://www.youtube.com/embed/watch?v=BD6PoZJdt_M",
        poster: "images/muado_poster2.jpg"
    },
    {
        id : 1,
        name: "Hai Muối",
        type: "Gia đình",
        releaseDate: "2024",
        duration: "1 giờ 40 phút",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Là màn trở lại sau 20 năm của diễn viên Quyền Linh. Mối quan hệ giữa Muối, cô gái mồ côi mẹ và người cha hết mực yêu thương chuyển sang bước ngoặt khi cô rời lên thành phố cùng giấc mơ đổi đời.",
        trailer: "https://www.youtube.com/embed/watch?v=MjxPoqCvvVs",
        poster: "images/film_banners/haimuoi_poster.jpg"
    },
    {
        id : 2,
        name: "Bố Già",
        type: "Gia đình",
        releaseDate: "2021",
        duration: "2 giờ 8 phút",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Câu chuyện về Ba Sang – con thứ hai trong 4 anh em ồn ào: Giàu, Sang, Phú, Quý. Ba Sang là một người ga lăng, 'quá' tốt bụng và luôn hy sinh vì người khác dù họ có muốn hay không. Quân – Ba Sang's son là một Youtuber trẻ hiện đại.",
        trailer: "https://www.youtube.com/embed/watch?v=jluSu8Rw6YE",
        poster: "images/film_posters/bogia.jpg"
    },
    {
        id : 3,
        name: "Cô dâu Hào môn",
        type: "Hài hước",
        releaseDate: "2024",
        duration: "1 giờ 52 phút",
        ageMinimum: 18,
        nation: "Việt Nam",
        description: "Phim lấy đề tài làm dâu hào môn và khai thác câu chuyện môn đăng hộ đối, lối sống và quy tắc của giới thượng lưu dưới góc nhìn hài hước và châm biếm.",
        trailer: "https://www.youtube.com/mebed/watch?v=47pZ7GSxNzI",
        poster: "images/film_posters/embed/codauhaomon.jpg"
    },
    {
        id : 4,
        name: "Mai",
        type: "Tình cảm",
        releaseDate: "2024",
        duration: "2 giờ 11 phút",
        ageMinimum: 18,
        nation: "Việt Nam",
        description: "MAI xoay quanh câu chuyện về cuộc đời của một người phụ nữ cùng tên với bộ phim. Trên First-look Poster, Phương Anh Đào tạo ấn tượng mạnh với cái nhìn tĩnh lặng, xuyên thấu, đặc biệt, trên bờ môi nữ diễn viên là hình ảnh cô đang nằm nghiêng trên mặt nước. Được phủ một màn sương mờ ảo, poster đậm chất nghệ thuật của Mai gây tò mò với lời tựa: 'Quá khứ chưa ngủ yên, ngày mai liệu sẽ đến?'.",
        trailer: "https://www.youtube.com/embed/watch?v=HXWRTGbhb4U",
        poster: "images/film_posters/mai.jpg"
    },
    {
        id : 5,
        name: "Ngôi Nhà Bươm Bướm",
        type: "hài hước",
        releaseDate: "2019",
        duration: "1 giờ 44 phút",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Ngôi Nhà Bươm Bướm kể về hành trình vượt qua trở ngại của Hoàng và Mai để đi đến cuộc hôn nhân mơ ước. Qua nhiều phen 'chiêu dụ', Hoàng và Mai đã sắp xếp được buổi gặp cho hai gia đình. Nhưng chính từ đây, câu chuyện oái oăm của nhà trai bị phơi bày và đem đến tình cảnh có một không hai cho buổi gặp mặt.",
        trailer: "https://www.youtube.com/watch?v=qbioI9M6Ho0",
        poster: "images/film_posters/embed/ngoinhabuombuom.jpg"
    }
];

// function initWhenOnClick (){
//     const filmBoxes = document.querySelectorAll(".film-box");
//     filmBoxes.forEach(box => {
//         box.style.cursor = "pointer";
//         box.addEventListener("click", clickOnFilmBox);
//     });
// }

// function clickOnFilmBox(event){
//     const filmBox = event.target.closest(".film-box");
//     const filmTitle = filmBox.querySelector("span").textContent;
//     const filmObj = filmDatabase.find(film => film.name === filmTitle);
//     updateData(filmObj);
// }

// function updateData(film){
//     document.getElementById("playMenu-type").textContent = film.type;
//     document.getElementById("playMenu-releaseDate").textContent = film.releaseDate;
//     document.getElementById("playMenu-duration").textContent = film.duration;
//     document.getElementById("playMenu-ageMinimum").textContent = film.ageMinimum;
//     document.getElementById("playMenu-nation").textContent = film.nation;
//     document.getElementById("playMenu-description").textContent = film.description;
//     document.getElementById("banner-img").src = film.poster;
//     document.getElementById("trailer").src = film.trailer;
// }

function playTrailer(){
    document.getElementById("playMenu").style.display = "none";
    document.getElementById("traler").style.display = "block";
}


function showDetail(idFilm){
    const filmObj = filmDatabase.find(film => film.id === idFilm);
    document.getElementById("playMenu-type").textContent = filmObj.type;
    document.getElementById("playMenu-releaseDate").textContent = filmObj.releaseDate;
    document.getElementById("playMenu-duration").textContent = filmObj.duration;
    document.getElementById("playMenu-ageMinimum").textContent = filmObj.ageMinimum;
    document.getElementById("playMenu-nation").textContent = filmObj.nation;
    document.getElementById("playMenu-description").textContent = filmObj.description;
    document.getElementById("banner-img").src = filmObj.poster;
    document.getElementById("trailer").src = filmObj.trailer;
}