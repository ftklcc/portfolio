import { projects } from './projects.js'

/* TAB BUTTONS */
const tabButtons = document.querySelectorAll('.tab_button')
const mainContents = document.querySelectorAll('.main__content')
const projectCardList = document.querySelector('.projets__card-wrapper')


const runEvents = () => {
    showContent()
    document.addEventListener('DOMContentLoaded', showCard)
}
/* show content  */
const showContent = () => {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id
            if (!id) return;
            tabButtons.forEach(button => button.classList.remove('active'))
            mainContents.forEach(content => content.classList.remove('show'))

            const el = document.getElementById(id)
            e.target.classList.add('active')
            el.classList.add('show')
        })
    })
}
/* show on uı projects */
const showCard = () => {
    projects.map(item => {
        const li = document.createElement('li')
        li.classList.add('project__card')
        li.innerHTML = `
							<div class="project__img-wrapper">
								<img src="${item.image}" alt="project name" />
							</div>
							<div class="card__info">
								<h3>${item.name}</h3>
								<div class="card__actions">
									${item.actions.map(el => `<a href="${el.link}" target="_blank">${el.name}</a>`).join("")}
								</div>
								<div class="card__technology">
									${item.technology.map(el => `<span class="${el}">${el}</span>`).join("")}
								</div>
							</div>`
        projectCardList.appendChild(li)
    })

}
// console.log(projects);





runEvents()