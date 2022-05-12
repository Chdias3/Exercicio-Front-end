// aumentar a div/ trabalhando com style
var sendForm = document.querySelector('.sendForm')
var createTopic = document.querySelector('.createTopic')
var newTopic = document.querySelector('.newTopic')
var boxDiscussion = document.getElementById('boxDiscussion')
var lineA = document.getElementById('lineA')
var subjectBox1 = document.getElementById('subjectBox1')
var subjectBox2 = document.getElementById('subjectBox2')

function openFormA() {
  if (sendForm.className === 'sendForm') {
    boxDiscussion.style.height = 750 + 'px'
    boxDiscussion.style.borderBottom = '1px solid #ECECEC'
    subjectBox1.style.marginTop = 74 + 'px'
    subjectBox2.style.top = 375 + 'px'
    footerM.style.marginTop = 1648 + 'px'
    inserts.style.height = 1829 + 'px'
  } else if (createTopic.className === 'createTopic') {
    boxDiscussion.style.height = 692 + 'px'
    boxDiscussion.style.borderBottom = 'none'
    inserts.style.overflow = 'hidden'
    lineA.style.marginTop = 13 + 'px'
    subjectBox1.style.marginTop = 45 + 'px'
    subjectBox2.style.marginTop = 210 + 'px'
    inserts.style.height = 1768 + 'px'
    footerM.style.marginTop = 1591 + 'px'
  } else if (newTopic.className === 'newTopic') {
    boxDiscussion.style.height = 692 + 'px'
    boxDiscussion.style.borderBottom = 'none'
    lineA.style.marginTop = 13 + 'px'
    inserts.style.height = 1768 + 'px'
    subjectBox1.style.marginTop = 45 + 'px'
    subjectBox2.style.top = 304 + 'px'
    footerM.style.marginTop = 1591 + 'px'
  } else {
    boxDiscussion.style.height = 621 + 'px'
  }
}

// Função para mostrar mais e menos o card assunto
var cardA = document.querySelector('.cardA')
var flex = document.querySelector('.flex.out')
var flex2 = document.querySelector('.flex2.out')
var flex3 = document.querySelector('.flex3.out')
var flex4 = document.querySelector('.flex4.out')
var mostra = document.getElementById('mostra')
var idText = document.getElementById('idText')
var cardB = document.getElementById('cardB')
var inserts = document.getElementById('inserts')
var footerM = document.getElementById('footerM')
var boxDiscussion = document.getElementById('boxDiscussion')
var sendForm = document.querySelector('.sendForm')
var footerM = document.getElementById('footerM')
var img7 = document.querySelector('.img7')
var img10 = document.querySelector('.img10')

cardA.addEventListener('click', cardSee)

function cardSee() {
  if (
    flex.className === 'flex out' &&
    createTopic.className === 'createTopic'
  ) {
    mostra.style.opacity = '0'
    idText.style.opacity = '1'
    cardA.innerHTML = '?'
    inserts.style.overflow = 'visible'
    inserts.style.height = 2078 + 'px'
    footerM.style.marginTop = 2078 + 'px'
    img7.classList.add('out')
    img10.classList.add('out')
    boxDiscussion.classList.add('out')
    flex.classList.remove('out')
    flex.style.transition = 'opacity 1s ease-out'
    flex2.classList.remove('out')
    flex2.style.transition = 'opacity 1s ease-out'
    flex3.classList.remove('out')
    flex3.style.transition = 'opacity 1s ease-out'
    flex4.classList.remove('out')
    flex4.style.transition = 'opacity 1s ease-out'
    More.style.opacity = '0'
    stitches.style.opacity = '1'
    // boxSummary.classList.remove('open')
    boxSummary.className = ''
    boxDiscussion.style.top = ''
  } else if (createTopic.className === 'createTopic') {
    mostra.style.opacity = '1'
    idText.style.opacity = '0'
    cardA.innerHTML = ''
    inserts.style.overflow = 'hidden'
    inserts.style.height = 1701 + 'px'
    footerM.style.marginTop = 1519 + 'px'
    img7.classList.remove('out')
    img10.classList.remove('out')
    boxDiscussion.classList.remove('out')
    flex.classList.add('out')
    flex2.classList.add('out')
    flex3.classList.add('out')
    flex4.classList.add('out')
  }
}

// function cardSeeB() {
//   if (More.style.opacity === '1') {
//     img7.classList.remove('out')
//     img10.classList.remove('out')
//   }
// }

