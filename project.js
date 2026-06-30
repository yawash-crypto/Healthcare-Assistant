function send(){
    let input=document.getElementById("input").value.trim();
    if(input==""){
        return;
    }
    let chatbox=document.getElementById("chatbox");
    chatbox.innerHTML+=
    "<div class='user'>you:"+input+"</div>";
    let response="please consult a docter.";
    if(input.toLowerCase().includes("headache")){
        response="take rest and drink water.";
    }
    else if(input.toLowerCase().includes("fever")){
        response="stay hydrated and consult a doctor.";
    }
    else if(input.toLowerCase().includes("hospital")){
        response="Nearby hospitals:Appolo,fortis,kauvery.";
    }
    else if(input.toLowerCase().includes("appoinment")){
        response="book appoinment through practo or appollo 24/7.";
    }
    chatbox.innerHTML+=
    "<div class='bot'>Bot:"+response+"</div>";
    document.getElementById("input").value="";
    chatbox.scrollTop=chatbox.scrollHeight;

}