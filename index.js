google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawGauge);

var gaugeOptions = {min: 0, max: 220, yellowFrom: 180, yellowTo: 200, redFrom: 200, redTo:220, minorTicks: 10};
// var gauge;

function drawGauge() {
    gaugeData = new google.visualization.DataTable();
    gaugeData.addColumn('number', 'Speed');
    gaugeData.addRows(1);
    gaugeData.setCell(0, 0, 0);
    gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));
    gauge.draw(gaugeData, gaugeOptions);
}

function changeSpeed(dir) {
    gaugeData.setValue(0, 0, gaugeData.getValue(0, 0) + dir);
    gauge.draw(gaugeData, gaugeOptions);
}

function update(){
    var x = document.querySelector("#inp").value;
    console.log(x);
    if(x>=0 && x<=220){
        if(x>180 && x<200){
            createSound();
        }
        if(x>=200 && x<220){
            createSound();
            createSound();
        }
        var res = x - gaugeData.getValue(0,0);
        changeSpeed(res);
        return ;
    }
    else{
        alert("Speed cannot be achieved!");
        changeSpeed(0-gaugeData.getValue(0,0));
        return ;
    }
}

function pressed(e){
    if(e.keyCode==13)
        update();
}

function createSound(){
    var snd = new Audio("beep.mp3"); // buffers automatically when created
    snd.play();
}