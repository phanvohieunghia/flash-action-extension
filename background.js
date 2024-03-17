function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

function slashAction(currentElement, isScrop = false) {
	isScrop ?? scrollToTop()

	const timeout = setTimeout(() => {
		currentElement.focus()
		currentElement.setSelectionRange(
			currentElement.value.length,
			currentElement.value.length
		)
		clearTimeout(timeout)
	}, 100)
}

function googleTabAction() {
	const allElements = document.querySelectorAll('*')
	const spellcheckElement = document.querySelectorAll('p>a>b>i')
	const pickElements = document.querySelectorAll('h3')
	setTimeout(function () {
		allElements.forEach((element) => (element.tabIndex = -1))
		let firstIndex = 0
		if (spellcheckElement.length == 1) {
			firstIndex++
			spellcheckElement.forEach((element) => {
				element.tabIndex = 1
				element.addEventListener('keypress', (e) => {
					if (e.key === 'Enter') {
						e.target.parentElement.parentElement.click()
					}
				})
			})
		}
		pickElements.forEach((element, i) => {
			element.tabIndex = i + 1 + firstIndex
			element.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					e.target.parentElement.click()
				}
			})
		})
		document.addEventListener('keydown', (e) => {
			if (e.altKey && e.key === 'q') {
				const currentInput = document.querySelector('input')
				if (currentInput) {
					currentInput.value = ''
					currentInput.focus()
				}
			} else if (e.key === '/') {
				const currentInput = document.querySelector('textarea')
				slashAction(currentInput)
			}
		})
	}, 300)
}

function translationAction() {
	const translateElements = document.querySelectorAll('button')
	if (translateElements && translateElements[28])
		translateElements[28].style.transition = 'all 1s ease'
	document.addEventListener('keydown', (e) => {
		if (e.altKey) {
			if (translateElements[28]) translateElements[28].classList.add('nghia')
		}
		if (e.altKey && e.key === 'q') {
			const currentButton = document.querySelectorAll('button')[28]
			scrollToTop()
			if (currentButton) currentButton.click()
			const currentInput = document.querySelectorAll('textarea')[0]
			if (currentInput) {
				currentInput.value = ''
				currentInput.focus()
			}
		} else if (e.altKey && e.key === '[') {
			const currentButton = document.querySelectorAll('button')[31]
			if (currentButton) currentButton.click()
		} else if (e.key === '/') {
			const currentInput = document.querySelectorAll('textarea')[0]
			slashAction(currentInput)
		}
	})
	document.addEventListener('keyup', (e) => {
		if (e.key == 'Alt') {
			const isCheckClass = translateElements[28]
			if (isCheckClass) isCheckClass.classList.remove('nghia')
		}
	})
	document.addEventListener('keydown', (e) => {
		if (e.altKey && e.key === '1') document.getElementById('i13')?.click()
		else if (e.altKey && e.key === '2') document.getElementById('i14')?.click()
		else if (e.altKey && e.key === '3') document.getElementById('i15')?.click()
		else if (e.altKey && e.key === '4') document.getElementById('i16')?.click()
		else if (e.altKey && e.key === '5') document.getElementById('i17')?.click()
		else if (e.altKey && e.key === '6') document.getElementById('i18')?.click()
	})
}

function youtubeAction() {
	function showSpeedUI(text) {
		const timeout1 = setTimeout(() => {
			const preElement = document.querySelector('.nghia-speed')
			if (preElement) preElement.remove()
			clearTimeout(timeout1)
		}, 900)
		const speedUI = document.querySelector('body')
		speedUI.style.height = '100vh'
		speedUI.style.position = 'relative'

		const child = document.createElement('div')
		child.className = 'nghia-speed'
		child.innerText = text
		speedUI.appendChild(child)
		const timeout = setTimeout(() => {
			child.classList.add('none')
			clearTimeout(timeout)
		}, 900)
	}
	function focusVideo() {
		const video = document.querySelector('video')
		video.focus()
	}
	document.addEventListener('keydown', (e) => {
		if (e.altKey && e.key === 'q') {
			const inputElement = document.querySelector('input')
			if (inputElement) {
				inputElement.value = ''
				inputElement.focus()
			}
		} else if (e.altKey && e.key === 'w') {
			const skipElement = document.querySelector('.ytp-ad-skip-button')
			if (skipElement) {
				skipElement.click()
			}
		} else if (e.altKey && e.key === 'ArrowUp') {
			const videoElement = document.getElementsByClassName(
				'video-stream html5-main-video'
			)[0]
			videoElement.playbackRate = videoElement.playbackRate + 0.1
			showSpeedUI(`${videoElement.playbackRate.toFixed(1)}x`)
		} else if (e.altKey && e.key === 'ArrowDown') {
			const videoElement = document.getElementsByClassName(
				'video-stream html5-main-video'
			)[0]
			videoElement.playbackRate = videoElement.playbackRate - 0.1
			showSpeedUI(`${videoElement.playbackRate.toFixed(1)}x`)
		} else if (e.altKey && e.key === 'Shift') {
			const videoElement = document.getElementsByClassName(
				'video-stream html5-main-video'
			)[0]
			videoElement.playbackRate = 1
			showSpeedUI(`${videoElement.playbackRate.toFixed(1)}x`)
		} else if (e.altKey && e.key === 'Enter') {
			focusVideo()
			showSpeedUI('Focus')
		}
	})
}

