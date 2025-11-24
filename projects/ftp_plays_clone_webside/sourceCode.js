const filmDatabase = [
    {
        name: "Mưa đỏ",
        type: "hành động",
        releaseDate: "2025",
        duration: "2 giờ",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Phim Mưa Đỏ – Red Rain do NSƯT Đặng Thái Huyền đạo diễn, dựa trên kịch bản của nhà văn Chu Lai, là một tác phẩm điện ảnh đậm chất sử thi, tái hiện 81 ngày đêm chiến đấu oanh liệt bảo vệ Thành Cổ Quảng Trị năm 1972.",
        trailer: "https://youtu.be/BD6PoZJdt_M",
        poster: "images/muado_poster2.jpg"
    },
    {
        name: "Hai Muối",
        type: "Gia đình",
        releaseDate: "2024",
        duration: "1 giờ 40 phút",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Là màn trở lại sau 20 năm của diễn viên Quyền Linh. Mối quan hệ giữa Muối, cô gái mồ côi mẹ và người cha hết mực yêu thương chuyển sang bước ngoặt khi cô rời lên thành phố cùng giấc mơ đổi đời.",
        trailer: "https://www.youtube.com/watch?v=MjxPoqCvvVs",
        poster: "images/film_banners/haimuoi_poster.jpg"
    },
    {
        name: "Bố Già",
        type: "Gia đình",
        releaseDate: "2021",
        duration: "2 giờ 8 phút",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Câu chuyện về Ba Sang – con thứ hai trong 4 anh em ồn ào: Giàu, Sang, Phú, Quý. Ba Sang là một người ga lăng, 'quá' tốt bụng và luôn hy sinh vì người khác dù họ có muốn hay không. Quân – Ba Sang's son là một Youtuber trẻ hiện đại.",
        trailer: "https://www.youtube.com/watch?v=jluSu8Rw6YE",
        poster: "images/film_posters/bogia.jpg"
    },
    {
        name: "Cô dâu Hào môn",
        type: "Hài hước",
        releaseDate: "2024",
        duration: "1 giờ 52 phút",
        ageMinimum: 18,
        nation: "Việt Nam",
        description: "Phim lấy đề tài làm dâu hào môn và khai thác câu chuyện môn đăng hộ đối, lối sống và quy tắc của giới thượng lưu dưới góc nhìn hài hước và châm biếm.",
        trailer: "https://www.youtube.com/watch?v=47pZ7GSxNzI",
        poster: "images/film_posters/codauhaomon.jpg"
    },
    {
        name: "Mai",
        type: "Tình cảm",
        releaseDate: "2024",
        duration: "2 giờ 11 phút",
        ageMinimum: 18,
        nation: "Việt Nam",
        description: "MAI xoay quanh câu chuyện về cuộc đời của một người phụ nữ cùng tên với bộ phim. Trên First-look Poster, Phương Anh Đào tạo ấn tượng mạnh với cái nhìn tĩnh lặng, xuyên thấu, đặc biệt, trên bờ môi nữ diễn viên là hình ảnh cô đang nằm nghiêng trên mặt nước. Được phủ một màn sương mờ ảo, poster đậm chất nghệ thuật của Mai gây tò mò với lời tựa: 'Quá khứ chưa ngủ yên, ngày mai liệu sẽ đến?'.",
        trailer: "https://www.youtube.com/watch?v=HXWRTGbhb4U",
        poster: "images/film_posters/mai.jpg"
    },
    {
        name: "Ngôi Nhà Bươm Bướm",
        type: "hài hước",
        releaseDate: "2019",
        duration: "1 giờ 44 phút",
        ageMinimum: 13,
        nation: "Việt Nam",
        description: "Ngôi Nhà Bươm Bướm kể về hành trình vượt qua trở ngại của Hoàng và Mai để đi đến cuộc hôn nhân mơ ước. Qua nhiều phen 'chiêu dụ', Hoàng và Mai đã sắp xếp được buổi gặp cho hai gia đình. Nhưng chính từ đây, câu chuyện oái oăm của nhà trai bị phơi bày và đem đến tình cảnh có một không hai cho buổi gặp mặt.",
        trailer: "https://www.youtube.com/watch?v=qbioI9M6Ho0",
        poster: "images/film_posters/ngoinhabuombuom.jpg"
    }
];

// Hàm chuyển đổi URL YouTube thành embed URL
function convertToEmbedUrl(url) {
    if (url.includes('youtu.be')) {
        const videoId = url.split('youtu.be/')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('watch?v=')) {
        const videoId = url.split('watch?v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
}

// Hàm cập nhật thông tin phim trong playMenu
function updatePlayMenu(film) {
    // Cập nhật các thông tin chi tiết
    document.getElementById('playMenu-type').textContent = film.type;
    document.getElementById('playMenu-releaseDate').textContent = film.releaseDate;
    document.getElementById('playMenu-duration').textContent = film.duration;
    document.getElementById('playMenu-ageMinimum').textContent = film.ageMinimum + ' tuổi';
    document.getElementById('playMenu-nation').textContent = film.nation;
    document.getElementById('playMenu-description').textContent = film.description;
    
    // Cập nhật poster nếu có
    if (film.poster) {
        const bannerImg = document.querySelector('#banner-img');
        if (bannerImg) {
            bannerImg.src = film.poster;
            bannerImg.alt = film.name;
        }
    }
    
    // Cập nhật trailer URL
    const trailerIframe = document.getElementById('trailer');
    if (trailerIframe && film.trailer) {
        trailerIframe.src = convertToEmbedUrl(film.trailer);
    }
    
    
    
    // Ẩn trailer nếu đang hiển thị
    const trailerWrapper = document.getElementById('trailerVideoWrapper');
    if (trailerWrapper) {
        trailerWrapper.style.display = 'none';
    }

    const banner = document.querySelector('#bannerWrapper');
    if (banner) {
        banner.style.display = 'flex';
    }
}

// Hàm tìm phim theo tên (không phân biệt hoa thường và dấu)
function findFilmByName(filmName) {
    const normalizedName = filmName.toLowerCase().trim();
    return filmDatabase.find(film => 
        film.name.toLowerCase().trim() === normalizedName
    );
}

// Hàm xử lý khi click vào film-box
function handleFilmBoxClick(event) {
    // Tìm phần tử film-box gần nhất
    const filmBox = event.target.closest('.film-box');
    if (!filmBox) return;
    
    // Lấy tên phim từ thẻ span
    const filmNameElement = filmBox.querySelector('span');
    if (!filmNameElement) return;
    
    const filmName = filmNameElement.textContent;
    const film = findFilmByName(filmName);
    
    if (film) {
        updatePlayMenu(film);
    } else {
        console.warn('Không tìm thấy thông tin phim:', filmName);
    }
}

// Hàm khởi tạo sự kiện cho tất cả film-box
function initializeFilmBoxEvents() {
    const filmBoxes = document.querySelectorAll('.film-box');
    filmBoxes.forEach(box => {
        box.style.cursor = 'pointer';
        box.addEventListener('click', handleFilmBoxClick);
    });
}

// Hàm xử lý khi click nút "Xem Ngay"
function playTrailer() {
    const banner = document.querySelector('#bannerWrapper');
    const trailerWrapper = document.getElementById('trailerVideoWrapper');
    
    if (banner && trailerWrapper) {
        banner.style.display = 'none';
        trailerWrapper.style.display = 'block';
    }
}

// Khởi tạo khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    initializeFilmBoxEvents();
    console.log('Film box click events initialized!');
});