function tekstkast() {
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere hommikust, "+nimi.value;
    vastus.style.color="yellow";
}
//radionupude valik
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let pilt=document.getElementById("pilt");

    if(mees.checked){
        vastus2.innerHTML="Sa valisid mees";
        vastus.style.color="red";
        pilt.src="mees.png";
    } else if(naine.checked){
        vastus2.innerHTML="Sa valisid naine";
        vastus.style.color="red";
        pilt.src="naine.png";
    } else {
        vastus2.innerHTML="Palun vali sugu";
        vastus.style.color="red";
    }
}
// võtab väärtused ripploendist
function selectValik(){
    let vastus3= document.getElementById("vastus3");
    let linn= document.getElementById("linn");
    if(linn.selectedIndex!==0){
        vastus3.innerHTML="sa oled sündinud "+linn.value +" linnas";
        vastus3.style.color="red";
    } else {
        vastus3.innerHTML="palun vali linn ";
    }
}
//checkbox
function checkboxValik(){
    let vastus4=document.getElementById("vastus4");
    let jazz=document.getElementById("jazz");
    let popp=document.getElementById("popp");
    let rock=document.getElementById("rock");
    let edm=document.getElementById("edm");
    let techno=document.getElementById("techno");
    let rap=document.getElementById("rap");
    let metall=document.getElementById("metall");

    let muusika="";
    if(jazz.checked){
        muusika+=jazz.value+", ";
    }
    if(popp.checked){
        muusika+=popp.value+", ";
    }
    if(rock.checked){
        muusika+=rock.value+", ";
    }
    if(edm.checked){
        muusika+=edm.value+", ";
    }
    if(techno.checked){
        muusika+=techno.value+", ";
    }
    if(rap.checked){
        muusika+=rap.value+", ";
    }
    if(metall.checked){
        muusika+=metall.value+", ";
    }
    vastus4.innerHTML="Tee valisite muusika: "+muusika;
}
function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    pilt.src="";
}