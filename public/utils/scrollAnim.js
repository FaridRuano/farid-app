const titleObv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const skillObv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('open')
        }else{
            entry.target.classList.remove('open')
        }
    })
})

const titleElements = document.querySelectorAll('.title')

const skillsElements = document.querySelectorAll('.title-skills')


titleElements.forEach((el) => titleObv.observe(el))

skillsElements.forEach((el) => skillObv.observe(el))
