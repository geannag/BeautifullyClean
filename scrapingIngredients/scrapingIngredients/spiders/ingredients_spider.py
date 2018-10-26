"""Spider that crawls for specified ingredients and parses 
    ingredient information.

@TODO: Need to write everything to JSON objects and make them human
        readable. When writing to JSON object, need to include
        session (no., date, time)
@TODO: Produce AVERAGE and MEDIAN(?) EWG scores for a product
"""

import scrapy
import json
import os
from scrapingIngredients.clean_ingredients import clean_ingredients_file
from scrapingIngredients.items import IngredientsItem

class IngredientsSpider(scrapy.Spider):
    """Scrapy Spider for crawling EWG for ingredients information.

    Keyword Arguments:
    scrapy.Spider -- 

    @TODO: Check for illegal ingredients
    """
    name = "ingredients"

    download_delay = 2

    def start_requests(self):
        """Cleans a block of text (the ingredients to search)
            into a JSON array, and creates the inital search URL
            for each ingredient.
        """        
        dirty_file = self.category
        temp = clean_ingredients_file(dirty_file)
        clean_file = open(temp)
        data = json.load(clean_file)

        urls = [ ]
        for ingredient in data:
            search_url = 'https://www.ewg.org/skindeep/search.php?query=' \
                            + ingredient 
            urls.append(search_url)
            print(search_url)
        clean_file.close()
        
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        """Retrieve link (if any) to go to the actual ingredient page.
            If it doesn't exist, gives a list of ingredients that didn't work.
        
        Keyword Arguments:
        self -- [check scrapy]
        response -- [check scrapy]

        @TODO: Refactor bad ingredient dump into another module
        @TODO: Need to check if certain files exists already (e.g. bad_ingredients.json)
        @TODO: Need to figure a different way to check if file is empty, or at least
                    find a want to keep finding the relative path of the file
        @TODO: Simplify xpaths so they aren't stupid long strings 
        """
        bad_ingredient = ''
        is_bad = False
        dne_ingredient = '\'There are no items in the database that match your request.\''
        xpath_bad = '//p[contains(.,' + dne_ingredient + ')]'
        
        if (response.xpath(xpath_bad)):
            ingredient_searched = response.xpath('////div[@id="wide_lightorange_sidebar"]/div[@class = "sidabar_content"]/div[@class = "sidebar_info_blurb"]/text()').extract_first()
            bad_ingredient = ingredient_searched
            is_bad = True
        else:
            next_url = response.css('table a::attr(href)').extract_first()
            
            with open('urls.txt', 'a+') as f:
                new_url = 'https://www.ewg.org' + next_url + '\n'
                f.write(new_url)  
            
            next_urls = [ ]
            url_file = open('urls.txt', "r")
            for line in url_file:
                yield response.follow(line.rstrip('\n'),callback=self.parse_ingredient)
            url_file.close()
        
        if (is_bad == True):
            bad_ingredients_file = 'bad_ingredients.json'
            fpath = '/home/geanna/Documents/BeautyWebsite/scrapingIngredients/bad_ingredients.json'
            # Check if the JSON object is empty; if so add empty list
            if (os.path.isfile(fpath) and os.path.getsize(fpath) == 0):
                init_list = [ ]
                with open(bad_ingredients_file ,'w') as bad_outfile:
                    json.dump(init_list, bad_outfile)
            temp = [ ]
            with open(bad_ingredients_file, 'r') as bad_outf:            
                data = json.load(bad_outf)
                data.append(bad_ingredient)
                temp.extend(data)
            with open(bad_ingredients_file, 'w') as bad_outf:
                json.dump(temp, bad_outf)
            

    def parse_ingredient(self,response):
        """Parses ingredient information.
            We obtain the following:
                - Name
                - EWG score (PNG)
                - Ingredient image [image] 
                - Overall Hazard [image]
                - Cancer [image]
                - Developmental & Reproductive Toxicity [image]
                - Alleriges & immunotoxicity [image]
                - Use Rescrictions [image]
                - Other LOW/MODERATE/HIGH Concerns
                - About
                - Function(s)
                - Synonym(s)
                - Data Availability
        
        @FIXME: Can't get chemical images yet b/c it's from a gov site
        @TODO: Change bar information into text of sorts(low, moderate, high)
        @TODO: Output readable data to JSON
        @TODO: Eventually add to a database including products?
        """
        # All xpath paths for each item
        # chem_img_xpath = '//*[@id="Summary"]/div[1]/a/img/@src'
        ingredient_name_xpath = '//div[@id="righttoptitleandcats"]/h1/text()'
        score_img_xpath = '//div[@id="product_wrapper2012"]/div[1]/div[1]/div[2]/a/img/@src'
        data_avail_xpath = '//div[@id="product_wrapper2012"]/div[1]/div[2]/span[2]/text()'
        # overall_xpath = '//div[@id="Summary"]/div[2]/div[1]/div[3]/div/div'
        # cancer_xpath = ''
        # devrep_toxic_xpath = ''
        # allergies_xpath = ''//*[@id="Summary"]/div[2]/div[11]/text()[2]
        # use_restrictions_xpath = '' //*[@id="Summary"]/div[2]/div[11]/strong[1]
        high_concerns_xpath = '//strong[contains(.,"Other HIGH concerns:")]/following-sibling::a/text()'
        moderate_concerns_xpath = '//strong[contains(.,"Other MODERATE concerns:")]/following-sibling::a/text()'
        low_concerns_xpath = '//strong[contains(.,"Other LOW concerns:")]/following-sibling::text()'
        about_xpath = '//*[@id="ABOUTmore"]/text()'
        functions_xpath = '//strong[contains(.,"Function(s):")]/following-sibling::text()'
        synonyms_xpath = '//strong[contains(.,"Synonym(s):")]/following-sibling::text()'

        # Extracting info from response
        ingredient_name = response.xpath(ingredient_name_xpath).extract_first()
        img_url = response.xpath(score_img_xpath).extract_first()
        data_avail = response.xpath(data_avail_xpath).extract_first()
        about_info = response.xpath(about_xpath).extract()
        high_concern_info = response.xpath(high_concerns_xpath).extract()
        moderate_concern_info = response.xpath(moderate_concerns_xpath).extract()
        low_concern_info = response.xpath(low_concerns_xpath).extract()
        functions_info = response.xpath(functions_xpath).extract()
        synonyms_info = response.xpath(synonyms_xpath).extract()
        
        yield IngredientsItem(name=ingredient_name, data_available=data_avail
                              , about = about_info, high_concerns = high_concern_info
                              , moderate_concerns = moderate_concern_info, low_concerns = low_concern_info
                              , chem_functions = functions_info, synonyms = synonyms_info
                              , image_urls = [img_url])