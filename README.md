# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Links

- Live Site URL: [Github Pages](https://kuba-nowoszynski.github.io/)

### Built with

- Semantic HTML5 markup
- Sass: Syntactically Awesome Style Sheets
- Flexbox
- Desktop-first workflow

### What I learned

```css
//640px, 1024px, 1400px
$breakpoints-up: (
  "medium": "40em",
  "large": "64em",
  "xlarge": "87.5em",
); //rem=pixels/16

//639px, 1023px, 1399px
$breakpoints-down: (
  "small": "39.9375em",
  "medium": "63.9375em",
  "large": "87.4375em",
); //rem=pixels/16

@mixin breakpoint-up($size) {
  @media (min-width: map-get($breakpoints-up,$size)) {
    @content;
  }
}

@mixin breakpoint-down($size) {
  @media (max-width: map-get($breakpoints-down,$size)) {
    @content;
  }
}

@include breakpoint-up(medium) {
  height: 35rem;
}
```

### Author

- Github - [Kuba-Nowoszynski](https://github.com/Kuba-Nowoszynski)
