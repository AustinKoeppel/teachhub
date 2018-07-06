window.onload = init;
//Initialize all of our fields
function init() {
    document.getElementById("submitReview").onclick = clickboy;
}

//good ol' click boy
function clickboy(e) {
    e.preventDefault();
    let email = document.getElementById("reviewEmail").value;
    let title = document.getElementById("reviewTitle").value;
    let comments = document.getElementById("reviewBody").value;
    let stars = 0;
    for(let i=1; i < 6; i++) {
        if(document.getElementById("star"+i).checked){
            stars = i;
        }
    }
    submitSearch(email,title,comments,stars);
}

//actual ajax to submit to the backend
function submitSearch(email,title,comments,stars) {
    let searchQuery = {
        email: email,
        title: title,
        comments: comments,
        stars: stars,
        id: window.location.href.slice(window.location.href.lastIndexOf('/')+1,window.location.href.length)
    }
    $.ajax("/api/review/", {
        type: "PUT",
        data: searchQuery
      }).then(
        function() {
          console.log("SUCCESS");
          window.location.reload(true);
        }
    );
}