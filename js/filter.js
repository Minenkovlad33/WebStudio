const list = document.querySelector('.filter'),
  items = document.querySelectorAll('.card-set__item '),
  listItems = document.querySelectorAll('.filter__btn')

function filter() {
  list.addEventListener('click', event => {
    const targetId = event.target.dataset.id
    const target = event.target

    if(target.classList.contains('filter__btn')){
          listItems.forEach(listItem =>listItem.classList.remove('filter__btn--current'))
          target.classList.add('filter__btn--current')
    }
  


    switch (targetId) {
      case 'all':
        getItems('card-set__item')
        break
      case 'web':
        getItems(targetId)
        break
      case 'app':
        getItems(targetId)
        break
      case 'design':
        getItems(targetId)
        break
      case 'marketing':
        getItems(targetId)
        break
    }
  })
}

filter()

function getItems (className){
    items.forEach(item =>{
        if(item.classList.contains(className)){
            item.style.display = 'block'

        } else {
            item.style.display = 'none'
        }
    })
}