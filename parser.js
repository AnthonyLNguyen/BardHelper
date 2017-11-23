/**
 * Created by Anthony on 11/22/2017.
 */
function convert() {
    var notes = document.getElementById("notes").value;
    notes = replaceAll(notes,"♭","b");
    notes = replaceAll(notes,"A#","Bb");
    notes = replaceAll(notes,"Db","C#");
    notes = replaceAll(notes,"D#","Eb");
    notes = replaceAll(notes,"Gb","F#");
    notes = replaceAll(notes,"Ab","G#");
    var d = ["C#","Eb","F#","G#","Bb"];
    for(var j = 0; j < d.length; j++){
        notes = replaceAll(notes,d[j]+"-1",document.getElementById(d[j]+" (-1)").value.toLowerCase());
        notes = replaceAll(notes,d[j]+"\\+1",document.getElementById(d[j]+" (+1)").value.toLowerCase());
        notes = replaceAll(notes,d[j],document.getElementById(d[j]).value.toLowerCase());
    }
    notes = replaceAll(notes,"C"+"\\+2",document.getElementById("C (+2)").value.toLowerCase());
    for (var i = 65; i < 72; i++){
        var a = String.fromCharCode(i);
        notes = replaceAll(notes,a+"-1",document.getElementById(a+" (-1)").value.toLowerCase());
        notes = replaceAll(notes,a+"\\+1",document.getElementById(a+" (+1)").value.toLowerCase());
        notes = replaceAll(notes,a,document.getElementById(a).value.toLowerCase());
    }
    document.getElementById("output").value = notes;


}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}