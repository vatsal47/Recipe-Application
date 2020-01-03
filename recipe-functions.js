// Read existing recipes from localStorage

const getSavedRecipes = function () {
    const recipesJSON = localStorage.getItem('recipes')

    if (recipesJSON !== null) {
        return JSON.parse(recipesJSON)
    } else {
        return []
    }
}

const saveRecipes = function (notes) {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const generateRecipeDOM = function (recipe) {
    const recipeEl = document.createElement('p')

    if (recipe.title.length > 0) {
        recipeEl.textContent = recipe.title
    } else {
        recipeEl.textContent = 'Unnamed Recipe'
    }

    return recipeEl
}

const renderRecipes = (recipes, filters) => {
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#recipes').innerHTML = ''

    filteredRecipes.forEach(recipe => {
        const recipeEl = generateRecipeDOM(recipe)
        document.querySelector('#recipes').appendChild(recipeEl)
    });
}