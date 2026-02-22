let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let allJobsCount = document.getElementById('all-jobs');

function countCalculate(){
    totalCount.innerText = allJobsCount.children.length;
}

countCalculate()