Recipe.destroy_all()
User.destroy_all()

r1 = Recipe.create({
  name: "Spicy Chorizo Nachos",
  ingredients: "Red_Onion,1 Clove_of_Garlic,1 Tomatoes,2 Green_Pepper,1 Red_Pepper,1 Red_Chilli,1 Fresh_Parsley,1Bunch Ground_Cumin,1tsp Ground_Paprika,1tsp Salt,1tsp Chorizo,225g Iberico_Ham,50g Lightly_Salted_Corn_Chips,200g Manchego_Cheese,250g Aioli,4tbsp Fresh_Coriander,1handful Fresh_Chilli,1",
  method: "Step 1
MAKE THE SALSA
Peel and chunk up the onion and garlic, quarter the tomatoes, then deseed and roughly chop the peppers and chilli. Blitz all of them in a food processor with the parsley, spices and salt to a coarse paste.

Step 2
CHORIZO TIME
Heat a saucepan or large frying pan over a pretty high heat then add a drizzle of olive oil and the sliced chorizo. Fry for 2-3 minutes to release the oils from the chorizo, then dump the blitzed paste into the pan. Simmer for 5 minutes so that much of the water content evaporates.

Step 3
STACK IT UP
Pile the corn chips onto a heatproof bowl, layering some of your spicy chorizo salsa in between. Grate over stacks of the cheese, then place under a grill to melt the cheese and brown parts of it. Drape slices of the ham over he top, dot with aioli and garnish with more fresh chilli and the fresh coriander. Eat immediately with ice cold beer!",
  image: "example.png",
  style: "Mexican Spanish",
  course: "Sharing Starter Main"
  })

r2 = Recipe.create({
  name: "Boiled Potato",
  ingredients: "Potato,1 water,enough",
  method: "Boil potato, Eat potato"
  })

user1 = User.create({
  email: "lewis@email.com",
  password: "password",
  password_confirmation: "password"
  })

user2 = User.create({
  email: "steph@email.com",
  password: "password",
  password_confirmation: "password"
  })

FavouriteRecipe.create({
  recipe: r2,
  user: user1
  })

FavouriteRecipe.create({
  recipe: r2,
  user: user2
  })


FavouriteRecipe.create({
  recipe: r1,
  user: user2
  })