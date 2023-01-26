const btn = document.querySelector('button')
const colorPal = document.querySelector('.color-palette')
const select = document.querySelector('.colors')
const colorsDivs = document.querySelectorAll('.color')
const paragraphs = document.querySelectorAll('p')
fetch(`https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome&count=2 `)
	.then(res => res.json())
	.then(data => {
		const responseData = data
		const responseSchemes = responseData._links.schemes

		Object.keys(responseSchemes).forEach(e => {
			select.innerHTML += `    <option value="${e}">${e}</option>`
		})

		// Object.keys(responseSchemes).forEach(e => {
	})

btn.addEventListener('click', e => {
	const colorPalleteVal = colorPal.value.substring(1)
	const selectVal = select.value

	fetch(`https://www.thecolorapi.com/scheme?hex=${colorPalleteVal}&mode=${selectVal}&count=5 `)
		.then(res => res.json())
		.then(data => {
			for (let i = 0; i < data.colors.length; i++) {
				const hexValue = data.colors[i].hex.value
				console.log(hexValue)
				colorsDivs[i].style.backgroundColor = hexValue
				paragraphs[i].textContent = hexValue
			}
		})

	console.log(colorPalleteVal, selectVal)
})

// fetch(`https://www.thecolorapi.com/scheme`)
