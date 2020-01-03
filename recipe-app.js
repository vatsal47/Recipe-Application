let recipes = getSavedRecipes()

const filters = {
   searchText: '' 
}

renderRecipes(recipes, filters)

document.querySelector('#add-recipe').addEventListener('click',(e) => {
    recipes.push({
        title: '',
        ingredients: '',      
        process: ''
    })
    getSavedRecipes(recipes)
    renderRecipes(recipes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderRecipes(recipes, filters)
})