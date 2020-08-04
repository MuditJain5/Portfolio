function scroll(){
    var html = document.documentElement;

    var n = html.scrollTop;

    if(n > 2100){
        document.getElementById("navbar").classList.add("blue");
        document.getElementById("navbar").classList.remove("red");
        document.getElementById("brand").classList.add("white");

    }else if(n > 150){
        document.getElementById("navbar").classList.remove("blue");
        document.getElementById("navbar").classList.add("red");
        document.getElementById("brand").classList.add("white");
    } else{
        document.getElementById("navbar").classList.remove("blue");
        document.getElementById("navbar").classList.remove("red");
        document.getElementById("brand").classList.remove("white");
    }
}
