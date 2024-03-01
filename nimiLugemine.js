function sisesta_nimi(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere päevast, õpilane " + nimi.value;
    vastus.style.color="dimgrey"
}
function kuursid(){
    let vastus2=document.getElementById("vastus2");
    let kurs1=document.getElementById("kurs1");
    let kurs2=document.getElementById("kurs2");
    let kurs3=document.getElementById("kurs3");
    let kursid="";
    if (kurs1.checked){
        kursid+="kurs 1, ";
    }
    if (kurs2.checked){
        kursid+="kurs 2, ";
    }
    if (kurs3.checked){
        kursid+="kurs 3, ";
    }
    vastus2.innerHTML="Sa läbisid "+kursid;
}

function valiSugu(){
    let vastus3=document.getElementById("vastus3");
    let it=document.getElementById("it");
    let juuksur=document.getElementById("juuksur");
    let meh=document.getElementById("meh");
    let ratsep=document.getElementById("ratsep");

    if (it.checked) {
        vastus3.innerHTML="Sinu eriala IT";
    }
    else if (juuksur.checked) {
            vastus3.innerHTML="Sinu eriala Juuksur";
    }
        else if (meh.checked){
         vastus3.innerHTML="Sinu eriala Mehhatroonika";
    }
    else if (ratsep.checked){
        vastus3.innerHTML="Sinu eriala rätsep";
    }
}

function kirjuta(){
    let vastus4=document.getElementById("vastus4");
    let kiri=document.getElementById("kiri");

    if (){

    }
}
