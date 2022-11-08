function googleTabAction() {
  const allElements = document.querySelectorAll('*')
  const spellcheckElement = document.querySelectorAll('p>a>b>i')
  const pickElements = document.querySelectorAll('h3')
  setTimeout(function () {
    allElements.forEach((element) => element.tabIndex = -1)
    let firstIndex = 0
    if (spellcheckElement.length == 1) {
      firstIndex++
      spellcheckElement.forEach(element => {
        element.tabIndex = 1
        element.addEventListener('keypress', e => {
          if (e.key === 'Enter') {
            e.target.parentElement.parentElement.click()
          }
        })
      })
    }
    pickElements.forEach((element, i) => {
      element.tabIndex = i + 1 + firstIndex
      element.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          e.target.parentElement.click()
        }
      })
    })
  }, 300)
}

function translationAction() {
  const translateElements = document.querySelectorAll('button')
  if (translateElements && translateElements[24])
    translateElements[24].style.transition = 'all 1s ease'
  document.addEventListener('keydown', e => {
    if (e.key === 'Control') {
      if (translateElements[24])
        translateElements[24].classList.add('nghia')
    }
    if (e.altKey && e.key === 'q') {
      const currentButton = document.querySelectorAll('button')[24]
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      if (currentButton)
        currentButton.click()
      const currentInput = document.querySelectorAll('input')[0]
      if (currentInput) {
        currentInput.value = ''
        currentInput.focus()
      }
    } else if (e.altKey && e.key === '[') {
      const currentButton = document.querySelectorAll('button')[27]
      if (currentButton)
        currentButton.click()
    } else if (e.key === '/') {
      const currentInput = document.querySelectorAll('textarea')[0]
      const timeout = setTimeout(() => {
        currentInput.focus()
        clearTimeout(timeout)
      }, 100)
    }
  })
  document.addEventListener('keyup', e => {
    if (e.key === 'Control') {
      const isCheckClass = translateElements[24]
      if (isCheckClass)
        isCheckClass.classList.remove('nghia')
    }
  })
}

function youtubeAction() {
  document.addEventListener('keydown', e => {
    if (e.altKey && e.key === 'q') {
      const inputElement = document.querySelector('input')
      if (inputElement) {
        inputElement.value = ''
        inputElement.focus()
      }
    }
    else if (e.altKey && e.key === 'w') {
      const skipElement = document.querySelector('.ytp-ad-skip-button')
      if (skipElement) {
        skipElement.click()
      }
    }
  })
}

function oxfordDictionariesAction() {
  let inputElement = null
  let soundElements = null
  const interval = setInterval(() => {
    inputElement =  document.querySelector('#q')
    soundElements =  document.querySelectorAll('.audio_play_button')
    if (inputElement && soundElements) {
      console.log(inputElement, soundElements)
      clearInterval(interval)
    }
  }, 100)
  document.addEventListener('keydown', e => {
    if (e.altKey && e.key === 'q') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      inputElement.value = ''
      inputElement.focus()
    }
    else if(e.altKey && e.key === '[') {
      soundElements[0].click()
    }
    else if(e.altKey && e.key === ']') {
      soundElements[1].click()
    }
    else if(e.key === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      const timeout = setTimeout(() => {
        inputElement.focus()
        clearTimeout(timeout)
      }, 10)
    }
  })
}

function cambridgeDictionariesAction() {
  let inputElement = null
  let soundElements = null
  const interval = setInterval(() => {
    inputElement =  document.querySelector('#searchword')
    soundElements =  document.querySelectorAll('.i-volume-up')
    if (inputElement && soundElements) {
      console.log(inputElement)
      clearInterval(interval)
    }
  }, 100)
  document.addEventListener('keydown', e => {
    if (e.altKey && e.key === 'q') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      inputElement.value = ''
      inputElement.focus()
    }
    else if(e.altKey && e.key === '[') {
      soundElements[0].click()
    }
    else if(e.altKey && e.key === ']') {
      soundElements[1].click()
    }
    else if(e.key === '/') {
      console.log(inputElement)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      const timeout = setTimeout(() => {
        inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length)
        inputElement.focus()
        clearTimeout(timeout)
      }, 10)
    }
  })
}

window.onload = function () {
  console.log(window.location.hostname)
  switch (window.location.hostname) {
    case 'www.google.com':
      googleTabAction()
      break
    case 'translate.google.com':
      translationAction()
      break
    case 'www.youtube.com':
      youtubeAction()
      break
    case 'www.oxfordlearnersdictionaries.com':
      oxfordDictionariesAction()
      break
    case 'dictionary.cambridge.org':
      cambridgeDictionariesAction()
      break
  }
}