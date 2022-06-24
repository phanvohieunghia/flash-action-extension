function googleTabAction() {
  const allElements = document.querySelectorAll('*')
  const spellcheckElement = document.querySelectorAll('p>a>b>i')
  const pickElements = document.querySelectorAll('h3')
  setTimeout(function () {
    if (window.location.hostname === 'www.google.com') {

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
    }
  }, 300)
}
function translateRemoveAction() {
  if (window.location.hostname === 'translate.google.com') {

    const translateElements = document.querySelectorAll('button')
    if (translateElements && translateElements[24])
      translateElements[24].style.transition = 'all 1s ease'
    document.addEventListener('keydown', e => {
      if (e.key === 'Control') {
        if (translateElements[24])
          translateElements[24].classList.add('nghia')
      }
      if (e.ctrlKey && e.key === 'q') {
        const currentButton = document.querySelectorAll('button')[24]
        if (currentButton)
          currentButton.click()
        const currentInput = document.querySelectorAll('input')[0]
        if (currentInput) {
          currentInput.value = ''
          currentInput.focus()
        }
      } else if (e.ctrlKey && e.key === 'Q') {
        const currentButton = document.querySelectorAll('button')[28]
        if (currentButton)
          currentButton.click()
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
}
function youtubeAction() {
  if (window.location.hostname === 'www.youtube.com') {
    console.log('youtube here')
    document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 'q') {
        const inputElement = document.querySelector('input')
        if (inputElement) {
          inputElement.value = ''
          inputElement.focus()
        }
      }
    })

  }
}
window.onload = function () {
  googleTabAction()
  translateRemoveAction()
  youtubeAction()
}