function oxfordDictionariesAction() {
	let inputElement = null
	let soundElements = null
	const interval = setInterval(() => {
		inputElement = document.querySelector('#q')
		soundElements = document.querySelectorAll('.audio_play_button')
		if (inputElement && soundElements) {
			console.log(inputElement, soundElements)
			clearInterval(interval)
		}
	}, 100)
	document.addEventListener('keydown', (e) => {
		if (e.altKey && e.key === 'q') {
			scrollToTop()
			inputElement.value = ''
			inputElement.focus()
		} else if (e.altKey && e.key === '[') {
			// pronoun U.K
			soundElements[0].click()
		} else if (e.altKey && e.key === ']') {
			// pronoun U.S
			soundElements[1].click()
		} else if (e.altKey && e.key === '\\') {
			// switch between verb and noun
			const pathname = window.location.pathname.split(/\//)
			let word = pathname[pathname.length - 1]
			pathname[pathname.length - 1] = word.includes('1')
				? word.replace('1', '2')
				: word.replace('2', '1')
			window.location.href = pathname[pathname.length - 1]
		} else if (e.key === '/') {
			slashAction(inputElement)
		}
	})
}

function cambridgeDictionariesAction() {
	let inputElement = null
	let soundElements = null
	const interval = setInterval(() => {
		inputElement = document.querySelector('#searchword')
		soundElements = document.querySelectorAll('.i-volume-up')
		if (inputElement && soundElements) {
			clearInterval(interval)
		}
	}, 100)
	document.addEventListener('keydown', (e) => {
		if (e.altKey && e.key === 'q') {
			scrollToTop()
			inputElement.value = ''
			inputElement.focus()
		} else if (e.altKey && e.key === '[') {
			soundElements[0].click()
		} else if (e.altKey && e.key === ']') {
			soundElements[1].click()
		} else if (e.key === '/') {
			slashAction(inputElement)
		}
	})
}

function chatGPTAction() {
	let searchContainer = ''
	const test = document.querySelectorAll('textarea')
	test[0].addEventListener('input', (e) => {
		searchContainer = e.target.value
	})

	document.addEventListener('keydown', (e) => {
		if (e.altKey && e.key === 'q') {
			const currentInput = document.querySelectorAll('textarea')[0]
			if (currentInput) {
				currentInput.value = ''
				currentInput.focus()
			}
		} else if (e.key === '/') {
			const currentInput = document.querySelectorAll('textarea')[0]
			slashAction(currentInput)
		} else if (e.key === 'Enter') {
			const elements = document.querySelectorAll('div')
			for (const element of elements) {
				if (
					element.innerText === searchContainer &&
					element.firstChild.nodeType === 3
				) {
					element.classList.add('nghia-chatgpt')
					element.addEventListener('click', () => {
						navigator.clipboard.writeText(element.innerText)
					})
				}
			}
		} else if (e.ctrlKey && e.key === '|') {
			const currentInput = document.querySelectorAll('textarea')[0]
			const currentValue = currentInput.value
			currentInput.value = `Dịch sang tiếng anh: "${currentValue}"`
		} else if (e.key === 'Escape') {
			const newTab = document.querySelectorAll('a')[1]
			newTab?.click()
		}
	})
}

function youglishAction() {
	document.addEventListener('keydown', (e) => {
		if (e.key === '/') {
			const currentInput = document.querySelector('input')
			slashAction(currentInput)
		}
	})
}

window.onload = function () {
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
		case 'chat.openai.com':
			chatGPTAction()
			break
		case 'youglish.com':
			youglishAction()
			break
		default:
			console.log('FLash Action: Exceptional case')
	}
}
