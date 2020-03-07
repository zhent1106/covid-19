window.onload = move()

function move() {
  var container = document.getElementById('container')

  var width = 0
  var id = setInterval(frame, 50)
  function frame() {
    if (width == 100) {
      clearInterval(id)
      container.style.display = 'none'
      confessionWall()
    } else {
      width++
      container.style.width = width + '%'
    }
  }
}
function confessionWall() {
  let persons = [
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%281%29.jpg',
      name: '阳，你在我心上。',
      gender: '女',
      constellation: '白羊座',
      birthday: '1999/3/4',
      hobby: '钢琴，古琴，古筝，琵琶。',
      motto: '闪电从不打在相同的地方，人不该被相同的方式伤害两次。',
      address: '河北省',
      qqNumber: '2311333434',
      confession: '我想在五十年之后我一定还是像现在一样爱你；'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%2810%29.jpg',
      name: '写生的少女',
      gender: '女',
      constellation: '水瓶座',
      birthday: '1999/3/4',
      hobby: '运动',
      motto: '善良的人永远是受苦的，那忧苦的重担似乎是与生俱来的，因此只有忍耐。',
      address: '山西省',
      qqNumber: '231422536',
      confession: '我不要短暂的温存，只要你一世的陪伴；'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%2811%29.jpg',
      name: '草莓味的风',
      gender: '女',
      constellation: '巨蟹座',
      birthday: '1999/3/4',
      hobby: '肚皮舞',
      motto: '上有天，下有地，中间站着你自己，做一天人，尽一天人事儿。',
      address: '北京市',
      qqNumber: '231422536',
      confession: '只因你太美好令我无法坦白说出我爱你；'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%282%29.jpg',
      name: '风吹来的少女',
      gender: '女',
      constellation: '巨蟹座',
      birthday: '1999/3/4',
      hobby: '摄影',
      motto: '摔倒了爬起来就好。',
      address: '四川省',
      qqNumber: '231422536',
      confession: '我的猫很皮，可不可以帮我管它……'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%283%29.jpg',
      name: '清浅ˋ旧时光',
      gender: '男',
      constellation: '双鱼座',
      birthday: '1999/3/4',
      hobby: '旅行',
      motto: '虽然过去不能改变，未来可以。',
      address: '四川省',
      qqNumber: '231422536',
      confession: '不知道爱你算不算是一个贴心的理由？'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%284%29.jpg',
      name: '怀念你掌心的温度',
      gender: '男',
      constellation: '摩羯座',
      birthday: '1999/3/4',
      hobby: '手工',
      motto: '太阳照亮人生的路，月亮照亮心灵的路。',
      address: '山东省',
      qqNumber: '231422536',
      confession: '好笑吗？身边没你，好怪，陪我一生一世好吗？'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%285%29.jpg',
      name: '初恋栀子花',
      gender: '男',
      constellation: '白羊座',
      birthday: '1999/3/4',
      hobby: '烹饪（做菜…）',
      motto: '我们必须拿我们所有的，去换我们所没有的。',
      address: '天津市',
      qqNumber: '233422536',
      confession: '和你在一起只是我不想给任何人机会！！'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%286%29.jpg',
      name: '南巷清风',
      gender: '男',
      constellation: '水瓶座',
      birthday: '1999/3/4',
      hobby: '纪录片',
      motto: '想的多一定没做的多有效，然而不想便做一定没什么效果。',
      address: '山东省',
      qqNumber: '231422536',
      confession: '我想未来我一定会天天陪你上市场。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%286%29.jpg',
      name: '叶落若相随',
      gender: '男',
      constellation: '白羊座',
      birthday: '1999/3/4',
      hobby: '养花',
      motto: '幸福就像香水，洒给别人也一定会感染自己。',
      address: '河南省',
      qqNumber: '331422536',
      confession: '自从你出现后，我才知道原来有人爱是那么的美好。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%287%29.jpg',
      name: '蓝色之海',
      gender: '男',
      constellation: '水瓶座',
      birthday: '1999/3/4',
      hobby: '多肉植物，小盆景',
      motto: '要做的事情总找得出时间和机会；不愿意做的事情也总能找得出借口。',
      address: '湖南省',
      qqNumber: '431422536',
      confession: '.对你，不管阴晴圆缺，也不变。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%288%29.jpg',
      name: '空叹花语意',
      gender: '男',
      constellation: '狮子座',
      birthday: '1999/3/4',
      hobby: '健身',
      motto: '有能力的人影响别人，没能力的人，受人影响。',
      address: '湖南省',
      qqNumber: '231422436',
      confession: '想想和我一同看日升日落的喜悦吧。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images%20%289%29.jpg',
      name: '初晴',
      gender: '男',
      constellation: '天秤座',
      birthday: '1999/3/4',
      hobby: '油画和素描',
      motto: '有智者立长志，无志者长立志',
      address: '四川省',
      qqNumber: '251422536',
      confession: '我愿意用一千万年等待你初春暖阳般的绽颜一笑。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/images.jpg',
      name: '眼眸里的温暖',
      gender: '男',
      constellation: '天秤座',
      birthday: '1999/3/4',
      hobby: '游泳',
      motto: '世上无难事，只要肯登攀。',
      address: '甘肃省',
      qqNumber: '231422536',
      confession: '在每一个有你相伴的夜，不再过于寂寥冷清。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/%E4%B8%8B%E8%BD%BD%20%283%29.jpg',
      name: '北音执念。',
      gender: '女',
      constellation: '金牛座',
      birthday: '1999/3/4',
      hobby: '读书、看电影、追美剧、看纪录片',
      motto: '不求做的最好，但求做的更好。',
      address: '黑龙江省',
      qqNumber: '261422536',
      confession: '我只是须要一个可以让我休息的港湾。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/%E4%B8%8B%E8%BD%BD%20%284%29.jpg',
      name: '梦里兽',
      gender: '男',
      constellation: '金牛座',
      birthday: '1999/3/4',
      hobby: '美剧。',
      motto: '冰冻三尺，非一日之寒，成大事者不拘小节。',
      address: '甘肃省',
      qqNumber: '731422536',
      confession: '不管今世也来世也好。我所要的只有你。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/%E4%B8%8B%E8%BD%BD%20%285%29.jpg',
      name: '甜的很正经',
      gender: '女',
      constellation: '处女座',
      birthday: '1999/3/4',
      hobby: '绘画',
      motto: '智者千虑，必有一失；遇者千虑，必有一得。',
      address: '天津市',
      qqNumber: '231442536',
      confession: '你的话已经锁在我的记忆里了那钥匙你就替我保管一辈子吧。'
    },
    {
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/confession/%E4%B8%8B%E8%BD%BD.jpg',
      name: '舔奶盖的小仙女',
      gender: '女',
      constellation: '白羊座',
      birthday: '1999/3/4',
      hobby: '编织',
      motto: '是金子总会发光。',
      address: '湖南省',
      qqNumber: '23112536',
      confession: '如果没有你的爱……活著的目标将难复再！'
    }
  ]
  let wall = document.getElementById('wall')
  let leftWall = document.createElement('div')
  leftWall.style.height = '600px'
  leftWall.style.width = '700px'

  leftWall.style.position = 'absolute'
  leftWall.style.transform = ' perspective(500px) rotatey(19deg)'
  leftWall.style.margin = '179px 1.4%'

  leftWall.style.display = 'flex'
  leftWall.style.flexDirection = 'row'
  leftWall.style.flexWrap = 'wrap'
  leftWall.style.overflowX = 'hidden'
  let rightWall = document.createElement('div')

  rightWall.style.height = '700px'
  rightWall.style.width = '1200px'
  rightWall.style.background = 'rgb(140,172,159)'
  rightWall.style.position = 'absolute'
  rightWall.style.borderBottomLeftRadius = '20px'
  rightWall.style.transformStyle = 'preserve-3d'
  rightWall.style.transform = ' perspective(500px) rotatey(-15deg)'
  rightWall.style.margin = '120px 24%'
  rightWall.style.display = 'flex'
  rightWall.style.flexDirection = 'row'
  rightWall.style.flexWrap = 'wrap'

  function wallFunction(item, index) {
    let person = persons[index]
    let people = `<div>
   
    <div id ="people-info">
    
    <span id="people-span">${person.name}:</span><span>${person.confession}</span>
    <div class = "people-info-content id="people-el" >
  <div class= "info-top"  style="background: url(${person.avatar}) fixed center;">
 <img src="../image/love1.png"></img>
</div>
<h3>${person.name}</h3>

  <p>性别：  ${person.gender} </p>
  <p>生日：  ${person.birthday}</p>
  <p>星座：  ${person.constellation}</p>
  <p>爱好：  ${person.hobby}</p>
  <p>qq：  ${person.qqNumber}</p>
  <p>省市：  ${person.address}</p>
  <p>座右铭：  ${person.motto}</p>
  

   
    </div>
    </div>
    </div>`

    let card = `<div>
   
   <div class ="picture">
    <img  src="${person.avatar}"/></div>
    </div>`

    let info = document.createElement('div')

    info.style.marginTop = '30px'
    info.style.color =
      '#' +
      Math.random()
        .toString(16)
        .slice(2, 8)
    let content = document.createElement('div')
    info.innerHTML = people
    content.innerHTML = card

    rightWall.appendChild(content)
    leftWall.appendChild(info)

    wall.appendChild(rightWall)
    wall.appendChild(leftWall)
  }
  persons.forEach(wallFunction)
}
function waterfall() {}
