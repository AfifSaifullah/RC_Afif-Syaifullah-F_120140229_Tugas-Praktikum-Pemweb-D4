var root = document.documentElement;
var light = 1;

function changeTheme()
{
    var butt = document.getElementById("theme-button");

    if(light)
    {
        butt.textContent = 'Light Theme';
        butt.style.backgroundColor = "rgb(232, 232, 232)";
        butt.style.color = "rgb(44, 44, 44)"

        root.classList.add("darkTheme");
        light ^= 1;
        return;
    }

    butt.textContent = 'Dark Theme';
    butt.style.backgroundColor = "rgb(44, 44, 44)";
    butt.style.color = "rgb(232, 232, 232)"

    root.classList.remove("darkTheme");
    light ^= 1;
}