---
title: flag.tip()
---

This flags information at the `tip` level.

Info that is flagged is stored in the store under `plugins.plugin-annotations.flags.tip`.
The core library does nothing with this info, it is merely stored, much like logs are.

However, in our own UI on FreeSewing.org, we use this mechanism to allow
designer to flag information to the user, and even suggest changes to the
pattern configuration.


## Signature

```js
undefined Store.flag.tip({
  title: 'Something good to know',
  desc: 'Longer message here'
})
```

Since these methods are not part of FreeSewing's core API, what you pass to this method does depend on your own implementation.

For a more detailed example of how we use this, see [flag.info()](/reference/store-methods/flag.info).
