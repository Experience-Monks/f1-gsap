# f1-gsap [![npm](https://img.shields.io/npm/v/f1-gsap.svg?style=flat-square)](https://www.npmjs.com/package/f1-gsap)

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

`f1-gsap` was forked from [`f1-dom`](https://github.com/Jam3/f1-dom), which wraps [`f1`](http://npmjs.com/f1) to animate style's of dom elements.

All styles properties are API-Compatible with GSAP. `TweenMax.set` is used as the parser.

## Usage

```bash
npm install f1-gsap
```

## Sample state definition:

```js
{
  states: {
    idle: {
      elButton: {
        xPercent: 0,
        y: 100,
        backgroundColor: 'rgb(255, 0, 255)',
        cursor: 'pointer',
        display: 'inline-block'
      },

      text: {
        color: 'rgb(33,33,33)', // or '#212121'
        rotationZ: 0
      }
    }
  }
}
```

## License

MIT, see [LICENSE.md](http://github.com/jam3/f1-gsap/blob/master/LICENSE.md) for details.
