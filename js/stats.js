
const ctrl_name = document.getElementById('ctrl-name')
const ctrl_create = document.getElementById('ctrl-create')
const ctrl_follow = document.getElementById('ctrl-follow')
const ctrl_reponr = document.getElementById('ctrl-reponr')

let req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/ctrl-team')
req.onreadystatechange = function () {
    if (req.readyState == 4) {
       if(req.status == 200)
         {
           data = JSON.parse(this.responseText)

           ctrl_name.innerHTML = `Name<span class="yellow">:</span> ${data.login}`;
           ctrl_create.innerHTML = `Created at<span class="yellow">:</span> ${data.created_at.slice(0,10).replace(/-/g, ' ')}`;
           ctrl_follow.innerHTML = `Followers<span class="yellow">:</span> ${data.followers}`;
           ctrl_reponr.innerHTML = `Repos number<span class="yellow">:</span> ${data.public_repos}`;


          console.log(data)
         }
       else
        console.log("error");
    }
  };
  req.send()