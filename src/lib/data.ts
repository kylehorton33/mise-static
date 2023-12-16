export const recipes: Recipe[] = [
	{
		name: 'Negroni',
		slug: 'negroni',
		instructions:
			'Stir all ingredients over ice, then strain into an Old-Fashioned glass over 1 large ice cube. Garnish with 1 orange half-wheel.'
	},
	{
		name: 'Boulevardier',
		slug: 'boulevardier',
		instructions:
			'Stir all ingredients over ice, then strain into a chilled coupe. Garnish with 1 brandied cherry.'
	},
	{
		name: 'Last Word',
		slug: 'last-word',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Garnish with 2 brandied cherries.'
	},
	{
		name: 'Naked and Famous',
		slug: 'naked-and-famous',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Garnish with 1 lime wedge.'
	},
	{
		name: 'Paper Plane',
		slug: 'paper-plane',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Garnish with 1 lime wedge.'
	},
	{
		name: 'Old-Fashioned',
		slug: 'old-fashioned',
		instructions:
			'Muddle the sugar cube and bitters into an Old-Fashioned glass. Add the boubon and 1 large ice cube and stir until chilled. Ganish with 1 orange twist.'
	},
	{
		name: 'Sazerac',
		slug: 'sazerac',
		instructions:
			'Rinse an Old-Fashioned glass with abinsth and dump. Stir the remaining ingredients over ice, then strain into the glass. Express the lemon twist over the drink and place on rim of glass.'
	},
	{
		name: 'Manhattan',
		slug: 'manhattan',
		instructions:
			'Stir all ingredients over ice, then strain into a chilled Nick & Nora glass. Garnish with 1 brandied cherry.'
	},
	{
		name: 'White Negroni',
		slug: 'white-negroni',
		instructions:
			'Stir all the ingredients over ice, then strain into an Old-Fashioned glass over 1 large ice cube. Express 1 orange twist over the drink, gently rub around the rim of the glass and place it into the drink.'
	},
	{
		name: 'Daiquiri',
		slug: 'daiquiri',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Ganish with 1 lime wedge.'
	},
	{
		name: 'Gin and Tonic',
		slug: 'gin-and-tonic',
		instructions:
			'Pour the gin into a Highball glass, then add 3 ice cubes. Stir for 3 seconds. Add the tonic water and stir once. Garnish with 1 lime wedge.'
	},
	{
		name: 'Aperol Spritz',
		slug: 'aperol-spritz',
		instructions:
			'Pour the Aperol into a wineglass. Fill the glass with ice cubes, then pour in the sparkling wine and seltzer and stir. Garnish with 1 orange wedge.'
	}
];

export const ingredients: Ingredient[] = [
	{ unit: 'oz', name: 'Campari' },
	{ unit: 'oz', name: 'gin' },
	{ unit: 'oz', name: 'sweet vermouth' },
	{ unit: 'oz', name: 'bourbon' },
	{ unit: 'oz', name: 'green Chartreuse' },
	{ unit: 'oz', name: 'maraschino liqueur' },
	{ unit: 'oz', name: 'lime juice' },
	{ unit: 'oz', name: 'mezcal' },
	{ unit: 'oz', name: 'yellow Chartreuse' },
	{ unit: 'oz', name: 'Aperol' },
	{ unit: 'oz', name: 'Amaro Nonino' },
	{ unit: 'oz', name: 'lemon juice' },
	{ unit: 'dash', name: 'Angostura bitters' },
	{ unit: '', name: 'sugar cube' },
	{ unit: 'oz', name: 'absinthe' },
	{ unit: 'oz', name: 'rye' },
	{ unit: 'oz', name: 'Cognac' },
	{ unit: 'tsp', name: 'demerara syrup' },
	{ unit: 'dash', name: "Peychaud's bitters" },
	{ unit: 'oz', name: 'dry vermouth' },
	{ unit: 'oz', name: 'Lillet Blanc' },
	{ unit: 'oz', name: 'Suze' },
	{ unit: 'oz', name: 'prosecco' },
	{ unit: 'oz', name: 'seltzer' },
	{ unit: 'oz', name: 'tonic water' },
	{ unit: 'oz', name: 'rum' },
	{ unit: 'oz', name: 'simple syrup' }
];

