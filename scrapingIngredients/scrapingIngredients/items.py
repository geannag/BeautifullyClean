# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class IngredientsItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    data_available = scrapy.Field()
    about = scrapy.Field()
    high_concerns = scrapy.Field()
    moderate_concerns = scrapy.Field()
    low_concerns = scrapy.Field()    
    chem_functions = scrapy.Field()
    synonyms = scrapy.Field()
    image_urls = scrapy.Field()
    images = scrapy.Field()