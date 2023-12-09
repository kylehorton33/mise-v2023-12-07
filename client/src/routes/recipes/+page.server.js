export const load = () => {
  const allRecipes = [
    {
      name: 'negroni',
      color: '#820202',
      ingredients: [
        { name: 'gin', inStock: true, unit: 'oz' },
        { name: 'Campari', inStock: true, unit: 'oz' },
        { name: 'sweet vermouth', inStock: true, unit: 'oz' }
      ]
    },
    {
      name: 'daiquiri',
      color: '#5fad47',
      ingredients: [
        { name: 'rum', inStock: false, unit: 'oz' },
        { name: 'lime juice', inStock: false, unit: 'oz' },
        { name: 'simple syrup', inStock: true, unit: 'oz' }
      ]
    },
    {
      name: 'Last Word',
      color: '#7fb820',
      ingredients: [
        { name: 'gin', inStock: true, unit: 'oz' },
        { name: 'green Chartreuse', inStock: true, unit: 'oz' },
        { name: 'maraschino liqueur', inStock: false, unit: 'oz' },
        { name: 'lime juice', inStock: false, unit: 'oz' }
      ]
    }
  ]

  allRecipes.forEach((r) => {
    r.missing = r.ingredients.reduce((n, i) => n + +!i.inStock, 0)
  })

  allRecipes.sort((a, b) => a.missing - b.missing)

  return {
    recipes: allRecipes
  }
}
