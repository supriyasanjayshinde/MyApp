var app = new function () {
    var countries = [];
    var mode = "";
    this.FetchAll = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    
    if (this.readyState == 4 && this.status == 200) {
    countries = JSON.parse(xhttp.responseText);
    app.printtable();
    }
};
xhttp.open("GET", "http://zigwheels.herokuapp.com/api/teams/", true);
xhttp.send();
};
this.printtable = function () {
// console.log(countries);
var data = '';
for (var i in countries) {
data += '<tr>';
data += '<td>' + countries[i].teamid + '</td>';
data += '<td>' + countries[i].teamname + '</td>';
data += '<td><button onclick="app.Edit(' + countries[i].teamid + ')">Edit</button></td>';
data += '<td><button onclick="app.Delete(' + countries[i].teamname + ')">Delete</button></td>';
data += '</tr>';
data += '<br>';
data += '<br>';
}
document.getElementById("countries").innerHTML = data;
 };
 
 this.Edit = function (teamid) {
 mode = "edit";
 document.getElementById('btn').innerHTML = "Update";
 for (var i = 0; i < countries.length; i++) {
 
 if (countries[i].teamid == teamid) {
 // alert(teamid);
 document.getElementById('teamid').value = countries[i].teamid;
 document.getElementById('teamname').value = countries[i].teamname;
 }
 }
 };

 this.saveorupdate = function () {
    var id = document.getElementById('teamid').value;
    var name = document.getElementById('teamname').value;
    if (mode == "") {
    alert("save called");
    // {"teamid": 0, "teamname": "TeamIndia"}
    var newTeam = {"teamid": 0, "teamname": name};
    alert(newTeam);
    var url = "http://zigwheels.herokuapp.com/api/teams/";
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
    app.FetchAll();
}
}
xhr.open("POST", url , true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.send(JSON.stringify(newTeam));
app.FetchAll();
}
else {
    alert("update called");
    // alert("teamid" + teamid + "teamname " + teamname);
    // var updateTeam = {"teamid": 0, "teamname": name};
    // alert(updateTeam);
    var url = "http://zigwheels.herokuapp.com/api/teams/";
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
    app.FetchAll();
    }
    }
    xhr.open("PUT", url, true);
 xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 xhr.send();
 document.getElementById('btn').innerHTML = "Add";
 mode = "";
 app.FetchAll();
 }
 
 document.getElementById('teamid').value = "";
 document.getElementById('teamname').value = "";
 };
}