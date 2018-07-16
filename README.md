# JIBNA REBUILD

This is a prototype rebuild of a website for http://jibna.com utilizing the Bootstrap framework. As built on bootstrap, the site is mobile first and fully responsive to a variety of screen dimensions. Currently just two pages are built out: home (index.html) and Newsletter (newsletter.html). The home page constains a modal form for login. The newsletter page is a table of contents populated using a custom script (toc.js) which pulls data from a json file (.articles.json) and formats it into html. 

### Installing

As the toc.js utilizes a jquery: $.getJSON('./data/articles.json', function (data) { ...
the contents of the repository need to be running at the root on a web server to function correctly.

git

## Built With

* [Bootstrap 4.0.0](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - The web framework used

## Authors

* **Tim Furnish** - *Initial work* - 



## License

This project is not licensed under any license.

## Acknowledgments

* Thanks to the help of the staff and mentors of CodeLouisville


