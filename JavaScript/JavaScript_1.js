function bleu() {
    var jour_finit;
    var jour=document.getElementById("Semaine").value;
    var jour_string="Tres bien, aujourd'hui est ";
    var jour_stringdeux=" et tu parles Francais un peu.";
    switch(jour) { //*dont forget to use var jour with the switch() here. so the switch statement knows what variable its applied to//
        case "Dimanche":
            jour_finit=jour_string + "Dimanche " + jour_stringdeux;
            break;
        case "Lundi":
            jour_finit=jour_string + "Lundi " +jour_stringdeux;
            break;
        case "Mardi":
            jour_finit=jour_string +"Mardi " +jour_stringdeux;
            break;
        case "Mercredi":
            jour_finit=jour_string +"Mercredi " + jour_stringdeux;
            break;
        case "Jeudi":
            jour_finit=jour_string +"Jeudi " + jour_stringdeux;
            break;
        case "Vendredi":
            jour_finit=jour_string + "Vendredi " + jour_stringdeux;
            break;
        case "Samedi":
            jour_finit=jour_string + "Samedi " + jour_stringdeux;
            break;
            default:
            jour_finit="Suivez les instructions s'il vous plait!";
    }
    document.getElementById("deneaumont").innerHTML=jour_finit;
}

//class method//
function class_Function() {
    var A=document.getElementsByClassName("classy");
    A[0].innerHTML="This should now say changed P1";
}

//canvas button//
function fillCanvas() {
    var vas=document.getElementById("canvas");
    var vas2= vas.getContext("2d");
    var img=document.getElementById("penguin");
    vas2.drawImage(img,0,0);
}

function canvas_Two() {
    var temp=document.getElementById("canvas2");
    var temp2=temp.getContext("2d");

    var grd=temp2.createLinearGradient(0,0,170,0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    temp2.fillstyle=grd;
    temp2.fillRect(20,20,150,100);
}