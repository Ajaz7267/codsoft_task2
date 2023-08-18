var darkmode = document.getElementById("darkmode");

darkmode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        darkmode.src="./sun.png";
    }else{
        darkmode.src="./moon.png";
    }
}

