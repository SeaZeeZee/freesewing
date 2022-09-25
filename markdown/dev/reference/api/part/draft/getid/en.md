---
title: getId()
---

Calling `getId()` in a part's draft method will return an integer the can be used as an
for ID Points/Paths/Snippets. This method will ensure the ID is unique by
keeping an internal incremental counter of the IDs that have been used.
It is typically used when programatically adding points, paths, or snippets.

## getId() signature

```js
int|string getId(prefix='')
```

This methiod takes an optional parameter that will be used as a prefix for the ID.

## getId() example

```js
cont part = {
  name: 'examples.getid',
  draft: ({ Point, points, getId, part }) => {
    for (let i=0;i<10;i++) {
      points[getId()] = new Point(i*10, i*10)
    }

    return part
  }
}
```