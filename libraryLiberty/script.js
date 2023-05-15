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
            <fieldset class="quest">
                <legend>${que}</legend>
                <input type="radio" name="ans1" id="ans1-yes" value="yes">
                <label for="ans1-yes">${ans1}</label>

                <input type="radio" name="ans2" id="ans2-no" value="no" checked>
                <label for="ans2-no">${ans2}</label>

                <input type="radio" name="ans3" id="ans3-no" value="no" checked>
                <label for="ans3-no">${ans3}</label>
            </fieldset>`;
            
        showPls.append(theListItem);
        });
    }
    catch{
        // console.error('Error while fetching questions', error);
    };
    }
    displayQuestions();

    // background color change
    const granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#FFF0A9', '#FFF0E8'],
                    ['#FFFCF8', '#EBF3FF'],
                    ['#D6EAFF', '#D5FFD3']
                ]
            }
        }
    });

})()
