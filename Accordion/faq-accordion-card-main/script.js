const $ = document.querySelector.bind( document );
const $$ = document.querySelectorAll.bind( document );
const questionBox = $$(".question_box");

const addOpenedClass = (element) => {
    element.children[1].children[0].classList.add("opened");
    element.children[0].classList.add("opened_title");
    element.parentElement.children[1].classList.remove("answer_hidden");
}

const closeOpenedClass = (element) => {
    element.children[1].children[0].classList.remove("opened");
    element.children[0].classList.remove("opened_title");
    element.parentElement.children[1].classList.add("answer_hidden");
}

questionBox.forEach(element => {
    element.addEventListener("click", (e) => {
        const isOpened = e.target.classList.contains("opened_title");
        questionBox.forEach( elem => {
            closeOpenedClass(elem);
        });
        if (!isOpened) {
            addOpenedClass(element);
        }
    });
});