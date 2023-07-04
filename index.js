let a=fetch("https://kontests.net/api/v1/all");
a.then((res)=>{
    return res.json();
}).then((val)=>{
    let r=document.getElementsByClassName("row")[0];
    r.innerHTML="";
    val.forEach((element) => {
        let src="";
        if(element.site=="CodeChef"){
            src+="https://avatars.githubusercontent.com/u/11960354?v=4";
        }
        else if(element.site=="AtCoder"){
            src+="https://img.atcoder.jp/assets/atcoder.png";
        }
        else if(element.site=="CodeForces"){
            src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png";
        }
        else if(element.site=="LeetCode"){
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
        }
        else if(element.site=="HackerEarth"){
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/480px-HackerEarth_logo.png";
        }
        else if(element.site=="HackerRank"){
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png";
        }
        else{
            src="https://static.vecteezy.com/system/resources/previews/004/753/002/original/custom-coding-icon-shadowed-detailed-custom-coding-logo-free-vector.jpg";
        }
        r.innerHTML+=`<div class="col-md-4 col-12">
        <div class="p-3">
            <div class="card">
                <img src=${src} class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${element.name}</h4>
                    <p class="card-text fst-italic">
                    <p class=" fs-5 fw-bolder">Platform: <i>${element.site}</i></p>
                    <b>Start Time:</b> ${element.start_time}<br> 
                    <b>End Time:</b> ${element.end_time}</p>
                    <a href="${element.url}" class="btn btn-primary">View Contest</a>
                </div>
            </div>
        </div>
    </div>`
    });
    
})