
recipes = {1: "fried egg", 2: "buttered toast"}
types = {1: "Breakfast", 2: "Breakfast"}
descriptions = {1: "Egg fried in butter", 2: "Toasted bread spread with butter"}
ingredients = {
    1: ["1 pad of butter", "1 Egg", "A pinch of salt"],
    2: ["1 pad of salted butter", "1 slice of bread"],
}
instructions = {
    1: {
        "Step 2": "Crack the egg into the buttered pan",
        "Step 5": "Serve egg after about a minute and a half",
        "Step 1": "Melt butter in pan over medium-low heat",
        "Step 4": "Flip egg after about a minute and a half",
        "Step 3": "Sprinke the pinch of salt onto cooking egg",
    },
    2: {
        "Step 3": "Put the pad of butter on the toasted bread",
        "Step 4": "After a minute spread the melted butter onto the bread",
        "Step 1": "Put the bread in the toaster",
        "Step 2": "Take the toast out of the toaster",
    },
}
comments = {1: ["Yummy!!", "Egg-cellent ;->"], 2: ["Toasty", "What a great recipe!"]}


def add_ingredients(recipe_id=None, text=None):
    if recipe_id and text:
        text_list = text.split("\n")
        ingredients[recipe_id] = text_list


def add_instructions(recipe_id=None, text=None):
    if recipe_id and text:
        text_list = text.split("\n")
        instructions_dict = {}
        for i, instruction in enumerate(text_list):
            instructions_dict["Step {}".format(i + 1)] = instruction

        instructions[recipe_id] = instructions_dict


# pets = {
#     "cats": [
#         {
#             "age": 1,
#             "breed": "Tabby",
#             "description": "Snowflake is a playful kitten who loves roaming the house and exploring.",
#             "name": "Snowflake",
#             "url": "https://content.codecademy.com/programs/flask/introduction-to-flask/cat-snowflake.jpeg",
#         }
#     ],
#     "dogs": [
#         {
#             "age": 2,
#             "breed": "Dalmatian",
#             "description": "Spot is an energetic puppy who seeks fun and adventure!",
#             "name": "Spot",
#             "url": "https://content.codecademy.com/programs/flask/introduction-to-flask/dog-spot.jpeg",
#         },
#         {
#             "age": 4,
#             "breed": "Border Collie",
#             "description": "Eager and curious, Shadow enjoys company and can always be found tagging along at your heels!",
#             "name": "Shadow",
#             "url": "https://content.codecademy.com/programs/flask/introduction-to-flask/dog-shadow.jpeg",
#         },
#     ],
#     "rabbits": [
#         {
#             "age": 4,
#             "breed": "Mini Rex",
#             "description": "Easter is a sweet, gentle rabbit who likes spending most of the day sleeping.",
#             "name": "Easter",
#             "url": "https://content.codecademy.com/programs/flask/introduction-to-flask/rabbit-easter.jpeg",
#         }
#     ],
# }
