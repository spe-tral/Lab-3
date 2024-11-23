const adding = document.getElementById('adding')
const title = document.querySelector('h2')
const fioInput = document.getElementById('FIO')
const emailInput = document.getElementById('EMAIL')
const numberInput = document.getElementById('NUMBER')
const tgInput = document.getElementById('TG')
const table = document.getElementById('table')
const form = document.getElementById('form')
const error = document.getElementById('error')

const checkValid = item => {
	return Boolean(item.length)
}

form.addEventListener('submit', event => {
	event.preventDefault()

	error.innerText = ''

	if (!checkValid(fioInput.value)) {
		error.innerText = 'Поле ФИО не заполнено!'
		return
	}
	if (!checkValid(emailInput.value)) {
		error.innerText = 'Поле Почта не заполнено!'
		return
	}
	if (!checkValid(numberInput.value)) {
		error.innerText = 'Поле Телефон не заполнено!'
		return
	}
	if (!checkValid(tgInput.value)) {
		error.innerText = 'Поле Телеграмм не заполнено!'
		return
	}

	table.innerHTML += `<tr> <td> ${fioInput.value} </td> <td> <a href="mailto:${emailInput.value}"> ${emailInput.value} </a> </td> <td> <a href="tel:${numberInput.value}">${numberInput.value} </a></td> <td> ${tgInput.value}</td> </tr>`
})
const slider = document.querySelector('.slider')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
const slides = Array.from(slider.querySelectorAll('img'))
const slideCount = slides.length
let slideIndex = 0
prevButton.addEventListener('click', showPreviousSlide)
nextButton.addEventListener('click', showNextSlide)
function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount
	updateSlider()
}
function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount
	updateSlider()
}
function updateSlider() {
	slides.forEach((slide, index) => {
		if (index == slideIndex) {
			slide.style.display = 'block'
		} else {
			slide.style.display = 'none'
		}
	})
}
updateSlider()
