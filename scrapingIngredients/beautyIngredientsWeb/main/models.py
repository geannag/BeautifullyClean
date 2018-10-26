import json
from django.db import models

# Create your models here.

class ScrapyItem(models.Model):
    unique_id = models.CharField(max_length=100, null=True)
    data = models.TextField() #This is for the crawled data
    
    # This is for basic and custom serialization to return to client as a JSON
    @property
    def to_dict(self):
        data = {
            'data': json.laods(self.data),
        }
        return data
    def __str__(self):
        return self.unique_id