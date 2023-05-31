const search = function () {
    /**
     *  Điều này làm thay đổi chuỗi thành chuỗi chữ hoa, 
        giúp đảm bảo sự so khớp không phân biệt chữ hoa chữ 
        thường trong quá trình tìm kiếm.
     */
    const searchBox = document
        .querySelector("#search-item")
        .value.toUpperCase();

    const storeItem = document.querySelector(".product-list");
    const products = document.querySelectorAll(".product");
    const productName = document.querySelectorAll("h2");

    /** Khi nguoi dung nhap vao se sap xep cac phan
    tu theo ten bang vong lap 
    */
    for (var i = 0; i < productName.length; i++) {
        // se khop voi bat cu gia tri nao ,
        let match = products[i].querySelector("h2");
        if (match) {
            let textValue = match.textContent || match.innerHTML;
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                products[i].style.display = "flex";
            } else {
                products[i].style.display = "none";
            }
        }
    }
};
