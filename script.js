'use strict'

const btnMobileNav = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')
const icons = document.querySelectorAll('.icon-mobile-nav')
const year = document.querySelector('.year')

year.textContent = new Date().getFullYear()

const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(link => {
   link.addEventListener('click', e => {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (href === '#')
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         })
      else if (href !== '#' && href.startsWith('#')) {
         const section = document.querySelector(href)
         console.log(section)
         section.scrollIntoView({ behavior: 'smooth' })
      }

      if (link.classList.contains('main-nav-link'))
         header.classList.toggle('nav-open')
   })
})

btnMobileNav.addEventListener('click', () => {
   header.classList.toggle('nav-open')
   icons.forEach(icon => {
      toggleVisibility(icon)
   })
})

function toggleVisibility(element) {
   if (element.classList.contains('hidden')) {
      element.classList.remove('hidden')
      element.classList.add('show')
   } else {
      element.classList.remove('show')
      element.classList.add('hidden')
   }
}

const sectionHero = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
   entries => {
      const ent = entries[0]
      if (ent.isIntersecting === false) {
         document.body.classList.add('sticky')
      }
      if (ent.isIntersecting === true) {
         document.body.classList.remove('sticky')
      }
   },
   {
      root: null,
      rootMargin: '-80px',
      threshold: 0,
   }
)
obs.observe(sectionHero)

function checkFlexGap() {
   var flex = document.createElement('div')
   flex.style.display = 'flex'
   flex.style.flexDirection = 'column'
   flex.style.rowGap = '1px'

   flex.appendChild(document.createElement('div'))
   flex.appendChild(document.createElement('div'))

   document.body.appendChild(flex)
   var isSupported = flex.scrollHeight === 1
   flex.parentNode.removeChild(flex)
   console.log(isSupported)

   if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()
