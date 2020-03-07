window.onload = function loadData() {
  let developers = [
    {
      id: '1',
      img: 'https://avatars2.githubusercontent.com/u/3257156?s=96&v=4',
      tname: 'Stefano Gottardo',
      bname: 'CastagnaIT',
      rightt: 'Popular repo',
      url: 'plugin.video.netflix',
      //  https://github.com/CastagnaIT/plugin.video.netflix
      rightb: 'InputStream based Netflix plugin for Kodi',
      Followers: '137',
      Following: '2',
      Repos: '21',
      location: 'Vebice'
    },
    {
      id: '2',
      img: 'https://avatars2.githubusercontent.com/u/555648?s=96&v=4',
      tname: 'Sébastien Eustace',
      bname: 'sdispater',
      rightt: 'Popular repo',
      url: 'pendulum',
      //  https://github.com/CastagnaIT/plugin.video.netflix
      rightb: 'Python datetimes made easy',
      Followers: '93',
      Following: '3',
      Repos: '45',
      location: 'San Frano'
    },
    {
      id: '3',
      img: 'https://avatars2.githubusercontent.com/u/685518?s=96&v=4',
      tname: 'Chris Garrett',
      bname: 'pzuraq',
      rightt: 'Popular repo',
      url: 'liquid-tether',
      //  https://github.com/CastagnaIT/plugin.video.netflix
      rightb: 'Animations for modals, dropdowns, popovers, and more! Built on Liquid Fire!',
      Followers: '1.3k',
      Following: '0',
      Repos: '103',
      location: 'Seattle'
    },
    {
      id: '4',
      img: 'https://avatars0.githubusercontent.com/u/3465117?s=96&v=4',
      tname: 'James Agnew',
      bname: 'jamesagnew',
      rightt: 'Popular repo',
      url: 'hapi-fhir',
      // <g-emoji class="g-emoji" alias="fire" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f525.png">🔥</g-emoji>
      //  https://github.com/CastagnaIT/plugin.video.netflix
      rightb: '🔥 HAPI FHIR - Java API for HL7 FHIR Clients and Servers'
    },
    {
      id: '5',
      img: 'https://avatars3.githubusercontent.com/u/315810?s=96&v=4',
      tname: 'Michael Waskom',
      bname: 'mwaskom',
      rightt: 'Popular repo',
      url: 'seaborn',
      //  https://github.com/CastagnaIT/plugin.video.netflix
      rightb: 'Statistical data visualization using matplotlib'
    },
    {
      id: '6',
      img: 'https://avatars3.githubusercontent.com/u/2625526?s=96&v=4',
      tname: 'Romain François',
      bname: 'romainfrancois',
      rightt: 'Popular repo',
      url: 'rap', //  https://github.com/CastagnaIT/plugin.video.netflix
      rightb: 'yet another experimental way of processing a data.frame rowwisely'
    },
    {
      id: '7',
      img: 'https://avatars0.githubusercontent.com/u/8456633?s=96&v=4',
      tname: 'Jesse Duffield',
      bname: 'jesseduffield',
      rightt: 'Popular repo',
      url: 'lazygit',
      rightb: 'simple terminal UI for git commands'
    },
    {
      id: '8',
      img: 'https://avatars0.githubusercontent.com/u/5663952?s=96&v=4',
      tname: 'Klaus Post',
      bname: 'klauspost',
      rightt: 'Popular repo',
      url: 'compress',
      rightb: 'Optimized compression packages'
    },
    {
      id: '9',
      img: 'https://avatars2.githubusercontent.com/u/5609886?s=96&v=4',
      tname: 'Björn Rabenstein',
      bname: 'beorn7',
      rightt: 'Popular repo',
      url: 'perks',
      rightb: 'Effective Computation of Things'
    }
  ]
  let container = document.getElementById('container')
  let index = 0
  for (let i = 0; i < 9; i++) {
    let queue = document.createElement('div')
    queue.classList.add('queue')
    container.appendChild(queue)
    for (let j = 0; j < 9; j++) {
      let developer = developers[index]
      let cardContent = ` <p class="id">${developer.id}</p>
      <div class="imgDiv">
      <img src="${developer.img}" style="box-shadow: transparent 0px 0px; cursor: pointer;"/>
      </div>
      <h3 class="tname">
        ${developer.tname}
      </h3>
      <p class="name">
       ${developer.bname}
      </p> 
      <p class="rightt">${developer.rightt}</p> 
      <h4 class="url">${developer.url}</h4> 
      <p class="rightb">${developer.rightb}</p>
      <input type="submit" name="commit" value="Follow"  class="btn" onclick="follow(${i}, this)"></input>
      <svg class="icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg> 
      <svg class="book" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
     </div>`
      let card = document.createElement('div')
      card.innerHTML = cardContent
      card.classList.add('item')
      queue.appendChild(card)
      index++
    }
  }
}
//点击事件
function follow(index, obj) {
  let isFollow = status[index]
  obj.style.cursor = 'not-allowed'
  setTimeout(function() {
    if (isFollow) {
      obj.value = 'Follow'
    } else {
      obj.value = 'Unfollow'
    }
    status[index] = !status[index]
    obj.style.cursor = 'pointer'
  }, 500)
}
