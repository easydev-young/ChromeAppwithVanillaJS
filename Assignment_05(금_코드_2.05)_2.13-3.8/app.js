const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const currentColor = h1.style.color;
    // let newColor;

    // if (currentColor === "blue") {
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }

    // h1.style.color = newColor;

    const clickedClass = "active";
    // if (h1.className === clickedClass) {
    //     h1.className = "";
    // } else {
    //     h1.className = clickedClass;
    // }

    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);

// classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
// className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

// contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

// toggle은 토큰이 존재하면 토큰제거
// 토큰존재 하지않으면 토큰 추가