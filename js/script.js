let interviewArr = [];
let rejectedArr = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let allJobsCount = document.getElementById("all-jobs");

function countCalculate() {
  totalCount.innerText = allJobsCount.children.length;
  interviewCount.innerText = interviewArr.length;
  rejectedCount.innerText = rejectedArr.length;
}

countCalculate();

const btnAllFilter = document.getElementById("btn-all-filter");
const btnInterviewFilter = document.getElementById("btn-interview-filter");
const btnRejectedFilter = document.getElementById("btn-rejected-filter");

function toggleBtn(id) {
  btnAllFilter.classList.remove("btn-primary");
  btnInterviewFilter.classList.remove("btn-primary");
  btnRejectedFilter.classList.remove("btn-primary");

  btnAllFilter.classList.add("text-[#64748B]");
  btnInterviewFilter.classList.add("text-[#64748B]");
  btnRejectedFilter.classList.add("text-[#64748B]");

  const btnPrimary = document.getElementById(id);
  btnPrimary.classList.add("btn-primary");
  btnPrimary.classList.remove("text-[#64748B]");

  if(id == 'btn-interview-filter'){
    allJobsCount.classList.add('hidden');
    filterSection.classList.remove('hidden');
  }
  else if(id == 'btn-all-filter'){
    allJobsCount.classList.remove('hidden');
    filterSection.classList.add('hidden');
  }
}

const mainList = document.querySelector("main");

mainList.addEventListener("click", function (event) {
    
  if (event.target.classList.contains("btn-interview")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobInfo = parentNode.querySelector(".job-info").innerText;
    const jobStatus = parentNode.querySelector(".status-btn").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

      parentNode.querySelector('.status-btn').innerText = 'Interview';
    //   parentNode.querySelector('.status-btn').classList.add('btn', 'btn-outline', 'btn-accent');


    const jobObj = {
      companyName,
      jobPosition,
      jobInfo,
      jobStatus: "Interview",
      jobDescription,
    };
    
    const jobSearch = interviewArr.find(
      (item) => item.companyName == jobObj.companyName,
    );

    if (!jobSearch) {
      interviewArr.push(jobObj);
    }

    renderInterview();
  }
});

const filterSection = document.getElementById("filter-section");
function renderInterview() {
    filterSection.innerHTML = ``;

  for (let interview of interviewArr) {
    

    
    let div = document.createElement("div");
    div.classList = "bg-[#FFFFFF] p-6 rounded-md flex justify-between job-card mb-5";
    div.innerHTML = `
                    <div>
                        <h3 class="mb-1 text-[#002C5C] text-[18px] font-semibold leading-7 company-name">${interview.companyName}</h3>
                        <p class="mb-5 text-[#64748B] leading-6 job-position">${interview.jobPosition}</p>
                        <p class="mb-5 text-[#64748B] text-[14px] leading-5 job-info">Remote
                            •
                            Full-time
                            •
                            $130,000 - $175,000</p>
                        <p class="status-btn btn mb-2">${interview.jobStatus}</p>
                        <p class="mb-5 text-[#323B49] text-[14px] leading-5 job-description">${interview.jobDescription}</p>
                        <div>
                            <button class="btn btn-outline btn-accent btn-interview">Interview</button>
                            <button class="btn btn-outline btn-secondary btn-rejected">Rejected</button>
                        </div>
                    </div>
                    <div>
                        <button class="btn-delete btn btn-ghost rounded-full"><i class="fa-regular fa-trash-can"></i></button>

                    </div>
        
    `;
    filterSection.appendChild(div);
  }
}
