"""Script to run my spider.

@TODO: Implement OCR so....
    Picture -> OCR -> Spider
@TODO: Figure out how to override feeds (feeds current set in
    settings)
@TODO: Figure out if I need to use multiple spiders for simulaneous
    scraping
"""
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

def clear_files():
    """Clears file contents of the following:
        - bad_ingredients.json
        - clean_ingredients.json
        - output.json
        - url.txt
    
    This is for testing so I start fresh every time.
    """
    open('bad_ingredients.json', 'w').close()
    open('clean_ingredients.json', 'w').close()
    open('output.json', 'w').close()
    open('url.txt', 'w').close()
    


def run_ingredients_spider():
    """Runs the ingredients_spider without entering the command
        line commands every time.
    """
    clear_files()
    # ingredients_file = input("File with ingredients?: ")
    ingredients_file = 'dirty_ingredients_small.txt'
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    process.crawl('ingredients', category=ingredients_file)
    process.start()


def main():
    run_ingredients_spider()

if __name__ == "__main__":
    main()