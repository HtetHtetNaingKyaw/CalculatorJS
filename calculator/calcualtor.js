const firstInputTag=
document.getElementById("firstInput")

const secondInputTag=
document.getElementById("secondInput")

const operatorsTag=
document.getElementById("operators")

const answerTag=
document.getElementById("text")

const firstError=
document.getElementById("firsterror")

const seconderror=
document.getElementById("seconderror")

const thirderror=
document.getElementById("thirderror")

const calculatebtn=
document.getElementById("calculate")

const clearbtn=
document.getElementById("clear")

const  formtag=
document.getElementById("mainForm")

window.addEventListener("load",()=>{
    firstError.style.display="none"
    seconderror.style.display="none"
    thirderror.style.display="none"
})

const calculation=()=>{
    const firstUserinput=parseInt(firstInputTag.value)
    const secondUserinput=parseInt(secondInputTag.value)
    let result;
    if (operatorsTag.value=="add") {
        result=firstUserinput+secondUserinput
        answerTag.innerHTML=result
    }else if(operatorsTag.value=="sub"){
        result=firstUserinput-secondUserinput
        answerTag.innerHTML=result
    }else if(operatorsTag.value=="mult"){
        result=firstUserinput*secondUserinput
        answerTag.innerHTML=result
    }else if(operatorsTag.value=="division"){
        result=firstUserinput%secondUserinput
        answerTag.innerHTML=result
    }
    else if(operatorsTag.value=="divided"){
        result=firstUserinput/secondUserinput
        answerTag.innerHTML=result
    }else if(operatorsTag.value=="empty"){
        thirderror.style.display="block"
    }
}

const errorTag=()=>{
    if(firstInputTag.value==""){
        firstError.style.display="block"
    }else if(secondInputTag.value==""){
        seconderror.style.display="block"
    }
}

calculatebtn.addEventListener("click",()=>{
    calculation()
    errorTag()
})

clearbtn.addEventListener("click",()=>{
    formtag.reset()
    answerTag.innerHTML="Answer"
})