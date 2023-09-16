function tampilkanNilaiButton (value) {
    document.getElementById("display").value += value;
}

function equal (value){
    document.getElementById("display").value;
    let e  =  document.getElementById("display").value;
    let i = eval (e)
    document.getElementById("display").value = i;
}

function hapus (){
    document.getElementById("display").value = "";
}