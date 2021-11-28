const submissions = [  
{name: "Jane", score: 95, date: "2020-01-24", passed: true},
{name:"Joe", score: 77, date: "2018-05-14", passed: true},
{name:"Jack", score: 59, date:"2019-07-05", passed: false},
{name: "Jill", score: 88, date: "2020-04-22", passed:true}

];



function addSubmission(array,newName,newScore,newDate){
    let passed = false;
    if (newScore >= 60){
        passed = true
    }
    let newSubmission = {name: newName, score: newScore, date: newDate, passed: passed}
    array.push(newSubmission);
}

addSubmission(submissions,"clark", 50, "2020-23-2");

function deleteSubmissionByIndex(array,index){
     array.splice(index, 1);
}

console.log(deleteSubmissionByIndex(submissions,1));

function deleteSubmissionByName(array, name){
    let indexPosition = array.findIndex(submission => submission.name === name);
   array.splice([indexPosition], 1);
   console.log(submissions);
    
}
console.log(deleteSubmissionByName(submissions, "Joe"));

editSubmision = function(array,index,score){
    array[index].score = score;
    if(score < 60){
        array[index].passed = false;
    }
    else {
        array[index].passed = true;
    }

}
editSubmision(submissions, 1, 99);
console.log(submissions);


findSubmissionByName = function(array, name){
    let foundName = array.find(sub => sub.name === name);
    console.log(foundName);
   
}
console.log(findSubmissionByName(submissions, "Jack"));


function findLowestScore(array){
    array.forEach(sub => sub.score );{
        let lowestScore = 100;
        for(sub of array)
            if(sub.score < lowestScore){
                lowestScore = sub.score;
                console.log(sub);
            }
    }
} 

console.log(findLowestScore(submissions));

findAverageScore = function(array){
    let sum = 0;
    for( let submission of array){
        sum += submission.score 
    }
    let averageScore = sum / array.length;
    return averageScore;
}
console.log(findAverageScore(submissions));


filterPassing = function(array){
    const passingStudents = array.filter(submission => submission.passed === true);
    console.log(passingStudents);
    
}
filterPassing(submissions);


filter90AndAbove = function(array){
    const above90 = array.filter(submission => submission.score >= 90);
    console.log(above90);
}
filter90AndAbove(submissions);

function findLowestScore(array){
    let lowestScore = 100;
    let lowestIndex = 0;
    array.forEach((submission, ind) => {
        if(submission.score < lowestScore){
        lowestScore = submission.score;
        lowestIndex = ind;
        }        
    });
return array[lowestIndex];
}
   
console.log(findLowestScore(submissions));


// Extended Challenges 

// 1. log range between 2 numbers.

createRange = function(start, end){
    newArray = [ ];
    for(let i = start; i < end; i++){
        newArray.push(i);
    }
    return newArray;
}
console.log(createRange(2, 25));

// 2. Return an object bwith array values as keys and the number of times that key appears. 

const elementsString = ["a", "b", "c", "d", "e", "a", "b"];
    let obj = { };
countElements = function(array){
    for (let i = 0; i < array.length; i++){
        if(obj[array[i]] != null ){
            obj[array[i]] += 1;
        }
        else {
            obj[array[i]] = 1;
        }
    }
    console.log(obj);
}

console.log(countElements(elementsString));


const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)
