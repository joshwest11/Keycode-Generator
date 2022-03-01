window.addEventListener("keydown", (e)=> {
    const key = document.querySelector(".key h1");
    const keyCode = document.querySelector(".key-code h1");
    e.preventDefault();
    key.textContent = e.key;
    keyCode.textContent = e.keyCode;
    console.log(e)
});