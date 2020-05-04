from django.db import migrations

def forwards(apps, schema_editor):
    if schema_editor.connection.alias != 'default':
        return
    # Your migration code goes here
    movies = [
        {
            "title": "Abe",
            "showtimes": {
                "Monday": "[12:30]",
                "Tuesday": "[10:00]",
                "Wednsday": "[7:00]",
                "Friday": "[17:00, 19:00, 21:00]",
                "Saturday": "[18:00, 20:00]"
            },
            "description": "A 12-year-old boy from Brooklyn cooks to unite his half Israeli and half Palestinian family.",
            "genre": "Drama"
        },
        {
            "title": "Sometimes Always Never",
            "showtimes": {
                "Tuesday": "[14:30, 10:00]",
                "Friday": "[10:00, 18:00]",
                "Saturday": "[19:00, 21:00]",
                "Sunday": "[20:00, 21:00]"
            },
            "description": "A man searches tirelessly for his missing son who he has not seen in years. When a body is located, the entire family's life is turned upside-down and they must all learn how to reconnect with one another.",
            "genre": "Drama"
        },
        {
            "title": "Banana Split",
            "showtimes": {
                "Monday": "[12:30, 12:30]",
                "Tuesday": "[12:30]",
                "Wednsday": "[12:30, 12:30]",
                "Thursday": "[12:30, 12:30, 12:30]"
            },
            "description": "After a messy break-up with her high school boyfriend, April strikes up an unexpected friendship with his new girlfriend, Clara.",
            "genre": "Action"
        },
        {"title" : "Vivarium",
         "showtimes" : {
                "Wednsday": "[17:30, 19:30]",
                "Thursday": "[16:45, 18:00, 20:00]",
                "Friday": "[15:30, 21:00, 22:00, 22:30]",
                "Saturday": "[12:30, 16:00, 20:00]"
            },
         "description" : "Hoping to find the perfect place to live, a couple travel to a suburban neighbourhood in which all the houses look identical. But when they try to leave the labyrinth-like development, each road mysteriously takes them back to where they started.",
         "genre" : "Thriller"},
        {"title" : "Charm City Kings",
         "showtimes" : {
                "Monday": "[16:00, 22:00]",
                "Wendsday": "[19:30, 20:30, 21:00]",
                "Thursday": "[18:00, 19:00, 20:00]",
                "Saturday": "[10:30, 12:45, 16:00]"
            },
         "description" : "A young boy joins a dirt bike gang in Baltimore.",
         "genre" : "Action"},
        {"title" : "Nina Wu",
         "showtimes" : {
                "Monday": "[20:00, 21:30]",
                "Friday": "[19:00, 20:30, 21:00]",
                "Saturday": "[21:00, 21:30, 22:00]"
            } ,
         "description" : "Nina Wu leaves her hometown and moves to Taipei in pursuit of her dream to be an actress.",
         "genre" : "Thriller"},
        {"title" : "Cover Me" ,
         "showtimes" : {
                "Tuesday": "[16:00, 18:00, 20:30]",
                "Thursday": "[17:30, 18:30, 20:00]",
                "Friday": "[17:30, 20:30, 21:00]"
            },
         "description" : " Mia Stone is faced with an eerie supernatural opportunity when a strange encounter with an eccentric man gives her a second chance at saving her company, marriage, family, and future." ,
         "genre" : "Mystery"},
        {"title" : "Slay the Dragon" ,
         "showtimes" : {
                "Monday": "[12:50, 15:30, 16:00]",
                "Tuesday": "[10:30, 11:00, 15:00]",
                "Wedsday": "[11:30, 13:30, 14:30]",
                "Thursday": "[11:30, 12:45, 15:00]",
                "Friday": "[13:00, 15:30, 18:00]"
            },
         "description" : "Activists work to rid gerrymandering from America's election process.",
         "genre" : "Documentary"},
        {"title" : "Radium Girls",
         "showtimes" : {
                "Wednsday": "[10:00, 14:30, 17:45]",
                "Thursday": "[13:30, 15:45, 18:00, 19:20, 20:30]",
                "Saturday": "[11:30, 14:30, 16:45, 17:45]"
            },
         "description" : "Radium Girls traces the efforts of Grace Fryer, a dial painter, as she fights for her day in court. ... As the case goes on, however, Grace finds herself battling not just with the U.S. Radium Corporation, but with her own family and friends, who fear that her campaign for justice will backfire" ,
         "genre" : "Drama"},
        {"title" : "Other Music",
         "showtimes" : {
                "Tuesday": "[15:00, 20:30, 21:00]",
                "Wednsday": "[16:30, 17:45, 18:00, 19:20, 20:30]",
                "Saturday": "[16:30, 18:00, 19:00, 20:00]"
            },
         "description" : "The history of record store Other Music and its influence on music culture in New York City.",
         "genre" : "Documentary"}
    ]
    MovieModel = apps.get_model('mysite', 'Movie')
    for item in movies:
        newInstance = MovieModel.objects.create(
            title=item['title'],
            showtimes= item['showtimes'],
            description=item['description'],
            genre=item['genre']
        )
        newInstance.save()


class Migration(migrations.Migration):

    dependencies = [
        # Dependencies to other migrations
        ('mysite', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(forwards),
    ]