# Blog

This project is an attempt at recreating a "3D BD Blog"

## Features

It is a static/dynamic /server side rendered blog.

There's a database for storing posts based on realworld app :

Each post is either a strip/bd blog with cases or a full blog text post in markdown

## API (first)

The backend is managed with php/mysql because i got hosting.

Server and client Code is generate from [blg-openapi.yml](./blg-openapi.yml) file at the root

* run `make api_gen_cli` to generate client code.
* run `make api_gen_srv` to generate server code.
* run `make api_gen_doc` to generate markdown documentation.

## Angular

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/docs/en/).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html).