// Função para trocar a div/ - Criar topico/ - Enviar assunto e conteud/ -Criar novo tópico
var envi = document.querySelector('.send')
var buttonTopic = document.querySelector('.buttonTopic')
var voltarForm = document.querySelector('.buttonCreate1')
var createTopic = document.querySelector('.createTopic')
var sendForm = document.querySelector('.sendForm.out')
var newTopic = document.querySelector('.newTopic.out')
var boxDiscussion = document.getElementById('boxDiscussion')
var boxSummary = document.getElementById('boxSummary')
var inserts = document.getElementById('inserts')
var footerM = document.getElementById('footerM')

envi.addEventListener('click', sai)
buttonTopic.addEventListener('click', entra)
voltarForm.addEventListener('click', voltar)

function entra() {
  if (createTopic.className === 'createTopic') {
    createTopic.classList.add('out')
    flex.classList.add('out')
    flex2.classList.add('out')
    flex3.classList.add('out')
    flex4.classList.add('out')
    // img7.classList.add('out')
    // img10.classList.add('out')
    stitches.style.opacity = '1'
    More.style.opacity = '0'
    boxSummary.className = ''
    see.innerHTML = ''
    boxDiscussion.style.top = ''
    inserts.style.height = ''
    footerM.style.marginTop = 1577 + 'px'
  }
  if (sendForm.className === 'sendForm out') {
    sendForm.classList.remove('out')
  }
}

function sai() {
  if (sendForm.className === 'sendForm') {
    sendForm.classList.add('out')
    sendForm.classList.remove('#sendForm')
  }
  if (newTopic.className === 'newTopic out') {
    newTopic.classList.remove('out')
  }
}

function voltar() {
  if (newTopic.className === 'newTopic') {
    newTopic.classList.add('out')
  }
  if (sendForm.className === 'sendForm out') {
    sendForm.classList.remove('out')
  }
}

// Função ver mais e ver menos do resumo  / trabalhando com o style
var stitches = document.getElementById('stitches')
var More = document.getElementById('More')
var see = document.getElementById('see')

function moreRedC() {
  if (stitches.style.opacity === '0') {
    stitches.style.opacity = '1'
    More.style.opacity = '0'
    see.innerHTML = ''
  } else {
    stitches.style.opacity = '0'
    More.style.opacity = '1'
    see.innerHTML = ''
    idText.style.opacity = '0'
    sendForm.classList.add('out')
    newTopic.classList.add('out')
    // boxDiscussion.style.height = 621 + 'px'
    boxDiscussion.classList.remove('out')
    subjectBox1.style.marginTop = 135 + 'px'
    subjectBox2.style.marginTop = 299 + 'px'
    subjectBox2.style.top = 'inherit'
    boxDiscussion.style.borderBottom = '1px solid #ECECEC'
    createTopic.classList.remove('out')
    flex.classList.add('out')
    flex2.classList.add('out')
    flex3.classList.add('out')
    flex4.classList.add('out')
    img7.classList.remove('out')
    img10.classList.remove('out')
    inserts.style.height = 1701 + 'px'
    inserts.style.overflow = 'hidden'
    footerM.style.marginTop = 1577 + 'px'
  }
}

function includeA() {
  if (
    (sendForm.className === 'sendForm out' && stitches.style.opacity === '0') ||
    newTopic.className === 'newTopic'
  ) {
    boxDiscussion.style.height = 621 + 'px'
  }
}

function removeA() {
  if (createTopic.className === 'createTopic') {
    boxDiscussion.removeAttribute('style')
  }
}

// RESUMO
var clickSummary = document.getElementById('clickSummary')

function clickSummary() {
  if (sendForm.className === 'sendForm' && stitches.style.opacity === '0') {
    boxDiscussion.style.height = 621 + 'px'
  }
}

// RESUMO
// Para a borda ir para baixo / trabalhando com class / posso fazer com toggle tambem
var boxSummary = document.getElementById('boxSummary')

function moreRedB() {
  if (boxSummary.className == 'open') {
    boxSummary.className = ''
    see.innerHTML = ''
  } else {
    boxSummary.className = 'open'
    see.innerHTML = ''
  }
}

// RESUMO
// Para a div ir para baixo / trabalhando com o style
function moreRedA() {
  var boxDiscussion = document.getElementById('boxDiscussion')
  var boxSummary = document.getElementById('boxSummary')
  var inserts = document.getElementById('inserts')
  var footerM = document.getElementById('footerM')

  if (boxSummary.className == '') {
    boxDiscussion.style.top = 296 + 'px'
    inserts.style.height = 1998 + 'px'
    footerM.style.marginTop = 1817 + 'px'
  }
  if (boxSummary.className == 'open') {
    boxDiscussion.style.top = ''
    inserts.style.height = ''
    footerM.style.marginTop = ''
  }
}
