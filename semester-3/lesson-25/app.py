from flask import Flask, render_template, url_for, request, redirect
from data import recipes, ingredients, descriptions, instructions, types, add_ingredients, add_instructions
from forms import RecipeForm

app = Flask(__name__) # main
app.config["SECRET_KEY"] = 'secret' # Хранит все настройки приложения Flask; защита данных 

@app.route('/', methods=["GET", "POST"])
# @app.route('/recipes')
def index():
    recipe_form = RecipeForm()
    # if request.method == "POST":
    if recipe_form.validate_on_submit():
        new_id = len(recipes) + 1
        recipes[new_id]= recipe_form.recipe.data
        types[new_id] =  recipe_form.recipe_type.data
        descriptions[new_id] = recipe_form.description.data
        new_ingredients = recipe_form.ingredients.data
        new_instructions = recipe_form.instructions.data
        add_ingredients(new_id, new_ingredients)
        add_instructions(new_id, new_instructions)
        return redirect(url_for('recipe', id=new_id))
    return render_template('index.html', recipes=recipes, form=recipe_form)

@app.route('/recipe/<int:id>', methods=["GET", "POST"])
def recipe(id):
    name = recipes.get(id)
    description = descriptions.get(id)
    ingredient = ingredients.get(id)
    instruction = instructions.get(id)
    
    return render_template('recipe.html', title='Recipe', description=description, name=name, ingredients_list=ingredient, instructions=instruction)




# @app.route('/animals/<animal_type>')
# def pets_List(animal_type):
#    if animal_type in pets.keys():
#        name = pets[animal_type][0]['name']
#        return f"""
#     <h1>{animal_type}:</h1>
#     <ul>
#     <li><a href="./{animal_type}/{name}">{name}</a></li>
#     </ul>
# """
#    return f"""
#     <p>We don't have such animal, but we have:</p>
#     <ul>
#         <li><a href="/animals/rabbits">Rabits</a></li>
#         <li><a href="/animals/cats">Cats</a></li>
#         <li><a href="/animals/dogs">Dogs</a></li>
#     </ul>
# """

# @app.route('/animals/<animal_type>/<animal_name>')
# def pet_detail(animal_type, animal_name):
#     if animal_type in pets.keys():
#         return f"""
#     <h1>{animal_name}</h1>
#     <ul>
#         <li>Breed: {pets[animal_type][0]["breed"]}</li>
#         <li>Type: {animal_type}</li>
#         <li>Description: {pets[animal_type][0]["description"]}</li>
#         <li>Age: {pets[animal_type][0]["age"]}</li>
#     </ul>
# """
    


