(function(){
    'use strict';

    AOS.init();

    Parse.initialize("D1pu9y1JiK7RycCuQRnleUAbt8uVMmbqDrxh5wRZ","Ewm5ZDgCdBS8cvsIdule1IS0VdsphMUR2Vv0XYUA");
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const showPls = document.querySelector("main ol");    
    async function displayQuestions() {
    const allquestions = Parse.Object.extend('Questionnaire');
    const query = new Parse.Query(allquestions);
    try {
        const results = await query.ascending('questions').find();
        console.log(results);

        results.forEach( function(eachQuestion){
            const id = eachQuestion.id;
            const ans1 = eachQuestion.get('answer1');
            const ans2 = eachQuestion.get('answer2');
            const ans3 = eachQuestion.get('answer3');

            const theListItem = document.createElement("li");
        theListItem.setAttribute("id", `r-${id}`);
        theListItem.innerHTML = `
        <div class="quest">${question}</div>
        <div class="ans">
            ${ans1}
            ${ans2}
            ${ans3}
        </div>`;
        
        showPls.append(theListItem);
        });
    }
    catch{
        // console.error('Error while fetching questions', error);
    };
    }
    
    displayQuestions();

})()
