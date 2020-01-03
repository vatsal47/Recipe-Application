// Read existing recipes from localStorage

const getSavedRecipes = function () {
    const recipesJSON = localStorage.getItem('recipes')

    if (recipesJSON !== null) {
        return JSON.parse(recipesJSON)
    } else {
        return []
    }
}

const saveRecipes = function () {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const removeRecipe = function (id) {
    const recipeIndex = recipes.findIndex(function (recipe) {
        return recipe.id === id    
    })

    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
    }
}

const generateRecipeDOM = function (recipe) {
    const recipeEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'Remove'
    recipeEl.appendChild(button)
    button.addEventListener('click',function(e) {
        removeRecipe(recipe.id)
        saveRecipes(recipes)
        renderRecipes(recipes, filters)
    })

    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unnamed Recipe'
    }

    textEl.setAttribute('href', `/edit.html#${recipe.id}`)

    recipeEl.appendChild(textEl)

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
