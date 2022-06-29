/* layer popup */
function profileDetailShow() {
    let layer = document.querySelector(".layer-profile-detail");
    layer.style.display = 'block';
}
function layerClose(e) {
    console.log(e.target);
    e.target.closest(".layer").style.display = "none";
}

let users = document.querySelectorAll("a.user");
for (let i = 0; i < users.length; i++) {
    users[i].addEventListener("click", profileDetailShow);
}

let layerCloseBtns = document.querySelectorAll(".btn-layer-close");
for (let i = 0; i < layerCloseBtns.length; i++) {
    layerCloseBtns[i].addEventListener("click", layerClose);
}

let layerBackBtns = document.querySelectorAll(".layer .btn-back");
for (let i = 0; i < layerBackBtns.length; i++) {
    layerBackBtns[i].addEventListener("click", layerClose);
}

//삭제 버튼 노출
let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function (e) {
        if (this.nextElementSibling.className === 'btn-input-remove') {
            console.log(this);
            if (this.value.length > 0) {
                this.nextElementSibling.style.display = "block";
            } else {
                this.nextElementSibling.style.display = "none";
            }
        }
    });
}
//삭제 버튼 클릭
let inputRemoveBtns = document.querySelectorAll('.btn-input-remove');
for (let i = 0; i < inputRemoveBtns.length; i++) {
    inputRemoveBtns[i].addEventListener("click", function (e) {
        this.previousElementSibling.value = "";
        this.style.display = "none";
    });
}