(function(){
    'use strict';
    console.log("reading");

    let globalData;

    // fetching data from my mymood.json file
    async function getData() {
        const myMoods = await fetch('data/mymood.json');
        const data = await myMoods.json();
        // console.log(data);
        globalData = data;
        document.getElementById('picker').innerHTML = createSelectList(data);
    }

    function createSelectList(data) {
        let html = '<option>---</option>';
        // converts the main object keys into an array...
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachPoint){
            html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`;
        });
        return html;
    }

    document.getElementById('picker').addEventListener('change', function() {
        const newValue = this.value;
        updateInterface(newValue, globalData);
    })

    // updating interface with different time
    function updateInterface(value, jsonData) {
        const feeling = ['like going home', 'not good', 'meh', 'ok', 'good', 'awesome'];
        let html = '<p>';
        html += `At ${jsonData[value].time}, I was feeling ${feeling[jsonData[value].mood]} because ${jsonData[value].reason}`;
        html += '</p>';
        document.getElementById('result').innerHTML = html;
    }

    getData();
})()