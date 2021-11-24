const submissions = [
{name: "Jane", score: 95, date: "2020-01-24", passed: true},
{name:"Joe", score: 77, date: "2018-05-14", passed: true},
{name:"Jack", score: 59, date:"2019-07-05", passed: false},
{name: "Jill", score: 88, date: "2020-04-22", passed:true}

]


function addSubmission(array,newName,newScore,newDate){
    let passed = false;
    if (newScore >= 60){
        passed = true
    }
    let newSubmission = {name: newName, score: newScore, date: newDate, passed: passed}
    array.push(newSubmission);
}

function deleteSubmissionByIndex(array,index){
     array.splice(index, 1);
}

function deleteSubmissionByName(array, name){
    let indexPosition = array.findIndex(submission => submission.name === name);
   console.log(array.splice([indexPosition], 1));
   console.log(submissions);
    
}
console.log(deleteSubmissionByName(submissions, "Joe"));



editSubmision = function(array,index,score){

}


findSubmissionByName = function(array, name){
    let foundName = array.find(sub => sub.name === name);
    console.log(foundName);
   
}
console.log(findSubmissionByName(submissions, "Jack"));

/*
function findLowestScore(array){
    let lowestScore = 100
    for(let sub of array){
        if(sub.score < lowestScore){
            lowestScore = sub.score;
            

            }
        }
    }

function findAverageScore(array)
    let averageScore = 0;
    for(let averageScore of submissions ){

    }


 addSubmission(submissions,"Jimmy", 50, "2020-23-2");
 console.log(submissions);
 console.log(deleteSubmissionByIndex(submissions,1));
 console.log(findLowestScore(submissions));

 */

