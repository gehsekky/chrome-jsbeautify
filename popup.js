// default jsbeautify options
const jsBeautifyOptions = {
  indent_size: 2
}

// wait till document loads before binding things
document.addEventListener('DOMContentLoaded', () => {
  // grab references to newly loaded controls
  const mainButton = document.getElementById('main-button')
  const mainText = document.getElementById('main-text')

  // bind the button click to beautify text
  mainButton.addEventListener('click', () => {
    const text = document.getElementById('main-text')
    text.value = js_beautify(text.value, jsBeautifyOptions)
  })

  // bind the paste event to beautify text
  mainText.addEventListener('paste', e => {
    // prevent default action, otherwise we get double data
    e.preventDefault()
    const text = document.getElementById('main-text')
    const data = (e.originalEvent || e).clipboardData.getData('text/plain')
    text.value = js_beautify(data, jsBeautifyOptions)
  })
})
