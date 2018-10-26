"""Cleans text files for later parsing by ingredients_spider.

@TODO: Clean up ingredients further to maek sure there are no
    bad ingredients (e.g. unreadable strings that contain
    !@#$%^&*)
"""
import json

def clean_ingredients_file(dirty):
    """Cleans a block of text (ingredients) and return a 
        returns JSON list
    
    Keyword Arguments:
    dirty -- file name of text to clean
    """
    clean_file = 'clean_ingredients.json'
    all_ingredients = []
    with open(dirty) as infile:
        line = infile.readline()
        while line:
            split_line = line.split(',')
            for ing in split_line:
                ing = ing.strip(' \n.')
                all_ingredients.append(ing)
            line = infile.readline()
    with open(clean_file, 'w') as outfile:
        json.dump(all_ingredients, outfile)
    return clean_file