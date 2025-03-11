document.addEventListener("DOMContentLoaded", function() {
    const menu_btn = document.getElementById("menu_btn");
    const mobile_menu = document.getElementById("mobile_menu");

    menu_btn.addEventListener("click", function() {
        mobile_menu.classList.toggle("active");
        if (mobile_menu.classList.contains("active")) {
            mobile_menu.style.display = "flex";
        } else {
            mobile_menu.style.display = "none";
        }
    });
});

// Library Related 

function BuyNow(book_id) {
    let popup = document.getElementById("popup_alert");
    popup.classList.remove("hide_popup");
    popup.classList.add("show_popup");
    document.getElementById("popup_text").innerText = "Your purchase was successful!";
    setTimeout(() => {
        popup.classList.remove("show_popup");
        popup.classList.add("hide_popup");
        popup.style.display = "none";
    }, 3000);
}

function AddToCart(book_id) {
    let popup = document.getElementById("popup_alert");
    popup.classList.remove("hide_popup");
    popup.classList.add("show_popup");
    document.getElementById("popup_text").innerText = "Added To Cart Succesfully!";
    document.getElementById("popup_text").style.color = "red";
    setTimeout(() => {
        popup.classList.remove("show_popup");
        popup.classList.add("hide_popup");
        popup.style.display = "none";
    }, 3000);
}

document.body.addEventListener("mouseclick",function() {
    let selection_bar = document.getElementById("selection_bar");
    selection_bar.style.position = "relative";
    selection_bar.style.display = "none";
});