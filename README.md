# CircuitVerse Documentation

This is the official documentation of the CircuitVerse simulator. This is meant to be a guide for users to use CircuitVerse. This is to have details of the usage of all Circuit Elements in CircuitVerse along with some tips and tricks. This guide has to assume minimum knowledge of the user.

**Note that this is not a documentation on digital logic design. If you are interested in that, please checkout the GSoC'19 link at the end**

## Cloning Instructions

- `git clone https://github.com/CircuitVerse/CircuitVerseDocs.git` this repository
- `cd CircuitVerseDocs/docs`

**Note :** If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```sh
git clone https://github.com/<username>/CircuitVerseDocs.git
cd CircuitVerseDocs
```

To view the docs in offline mode, navigate to `/docs` folder and run
`python3 -m http.server` or
`python -m SimpleHTTPServer 8000`

When you add a page, make sure you have an entry in the `_sidebar.md`

**Note that all documentation should have a corresponding live circuit embedded so as to help the users. Note that live circuit is NOT the same as image of a circuit.**

## Open with Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/CircuitVerse/CircuitVerseDocs/)

## Steps to Contributing

1. Fork this project
2. Create your feature branch `(git checkout -b feature/feature_name)`
3. Commit your changes `(git commit -am 'Add feature')`
4. Push to the branch `(git push origin feature_name)`
5. Create a new Pull Request

## Code of Conduct

Read the [Code of Conduct](./code-of-conduct.md) of [CircuitVerseDocs](https://docs.circuitverse.org) Community.

## GSoC'19 Project Details

Read the [wiki](https://github.com/CircuitVerse/CircuitVerseDocs/wiki/Interactive-Book) for more information on the interactive book.
