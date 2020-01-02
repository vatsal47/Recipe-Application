const recipes = [{
    title: 'Aloo Paratha'
},{
    title: 'Pizza'
},{
    title: 'Sandwich'
},{
    title: 'Burger'
},{
    title: 'Vadapav'
}]

const filters = {
   searchText: '' 
}

const renderRecipes = (recipes, filters) => {
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#recipes').innerHTML = ''

    filteredRecipes.forEach(recipe => {
        const recipeEl = document.createElement('p')
        recipeEl.textContent = recipe.title
        document.querySelector('#recipes').appendChild(recipeEl)
    });
}

renderRecipes(recipes, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderRecipes(recipes, filters)
})