(function(){
    'use strict';

    AOS.init();

    Parse.initialize("D1pu9y1JiK7RycCuQRnleUAbt8uVMmbqDrxh5wRZ","Ewm5ZDgCdBS8cvsIdule1IS0VdsphMUR2Vv0XYUA");
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const showPls = document.querySelector("section ol");  

    async function displayQuestions() {
    const allQuestions = Parse.Object.extend('Questionnaire');
    const query = new Parse.Query(allQuestions);
    try {
        const results = await query.ascending('questions').find();
        // console.log(results);

        results.forEach( function(eachQuestion){
            const id = eachQuestion.id;
            const que = eachQuestion.get('question');
            const ans1 = eachQuestion.get('answer1');
            const ans2 = eachQuestion.get('answer2');
            const ans3 = eachQuestion.get('answer3');

            const theListItem = document.createElement("li");
        theListItem.setAttribute("id", `r-${id}`);
        theListItem.innerHTML = `
            <div class="quest">${que}</div>
            <div class="answer">
            <ul>
                <li>${ans1}</li>
                <li>${ans2}</li>
                <li>${ans3}</li>
            </ul>
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