function getIng(name: string) {
	return ingredients.find((i) => i.name == name) || { name: '-', unit: '-', inStock: false };
}

export const ingredientLines: IngredientLine[] = [
	{ recipe: 'negroni', ingredient: getIng('Campari'), quantity: 1 },
	{ recipe: 'negroni', ingredient: getIng('gin'), quantity: 1 },
	{ recipe: 'negroni', ingredient: getIng('sweet vermouth'), quantity: 1 },
	{ recipe: 'boulevardier', ingredient: getIng('bourbon'), quantity: 1.5 },
	{ recipe: 'boulevardier', ingredient: getIng('Campari'), quantity: 0.75 },
	{ recipe: 'boulevardier', ingredient: getIng('sweet vermouth'), quantity: 0.75 },
	{ recipe: 'last-word', ingredient: getIng('gin'), quantity: 0.75 },
	{ recipe: 'last-word', ingredient: getIng('green Chartreuse'), quantity: 0.75 },
	{ recipe: 'last-word', ingredient: getIng('maraschino liqueur'), quantity: 0.75 },
	{ recipe: 'last-word', ingredient: getIng('lime juice'), quantity: 0.75 },
	{ recipe: 'naked-and-famous', ingredient: getIng('mezcal'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('yellow Chartreuse'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('Aperol'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('lime juice'), quantity: 1 },
	{ recipe: 'paper-plane', ingredient: getIng('bourbon'), quantity: 0.75 },
	{ recipe: 'paper-plane', ingredient: getIng('Aperol'), quantity: 0.75 },
	{ recipe: 'paper-plane', ingredient: getIng('Amaro Nonino'), quantity: 0.75 },
	{ recipe: 'paper-plane', ingredient: getIng('lemon juice'), quantity: 0.75 },
	{ recipe: 'old-fashioned', quantity: 1, ingredient: getIng('sugar cube') },
	{ recipe: 'old-fashioned', quantity: 2, ingredient: getIng('Angostura bitters') },
	{ recipe: 'old-fashioned', quantity: 2, ingredient: getIng('bourbon') },
	{ recipe: 'sazerac', quantity: 0.25, ingredient: getIng('absinthe') },
	{ recipe: 'sazerac', quantity: 1.5, ingredient: getIng('rye') },
	{ recipe: 'sazerac', quantity: 0.5, ingredient: getIng('Cognac') },
	{ recipe: 'sazerac', quantity: 1, ingredient: getIng('demerara syrup') },
	{ recipe: 'sazerac', quantity: 4, ingredient: getIng("Peychaud's bitters") },
	{ recipe: 'sazerac', quantity: 1, ingredient: getIng('Angostura bitters') },
	{ recipe: 'manhattan', quantity: 2, ingredient: getIng('rye') },
	{ recipe: 'manhattan', quantity: 1, ingredient: getIng('dry vermouth') },
	{ recipe: 'manhattan', quantity: 2, ingredient: getIng('Angostura bitters') },
	{ recipe: 'white-negroni', quantity: 1.5, ingredient: getIng('gin') },
	{ recipe: 'white-negroni', quantity: 1, ingredient: getIng('Lillet Blanc') },
	{ recipe: 'white-negroni', quantity: 0.75, ingredient: getIng('Suze') },
	{ recipe: 'daiquiri', quantity: 2, ingredient: getIng('rum') },
	{ recipe: 'daiquiri', quantity: 0.75, ingredient: getIng('lime juice') },
	{ recipe: 'daiquiri', quantity: 0.75, ingredient: getIng('simple syrup') },
	{ recipe: 'gin-and-tonic', quantity: 2, ingredient: getIng('gin') },
	{ recipe: 'gin-and-tonic', quantity: 4, ingredient: getIng('tonic water') },
	{ recipe: 'aperol-spritz', quantity: 2, ingredient: getIng('Aperol') },
	{ recipe: 'aperol-spritz', quantity: 3, ingredient: getIng('prosecco') },
	{ recipe: 'aperol-spritz', quantity: 1, ingredient: getIng('seltzer') }
];
