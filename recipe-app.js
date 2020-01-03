let recipes = getSavedRecipes()

const filters = {
   searchText: '' 
}

renderRecipes(recipes, filters)

document.querySelector('#add-recipe').addEventListener('click',(e) => {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
        ingredients: '',      
        process: ''
    })
    saveRecipes(recipes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderRecipes(recipes, filters)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'recipes') {
        recipes = JSON.parse(e.newValue)
        renderRecipes(recipes, filters)
    }
})