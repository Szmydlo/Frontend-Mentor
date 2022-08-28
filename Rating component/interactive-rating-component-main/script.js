const $ = document.querySelector.bind( document );
const markSelector = "#mark";

const onEnter = (e)=> {
    const i = Number(e.target.innerText);
    $("#mark" + i).style["background-color"] = "hsl(25, 97%, 53%)";
    $("#mark" + i).style["color"] = "hsl(0, 0%, 100%)";
    if ( i != 1) {
        $("#mark" + (i - 1)).style["background-color"] = "hsl(25, 97%, 23%)";
        $("#mark" + (i - 1)).style["color"] = "hsl(0, 0%, 100%)";
    }
    if ( i != 5) {
        $("#mark" + (i + 1)).style["background-color"] = "hsl(25, 97%, 23%)";
        $("#mark" + (i + 1)).style["color"] = "hsl(0, 0%, 100%)";
    }
}

const onLeave = (e)=> {
    const i = Number(e.target.innerText);
    $("#mark" + i).style["background-color"] = "hsl(216, 12%, 54%)";
    $("#mark" + i).style["color"] = "hsl(217, 12%, 63%)";
    if ( i != 1) {
        $("#mark" + (i - 1)).style["background-color"] = "hsl(216, 12%, 54%)";
        $("#mark" + (i - 1)).style["color"] = "hsl(217, 12%, 63%)";
    }
    if (i != 5) {
        $("#mark" + (i + 1)).style["background-color"] = "hsl(216, 12%, 54%)";
        $("#mark" + (i + 1)).style["color"] = "hsl(217, 12%, 63%)";
    }
}

const onSubmit = () => {
    const chosenMark = $(".chosen");
    if(!chosenMark) return;
    $(".first").remove();
    $(".second").style.visibility = "visible";
    $("em").innerText = chosenMark.innerText;
}

// append event listeners
for (let i = 1; i < 6; i++) {
    $("#mark" + i).addEventListener("mouseenter", onEnter);
    $("#mark" + i).addEventListener("mouseleave", onLeave);
    $("#mark" + i).addEventListener("click", (e)=> {
        e.target.removeEventListener("mouseenter", onEnter);
        e.target.removeEventListener("mouseleave", onLeave);
        if ( i != 1) {
            $("#mark" + (i - 1)).style["background-color"] = "hsl(216, 12%, 54%)";
            $("#mark" + (i - 1)).style["color"] = "hsl(217, 12%, 63%)";
        }
        if (i != 5) {
            $("#mark" + (i + 1)).style["background-color"] = "hsl(216, 12%, 54%)";
            $("#mark" + (i + 1)).style["color"] = "hsl(217, 12%, 63%)";
        }
        e.target.classList.add("chosen");
});
}

$(".submit").addEventListener("click", onSubmit)