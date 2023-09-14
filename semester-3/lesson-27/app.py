import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))
app =Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(basedir, "myDB.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), index=True)
    description = db.Column(db.Text)
    ingredients = db.Column(db.Text)
    instructions = db.Column(db.Text)
    comments = db.relationship(
        "comment",
        backref="recipe",
        lazy="dynamic",
        cascade="all, delete, delete-orphan",
    )

    def __repr__(self):
        "{}: ".format(self.recipe_type, self.title)
        return "%s - type: %s" % (self.title, self.recipe_type)


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipe.id"))
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return "Recipe {}, Comment {}".format(self.recipe_id, self.id)


with app.app_context():
    db.create_all()


# class Book(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(80), index=True, unique=True)
#     author = db.Column(db.String(50), index=False, unique=True)
#     month = db.Column(db.String(20), index=False, unique=True)
#     year = db.Column(db.Integer, index=True, unique=False)
#     reviews = db.relationship(
#         "Review",
#         backref='book',
#         lazy="dynamic",
#         cascade="all, delete, delete-orphan"
#     )

#     def __repr__(self):
#         return "{} in: {},{}".format(self.id, self.month, self.year)
    
# class Reader(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), index=True, unique=False)
#     surname = db.Column(db.String(50), index=True, unique=False)
#     email = db.Column(db.String(50), index=True, unique=True)

#     def __repr__(self):
#         return "Reader ID: {}, email: {}".format(self.id, self.email)

# class Review(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     stars = db.Column(db.Integer, unique=False)
#     text = db.Column(db.String(200), unique=False)
#     book_id = db.Column(db.Integer, db.ForeignKey('book.id'))

# with app.app_context():
#     db.create_all()

# class Annotation(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     text = db.Column(db.String(200), unique=False)

#     def __repr__(self):
#         return "Annotation {}-{}: {} >".format(self.reviewer_id, self.book_id, self.text)

# import routes