/**
 * Created by Anthony on 11/22/2017.
 */
function myFunction() {
    var notes = document.getElementById("notes").value;
    var d = ["C#","E♭","F#","G#","B♭"];
    for(var j = 0; j < d.length; j++){
        notes = replaceAll(notes,d[j]+"-1",document.getElementById(d[j]+" (-1)").value);
        notes = replaceAll(notes,d[j]+"\\+1",document.getElementById(d[j]+" (+1)").value);
        notes = replaceAll(notes,d[j],document.getElementById(d[j]).value);
    }
    for (var i = 65; i < 72; i++){
        var a = String.fromCharCode(i);
        notes = replaceAll(notes,a+"-1",document.getElementById(a+" (-1)").value);
        notes = replaceAll(notes,a+"\\+1",document.getElementById(a+" (+1)").value);
        notes = replaceAll(notes,a,document.getElementById(a).value);
    }
    document.getElementById("output").value = notes;


}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}