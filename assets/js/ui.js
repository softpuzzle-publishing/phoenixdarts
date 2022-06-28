function profileDetailShow() {
    let layer = document.querySelector(".layer-profile-detail");
    layer.style.display = 'block';
}

function layerClose(e) {
    console.log(e.target);
    e.target.closest(".layer").style.display = "none";
    //let layer = document.querySelector(".layer-profile-detail");
    //layer.style.display = "none";
}

let users = document.querySelectorAll("a.user");
for (let i = 0; i < users.length; i++) {
    users[i].addEventListener("click", profileDetailShow);
}

let layerCloseBtns = document.querySelectorAll(".btn-layer-close");
for (let i = 0; i < layerCloseBtns.length; i++) {
    layerCloseBtns[i].addEventListener("click", layerClose);
}