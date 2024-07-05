import './main.scss'
const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')

const toggleColors = document.getElementById('toggle-colors')
const rootStyles = document.documentElement.style

const flagsElement = document.getElementById('flags')

const tetxToChange = document.querySelectorAll('[data-section]')

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`)
  const texts = await requestJson.json()
  for (textTochange of tetxsToChange) {
    console.log(textsTochange)
  }
}

flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language)
})

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (toggleIcon.src.includes('moon.svg')) {
    toggleIcon.src = 'assets/icons.svg/sun.svg'
    toggleText.textContent = 'Light Mode'
  } else {
    toggleIcon.src = 'assets/icons.svg/moon.svg'
    toggleText.textContent = 'Dark Mode'
  }
})

toggleColors.addEventListener('click', (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
