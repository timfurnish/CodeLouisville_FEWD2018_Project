# JIBNA REBUILD

This is a prototype rebuild of a website for http://jibna.com utilizing the Bootstrap framework. As built on bootstrap, the site is mobile first and fully responsive to a variety of screen dimensions. Currently just two pages are built out: home (index.html) and Newsletter (newsletter.html). The home page constains a modal form for login. The newsletter page is a table of contents populated using a custom script (toc.js) which pulls data from a json file (.articles.json) and formats it into html. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install contents of repository into the root of a web server.



### Installing

As the toc.js utilizes a jquery: $.getJSON('./data/articles.json', function (data) { ...
this needs to be running on a web server to function correctly.


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system


### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Bootstrap 4.0.0](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.



## Authors

* **Tim Furnish** - *Initial work* - 



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to the instructions and help of the staff and mentors of CodeLouisville


