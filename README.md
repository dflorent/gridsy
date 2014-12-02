Gridsy
======

Work in progress...

Usage
-----

```scss
@import "gridsy.scss";


.main {
    @include gridsy-row();
}

.content {
    @include gridsy-column(8);
}

.sidebar {
    @include gridsy-column(4);
}
```

Setting up your development environment
---------------------------------------

Run the following commands before starting:

```
npm install
```

Documentation
-------------

The documentation is available on http://dflorent.github.io/gridsy.

Generate the documentation:

```
npm install sassdoc -g
sassdoc src doc
```

Compile the stylesheets
----------------------------------

```
grunt sass
```
or
```
grunt watch
```
