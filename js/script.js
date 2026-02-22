let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let allJobsCount = document.getElementById('all-jobs');

let interviewArr = [];
let rejectedArr = [];

let mainList = document.getElementsByTagName('main')


function countCalculate(){
    totalCount.innerText = allJobsCount.children.length;
    interviewCount.innerText = interviewArr.length;
    rejectedCount.innerText = rejectedArr.length;
}

countCalculate()

const btnAllFilter = document.getElementById('btn-all-filter');
const btnInterviewFilter = document.getElementById('btn-interview-filter');
const btnRejectedFilter = document.getElementById('btn-rejected-filter');

function toggleBtn(id){
    btnAllFilter.classList.remove('btn-primary');
    btnInterviewFilter.classList.remove('btn-primary');
    btnRejectedFilter.classList.remove('btn-primary');

    btnAllFilter.classList.add('text-[#64748B]');
    btnInterviewFilter.classList.add('text-[#64748B]');
    btnRejectedFilter.classList.add('text-[#64748B]');

    const btnPrimary = document.getElementById(id);
    btnPrimary.classList.add('btn-primary');
    btnPrimary.classList.remove('text-[#64748B]');
}