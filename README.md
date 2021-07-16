## Live project viewable [here](https://medicalinformant.herokuapp.com/)

## Introduction
COVID-19 has brought health front and center in the world consciousness. Now, more than ever, the global citizen is thinking about their health. Despite this, going to the doctor's office is as difficult as ever. Although doctors, nurses, and physicians are the world's Marvel and DC superheroes, the world faces a problem: a shortage. Med schools like Harvard, NYU, and BU have all started to deploy graduate students directly into the workforce, skipping the requisite years of fellowship. However, this shortage wasn’t caused by COVID-19, it was only made worse. According to the [Association of American Medical Colleges](https://www.aamc.org/news-insights/press-releases/new-findings-confirm-predictions-physician-shortage), by the year 2023, there will be a shortage of over 139-thousand physicians around the country. Our demand for healthcare has increased, yet the supply of doctors has decreased.

This situation has made it difficult, if not impossible to get immediate feedback on your health -- and in a field where every second counts, can mean life or death. 

To the people who want to see if they have either COVID-19 or the flu but can’t wait the long lines at the nearest hospital, or to the people who are displaying minor symptoms such as rashes and sore throats and want to remedy themselves, or to the people who just don’t feel comfortable going into a hospital, we have a solution. 

Today, we unveil an app that will change how we diagnose diseases. Today, we introduce ***OMi: Health Made Easy***. 

## What is it?
**OMi is a web-app that analyses user-inputted symptoms and informs them of possible diseases they have, suggesting forms of treatment**. Designed with simplicity in mind, all you need to do is go onto the site, indicate your symptoms, and boom -- *OMi pinpoints what disease you have and possible treatments for that disease.*

Long gone are the days of calling your doctor’s office only to be redirected to the answering machine. Long gone are the days of searching through random health forums only to end up with unpronounceable words and incomprehensible descriptions. With OMi, **pinpointing and relieving your pain is as simple as a few clicks.** 

# Screen Shots
![OMi home page](https://github.com/kevin200617/OMi/blob/main/imgs/1.png?raw=true)
<br>
![OMi symptoms page-1](https://github.com/kevin200617/OMi/blob/main/imgs/2.png?raw=true)
<br>
![OMi symptoms page-2](https://github.com/kevin200617/OMi/blob/main/imgs/3.png?raw=true)

## Setup Instructions:
* Clone the repository: ```https://github.com/kevin200617/OMi```.
* Change directory into flask: ```cd OMi/flask```.
* Download requirements: ```python3 -m pip install requirements.```.
* Run the flask app: ```python3 app.py```.
* Head to ```localhost:8080:``` to use OMi website.

## How we built it
OMi was built off of React.js and Flask. Using data provided by [Columbia’s Disease-Symptom Knowledge Database](https://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html), we created an algorithm that is able to sort out possible diseases based on inputted symptoms. With this dataset, OMi is able to recognize over **150+** different diseases, giving treatment suggestions for every single one of them (graciously supplied by our own web scrapers). 

The UI was built on Figma; the wireframe consists of the main page and the disease sorting pages. We’ve implemented all of these features in our demo. Figma is viewable [here](https://www.figma.com/file/GvtZjMf6w3tGAaJn8DjCmT/Telehealth-App?node-id=1%3A2)

The entire site is live and is being run on Heroku. 
## Challenges we ran into
On our team, we lacked an experienced front end web developer. This made the development of the front end slower and more cumbersome than a usual hackathon project. Despite this, as a team, we pitched in as much (or little) CSS, HTML, and JS we knew in order to complete the site.

Another problem that we faced was trying to get the right data. It took us quite a while to find a dataset that linked symptoms to its probable disease, but after a few hours of searching, we found a massive dataset that fit our applications perfectly. 

Lastly, none of us had experience with web scraping so it took a bit in order to create a program that could give us possible treatments given a disease, but we eventually got that sorted out and it works like a charm.

## Accomplishments that we’re proud of
Some of our most notable accomplishments are:

- Our symptom to disease algorithm, that is able to pinpoint a disease given experiencing symptoms 
- Our treatment web scrapers, scraping the web for info on how to medicate/treat your disease.
- And last but not least, the website itself (it's not every day a bunch of algo-junkies develop a visually appealing product). 

## What we learned
Our team learned a lot of things. For one, meeting new people is always a blast! We have team members split across the United States, Canada, South Africa, and Jordan. 

We also learned that if you're willing to learn, anything is honestly possible. We hit a few major bugs here and there, but like a rolling pin making pizza, we flattened them out. 

## What's next for OMi
Originally, we wanted to create a CNN model that could recognize possible skin diseases, making it evermore easier to pinpoint what disease you have. However, like most features in a hackathon project, we ran out of time so we couldn’t train it. We hoped to use the HAM10000 dermatology skin dataset (with over 2 gigs worth of images) to train the model, but we calculated that it would've taken too long to train. 

Another next step for OMi is expanding our disease database. At the moment, we have over 150 of the most common and easily spreadable diseases in our database (including the novel coronavirus!) but as we mentioned earlier, there are far more diseases in the world than stars. We hope to create a new web scraper that will be able to get us the necessary data to account for more diseases, making OMi that bit more useful. 

The last feature that we hope to implement into OMi is a comprehensive drug delivery system. As the impact of COVID-19 hits everyone, we hope to make this a very safe and quick process, in order to provide better healthcare for everyone.

All in all, big things are in store for OMi. We hope to make it a full-fledged product, enabling millions with the ability to pinpoint and treat their diseases in a snap. From there, OMi will truly be Health Made Easy. 


## Resources
- OMi’s disease database was based off of [Columbia’s Disease-Symptom Knowledge database](https://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html)
- OMi’s treatment and description information is provided by [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)

## Meet The team
* [Adam Isenberg](https://github.com/Adam4920): Full stack developer.
* [Rami Janini](https://github.com/JaniniRami): Backend Developer.
* [Kevin Yang](https://github.com/kevin200617):  Backend Developer.
* [Byeongjun Moon](https://github.com/bjmoonn): UI/UX Designer.


