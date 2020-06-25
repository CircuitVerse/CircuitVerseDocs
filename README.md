# CircuitVerse Documentation

This is the official documentation of the CircuitVerse simulator. This is meant to be a guide for users to use CircuitVerse. This contains the details of the usage of all Circuit Elements in CircuitVerse along with some tips and tricks. This guide assumes that the user has the minimum required knowledge.

**Note :** **This is not a documentation on digital logic design. If you are interested in that, please checkout the GSoC'20 link at the end**

## Cloning Instructions

> **Note :** If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```sh
git clone https://github.com/<your-username>/CircuitVerseDocs.git
cd CircuitVerseDocs
```

## Local Deployment for testing

To view the docs in offline mode, navigate to `/docs` folder and run
`python3 -m http.server` (for python3.x) or
`python -m SimpleHTTPServer 8000` (for python2.x) or
`python -m http.server`


When you add a page, make sure you have an entry in the `_sidebar.md`

**Note :** **All the documentation should have a corresponding live circuit embedded so as to help the users. Also, the live circuit is NOT the same as image of a circuit.**

## Installation on Netlify
1. Go to [https://app.netlify.com](https://app.netlify.com) and register an account
2. Click `New site from Git` or go to [https://app.netlify.com/start](https://app.netlify.com/start)
3. Click `GitHub` and authorise Netlify to view all your repositories or just the repository that you would like to publish
   * You will need to be the owner of the repository as Netlify needs to add a webhook and deploy key. You can get around this by forking the repository and publishing that instead
4.  Click `Deploy site` (you do not need to change any settings other than maybe `branch`)

## Steps for Contributing

1. Fork this project
2. Clone **your** version of repository locally.
3. Create your feature branch `(git checkout -b feature/feature_name)`
4. Commit your changes `(git commit -am 'Add feature')`
5. Push to the branch `(git push origin feature_name)`
6. Create a new Pull Request

## Prerequisites for using the CircuitVerse Simulator

Getting started with using the [CircuitVerse Simulator](https://circuitverse.org/simulator) requires some basic knowledge of the following aspects/concepts:

1. Basic concepts of number system (Decimal, Binary).
   * Get to know about [Binary](https://www.electronics-tutorials.ws/binary/bin_1.html), Decimal, Octal and [many more systems](https://www.tutorialspoint.com/digital_circuits/digital_circuits_number_systems.htm).
2. Knowledge of electronic circuits/elements (Logic Gates, basic Input and Output elements etc).
   * Learn the basics about [Logic gates](https://www.electronics-tutorials.ws/logic/logic_1.html).
   * Some [Input Elements](https://docs.circuitverse.org/#/inputElements) and [Output Elements](https://docs.circuitverse.org/#/outputs) guide to get you started.
3. Basic concepts of [circuit theory](https://iaeimagazine.org/magazine/features/electrical-fundamentals-basic-electric-circuit-theory/). 

## Code of Conduct

Read the [Code of Conduct](./code-of-conduct.md) of our [CircuitVerse](https://circuitverse.org/) community regarding contributing in the [Documentation](https://docs.circuitverse.org).

## GSoC'20 Project Details

### Interactive Book

The primary goal is to develop an opensource book which teaches digital logic design. This means that professors and students all over the world should read and contribute to the same. The book should make little assumptions about the knowledge of the reader.

Read the [wiki](https://github.com/CircuitVerse/CircuitVerseDocs/wiki/Interactive-Book) for more information on the interactive book.
