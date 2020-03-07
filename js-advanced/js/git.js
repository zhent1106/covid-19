window.onload = move()

function move() {
  var elem = document.getElementById('myBar')
  var width = 0
  var id = setInterval(frame, 10)
  function frame() {
    if (width == 100) {
      alert('加载完毕')
      clearInterval(id)
      elem.style.display = 'none'
      loadData()
    } else {
      width++
      elem.style.width = width + '%'
    }
  }
}
function loadData() {
  let developers = [
    {
      index: '1',
      Avatar: 'https://avatars2.githubusercontent.com/u/3257156?v=4&s=64',
      name: 'Stefano Gottardo',
      alias: 'CastagnaIT',
      title: 'plugin.video.netflix',
      content: 'InputStrean based Netflix plugin for Kodi',
      Followers: '137',
      Following: '2',
      Repos: '21',
      location: 'Vebice'
    },
    {
      index: '2',
      Avatar: 'https://avatars2.githubusercontent.com/u/685518?s=96&v=4',
      name: 'Chris Garrett',
      alias: 'pzuraq',
      title: 'liquid-tether',
      content: 'Animations for modals,dropdowns,popovers,and more!Built on Liquid Fire!',
      Followers: '93',
      Following: '3',
      Repos: '45',
      location: 'San Frano'
    },
    {
      index: '3',
      Avatar: 'https://avatars0.githubusercontent.com/u/188?v=4&s=64',
      name: 'Natalie Weizenbaum',
      alias: 'nex3',
      title: 'perspective-el',
      content: 'Perspectives for Emacs.',
      Followers: '1.3k',
      Following: '0',
      Repos: '103',
      location: 'Seattle'
    },
    {
      index: '4',
      Avatar: 'https://avatars1.githubusercontent.com/u/316371?v=4&s=64',
      name: 'Liran Tal',
      alias: 'lirantal',
      title: 'dockly',
      content: 'Immersive terminal interface for managing docker containers and services',
      Followers: '596',
      Following: '267',
      Repos: '239',
      location: 'Tel Aviv, Israel'
    },
    {
      index: '5',
      Avatar: 'https://avatars0.githubusercontent.com/u/1409041?s=96&v=4',
      name: 'Juanpe Catalan',
      alias: 'Janpe',
      title: 'SkeletonView',
      Followers: '443',
      Following: '40',
      Repos: '43',
      location: 'Madird'
    },
    {
      index: '6',
      Avatar: 'https://avatars0.githubusercontent.com/u/5663952?s=96&v=4',
      name: 'Klaus Post',
      alias: 'beorn7',
      title: 'compress',
      content: 'Optimized compression packages',
      Followers: '695',
      Following: '4',
      Repos: '81',
      location: 'Denamrk'
    },
    {
      index: '7',
      Avatar: 'https://avatars2.githubusercontent.com/u/458654?s=96&v=4',
      name: 'Bruno Rocha',
      alias: 'rochacbruno',
      title: 'dynaconf',
      content: 'The dynamic configurator for your Python Project',
      Followers: '483',
      Following: '28',
      Repos: '12',
      location: 'Madird'
    }
  ]
  let gitlist = document.getElementById('container')
  for (let i = 0; i < 7; i++) {
    let developer = developers[i]
    let index = i + 'developer'
    let contentCard = `<div class="contentcard">
        <h3 class="index">
          ${developer.index}
        </h3>
        <img class="icon" id=${index} src="${developer.Avatar}"/>
        <a class="name" href="">${developer.name}</a>
        <p class="alias">${developer.alias}</p> 
        <svg class="octicon" viewBox="0 0 12 16"  width="20" height="20" >
        <path d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z">
        </path></svg>
              <svg class="book" viewBox="0 0 12 16"  width=20 height="20">
              <path  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
              </path></svg>

        <p class="PO">POPULAR REPO</p>
         <a class="title" href="">${developer.title}</a> 
         <p class="content">${developer.content}</p> 
         <div class="follow">Follow</div> 
        </div>
        `
    let infoId = i + 'info'
    let info = `<div class="card" id=${infoId}>
    <img class="card-icon" src="${developer.Avatar}"/>
    <p class="card-alias">${developer.alias}</p> 
    <p class="card-name" href="">${developer.name}</p>
    <span class="span1">
    <h3 class="follows">${developer.Followers}</h3>
    <p class="following">${developer.Following}</p> 
    <p class="repos">${developer.Repos}</p> 
    </span>
     <span class="span2">
     <p>Followers</p>
     <p>Following</p>
     <p>Repos</p>
     </span>
     <p class="location">${developer.location}</p>
     </div>`

    gitlist.innerHTML += contentCard
    gitlist.innerHTML += info
  }
  useShow()
}

function useShow() {
  let iconArr = []
  for (let i = 0; i < 7; i++) {
    let iconId = i + 'developer'
    iconArr.push(iconId)
  }
  for (let i = 0; i < 7; i++) {
    document.getElementById(iconArr[i]).onmouseover = function() {
      let infoId = i + 'info'
      var divFloat = document.getElementById('' + infoId)
      divFloat.style.display = 'block'
    }
    document.getElementById(iconArr[i]).onmouseout = function() {
      let infoId = i + 'info'
      var divFloat = document.getElementById('' + infoId)
      divFloat.style.display = 'none'
    }
  }
}
