#DashBoard

![Dashboard logo](http://image.noelshack.com/fichiers/2018/42/7/1540143094-capture-d-ecran-2018-10-21-a-19-31-24.png)

Avoir un ensemble de services en un seul click.

##Sommaire

* Description
* Comment faire fonctionner notre projet
* Langage
* Fonctionnalité
	* Authentification
	* Service
	* Widget
	* Menu
* Explication de notre Architecture


***

### Description 
Dashboard est une ***application Web*** que nous devons mettre en place dans laquelle un ensemble de services doit être présent sous forme de petit ***widget*** fonctionnel.

Voici comment ce présente notre application :
![Appli] (http://image.noelshack.com/fichiers/2018/42/7/1540143586-capture-d-ecran-2018-10-21-a-19-30-11.png)
Vous pouvez vous connecter avec le lien ci-dessous :
```
http://localhost:3000/
```
***

###Comment faire fonctionner notre projet
Nous avons utilisé comme indiquer dans le sujet docker vous pouvez l'exécuter comme ceci :

```
$> docker-compose up
```

Vous pouvez également build le projet premièrement avec : 
```
$> docker build .
```
à la racine de notre projet.

Pour lancer notre serveur il suffit de le lancer avec ```$> npm start``` dans le dossier qa-react.

***
###Langage

![Logo react](https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png)

Nous avons choisi plusieurs langages pour le faire:
>***NodeJs*** pour faire notre serveur à l'aide de la librairie ***React*** pour mettre en place les interfaces utilisateur. C'est notre langage principal ici dans ce projet. 
>
>![NODEJS](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAApVBMVEX///9AQTeDzSk9PjTf391WV07y+unG6J2S00P8/PzR0c/09PNMTURDRDqP0j7O66vn9dXv+ORyc2uW1Em1trL6/fdOT0Xf8sj4/PPo6Ofi882oqKSVlpBsbWXr99xHSD+Pj4mo3GmEhX7DxMGw33ag2Vzc8cPL6qXX1taurqrR7LC9vbq14YDt7exfYFjW77i/5ZGi2l/H6Z+fn5p6e3NvcGjs7+d+7L//AAADk0lEQVR4nO2Xaa+qOhRAwSqgQFGRweGAiMBxYLhHzv3/P+0VSpECL/ElJuYle33SYncXHfauggAAAAAAAAAAAAAAAAAAAAAAwP+ddLP9rMDCzi7pRwU0pP/e1E8KiCLyj58zqARENJt+VkAEARAAgbcIzBeHzWg+ca/FcrRHulnMF/ZQQA3332O/t+Lz3Wm/Sc5uKXWeTg828svFfNDLCSYTRV4NwqnhWtcO+8EMzL+PmjjbD2vU8oyjCBceE7j+JF77MN3PqkDIPk55Be+OJxXR1eXa59OThkgPX+wJbB9VJKR/9QrEqlBMw5VkxUzoe1ue57GY6u1LRyIle3SKmySbE0bgdMLRYVpaAXWTiTQS8k+d6XSvZvPu5I2i3OJfZlH6qI2FxNbdvUaTDvjutcN8iWhEoBdpdmDr4AT4vGs+WzH5wm2qm80FI+6PWt26T3qYdBK2pc73aATmFz4SErMFHV/hXto1TNPrCByaXgixD1/1FEhKX2AiU2OdjYA4AXWNeu3ivu7wo5DxLLLn3V2eO2Q/O/g6FNCzR+m/JLChAkgr2dbhBJC+PrId8qg7yCYZVIoS6YxNU4mWwhIbAwGbHBz1lr0uoK9DdUsPDy+Qbf5K0yN9l0tHwJQTbKykXDlbIwLoVK/7RX9VAP3Wp+Xm9wX80Dub8t8SkUPd7EImIE9kT7LyZFTgWAuE/ssC1LibiqmA/S2TE7M6kbQWNueQCXgBxjiQR5fgnQIJOS+rY/ZM7EzAXTlyEeBo9RaBddp24Jdg4ybnWNh2cjETKO7kMFoF3r1DQKxmON1nw01I0jmf6Z57AN+veRKZb5mBqnCc1mPHkJyDfToq4BYmVpQgHt0DB4EuKXoKmAOBn67AM+E013K1ZN9FvhQZOHErARLTW64swS1wzAuQykGzuUqKMhMQjL7BmRbl6ZpPxUg70A40jdRNXGUnCSiIDZb9rPgPvlucQKd2zhcnnwm0tZgS5ax6ppesM7xehqz39NFWA2Q/OsUwjzD+Q/WXlQ23SR78kpHaXLKA9W2EYsr960sz29yfU+KvNQ9m++7Nwo1zz5Hqa0Fk8FcLYdu/0KWdhqYkP0txO1JdeTsll/mHv2SBkHb87l+uYjO6GqZSSMJ/g1xKcOBYg/bqFqOdBsPUC2SP3O2EObkV9G4CL+Lt3NH27SYc/1e8nY63u86/RAIAAAAAAAAAAAAAAAAAAAAA4IP8A10RUlzAnVV3AAAAAElFTkSuQmCC)
> > "Node.js est une plateforme logicielle libre et événementielle en JavaScript orienté vers les applications réseau qui doivent pouvoir monter en charge." [Wikipedia] (https://fr.wikipedia.org/wiki/Node.js)

>***JavaScript*** pour la configuration de nos pages web et la gestion de notre application. 

>![JS](https://job.linagora.com/en/wp-content/uploads/2017/02/ionicons_2-0-1_social-nodejs_216_20_3a3a3a_none-1.png)
> > "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives" [Wikipedia](https://fr.wikipedia.org/wiki/JavaScript)

> ***HTML5*** et ***CSS3*** pour la representation de nos pages web.

>![HTML5](https://www.medialibs.com/media/thumbnails/formationhtml5css3medialibs__001506000_0926_07102015.png) ![CSS3](https://www.medialibs.com/media/thumbnails/formationcss3medialibs__087618500_0919_07102015.png) 
> > "Les langages HTML et CSS sont à la base du fonctionnement de tous les sites web. " [OpenClassRoom](https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3/1604192-comment-fait-on-pour-creer-des-sites-web)

***

## Fonctionnalités
###Authentification
![Auth0](https://pbs.twimg.com/profile_images/718515839687741440/dGvlzORH_400x400.jpg)
Pour l'authentification utilisateur nous avons choisi Auth0 comme conseillé dans le sujet. Nous avons dû configurer tout d'abord notre application avec l'ensemble des autorisations d'authentification sur Auth0. 
![Auth0 dash](http://image.noelshack.com/fichiers/2018/42/7/1540145109-capture-d-ecran-2018-10-21-a-20-05-00.png)
Nous avons mis en place une application sur l'interface, gérer les comptes utilisateur et bien sûr l'interface d'authentification avec notre application web. Avec Auth0 nous disposons d'une interface pour l'inscription et la connexion à son compte : ![Interface](http://image.noelshack.com/fichiers/2018/42/7/1540145263-capture-d-ecran-2018-10-21-a-20-07-34.png)
Lors de l'inscription un email de confirmation sera envoyé à l'utilisateur. Voici un exemple de données utilisateurs : ![User](http://image.noelshack.com/fichiers/2018/42/7/1540145484-capture-d-ecran-2018-10-21-a-20-10-57.png)
Nous avons choisi l'authentification en créant un compte avec Auth0 bien que beaucoup d'authentification (google, facebook) sois disponible car les configurations demandes enormement de fonctionnalité et demande des autorisations spéciales.
***
###Service
Nous devions faire plusieurs services pour notre Dashboard. Les services demandaient notamment l'utilisation d'API spécifique selon les différents services. Nous avons utilisé pour cela:

> Un service ***Météo*** avec ***OpenWeatherMap***

> ![LOGO](data:image/png;base64,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)
> > Ce site dispose d'une API qui nous permettaient d'accéder directement à la température et l'état d'une ville. [Le site](https://openweathermap.org/)

>Ensuite nous avons un service ***Twitter***

>![logo](https://www.capaularge.org/wp-content/uploads/2016/02/logo-twitter.ico)

> > Twitter dispose d'une API et d'une documentation complète pour l'utilisation. [Ici](https://developer.twitter.com/en/docs.html)


> Nous avons un petit service Youtube. 

> ![Youtube](data:image/png;base64,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)


### Widgets
Voici une description de l'ensemble de nos widgets :
> Tout d'abord celui de la météo où nous pouvons choisir une ville française de notre choix.
>![Widget](http://image.noelshack.com/fichiers/2018/42/7/1540145833-capture-d-ecran-2018-10-21-a-20-17-04.png)
>Ensuite nous avons plusieurs widgets twitter : Un pour suivre un compte twitter choisi, un autre pour twitter avec un # choisie et enfin un dernier pour afficher un tweet important pour notament voir les retweets ou les likes.
> ![Timeline](http://image.noelshack.com/fichiers/2018/42/7/1540146587-capture-d-ecran-2018-10-21-a-20-28-22.png)
> ![hashtag](http://image.noelshack.com/fichiers/2018/42/7/1540146561-capture-d-ecran-2018-10-21-a-20-28-28.png)
> ![tweet](http://image.noelshack.com/fichiers/2018/42/7/1540146556-capture-d-ecran-2018-10-21-a-20-28-36.png)
> Nous avons aussi plusieurs widgets pratique tel qu'une ToDoList, Horloge et calendrier :
> ![Todolist](http://image.noelshack.com/fichiers/2018/42/7/1540146761-capture-d-ecran-2018-10-21-a-20-32-31.png)
> ![clock](http://image.noelshack.com/fichiers/2018/42/7/1540146557-capture-d-ecran-2018-10-21-a-20-28-58.png)
> ![calendar](http://image.noelshack.com/fichiers/2018/42/7/1540146556-capture-d-ecran-2018-10-21-a-20-28-45.png)
> Nous avons également un petit widget pour voir une vidéo youtube directement sur notre application web. 
> ![YT](http://image.noelshack.com/fichiers/2018/42/7/1540146556-capture-d-ecran-2018-10-21-a-20-28-51.png)

***

###Menu
Voici notre menu permettant de parametrer directement les widgets.
![Menu](http://image.noelshack.com/fichiers/2018/42/7/1540147310-capture-d-ecran-2018-10-21-a-20-40-46.png)

***
##Architecture

Pour notre architecture tout d'abord notre partie serveur nous l'avons fait en nodeJs et nous avons notamment utilisé la librairie react. Nous avons tout nos widgets et configuration dans des dossiers indépendants. Nous avons décomposé l'application et l'autorisation avec Auth0. La plupart des fonctionnalités sont definie dans des classes. Nous avons également utilisé certains packages pour les widgets.

Nous avons aussi utilisé un workflow git : ![workflow](https://nvie.com/img/git-model@2x.png)
Dans ce workflow nous avons deux branches distinctes la master comportant un rendu final de projet et la branche develop dans laquelle nous mettons en place notre application non fini avec des features manquantes. Nous avons également fait une branche pour chaque fonctionnalité à rajouter que nous avons ensuite merge sur la branche develop. Voici l'ensemble de nos branches et une partie de nos commit : ![git](http://image.noelshack.com/fichiers/2018/42/7/1540147744-capture-d-ecran-2018-10-21-a-20-48-50.png)