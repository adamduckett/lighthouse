#LiGHTHOUSE: A Simple Web Typography Starter Pack
[LiGHTHOUSE]('https://adamduckett.github.io/lighthouse/') is a dead simple starting point for beautiful web typography.

But really, there's nothing crazy going on here. Vertical rhythm is maintained simply by making sure the font-size, line-height (leading) and margins of each element keeps to the baseline. Max-width (measure) is the icing on the cake by making sure your line length is just right.

TL;DR your text will look awesome and will be easier to read :)

[View an Example](https://adamduckett.github.io/lighthouse/example)

##Installation
LiGHTHOUSE gets on well with tools like [Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/). It's built with Sass and
should integrate into your own build process seamlessly. Simply fork or download this repository to get started :)

##Getting Started
As it stands LiGHTHOUSE is nothing more than a sole ```lighthouse.scss``` file. I've mulled over separating it out into multiple files (I actually started the project in this manner) but in the end decided to keep things as simple as possible. But as the project grows I may go back on that decision and tear the fucker apart.

###Basic Configuration
While I've tried to keep configuration to a minimum, you still have to do some shit yourself to get LiGHTHOUSE up and running (sorry!). But it won't take long, I promise :)

####Toggle all the Things!
The first thing you need to do is disable any modules you don't wish to use. They're all enabled by default.

```sass
$lh-use-baseline-guides:       true; // [ true / false ]
$lh-use-modular-scale:         true; // [ true / false ]
$lh-use-vertical-rhythm:       true; // [ true / false ]
$lh-use-measure:               true; // [ true / false ]
```

####Variables
Now we've only got the modules we'd like to use active it's time to configure your type variables. To keep shit simple you only need to alter the following 3 variables:

**Font Size**
```sass
$lh-font-size:                 16px !default; // a `px` value
```

**Line Height**
```sass
$lh-line-height:               1.5 !default;  // a unitless value
```

**Modular Scale Ratio**
```sass
$lh-ratio:                     $lh-golden !default;
```

As you can see, if you're happy to roll with default browser font-size and the fairly common line-height of `1.5` you can pretty much just leave these be. Score!

And that's all there is to it in terms of setup. See, wasn't that easy!

###Functions
Move along, there's nothing to see here, kids. All you need to know is this is where the magic happens ;)

###Baseline Guides
When ```$lh-use-baseline-guides``` is set to `true` LiGHTHOUSE will generate a baseline guide using the colour specified in ```$lh-baseline-color``` and the appropriate baseline.

While ```lighthouse.scss``` applies the background to the `body` of the page feel free to change this to something else if you wish.

###Modular Scale
When ```$lh-use-modular-scale``` is set to `true` LiGHTHOUSE will apply `font-size` and `line-height` based on the ```$lh-font-size``` and ```$lh-ratio``` variables.

This ensures your good visual hierarchy by scaling heading (h1-5) and paragraph font sizes based on your chosen ratio. LiGHTHOUSE comes bundled with the following modular scale ratios:

```sass
$lh-golden:                    1.618034;
$lh-double-octav:              4;
$lh-major-twelfth:             3;
$lh-major-eleventh:            2.666666667;
$lh-major-tenth:               2.5;
$lh-octave:                    2;
$lh-major-seventh:             1.875;
$lh-minor-seventh:             1.777777778;
$lh-major-sixth:               1.666666667;
$lh-minor-sixth:               1.6;
$lh-fifth:                     1.5;
$lh-augmented-fourth:          1.41421;
$lh-fourth:                    1.333333333;
$lh-major-third:               1.25;
$lh-minor-third:               1.2;
$lh-major-second:              1.125;
$lh-minor-second:              1.066666667;
```

You should play around with the above ratios and the ```$lh-ratio``` variable until you find something that gets you hard.

###Vertical Rhythm
When ```$lh-use-vertical-rhythm``` is set to `true` LiGHTHOUSE will remove default `margin` and `padding` from a bunch of pesky elements so they won't interfere with its finely-tuned-but-sometimes-a-bastard rhythm.

```sass
body,
h1, h2, h3, h4, h5, h6,
p, blockquote, pre,
dl, dd, ol, ul,
form, fieldset, legend,
table, th, td, caption,
hr {
  margin: 0;
  padding: 0;
}
```

It then adds a consistent `margin-bottom` to maintain vertical spacing down the page.

```sass
h1, h2, h3, h4, h5, h6, hgroup,
ul, ol, dl,
blockquote, p, address,
table,
fieldset, figure,
pre {
  margin-bottom: $lh-spacing;
}
```

###Measure
Last but not least, when ```$lh-use-measure``` is set to `true` LiGHTHOUSE will help keep text readable by controlling the number of characters on each line.

The measure is applied to the `body` of the page but feel free to edit this if you need to. LiGHTHOUSE also comes with a handy mixin which you can apply to any element in your Sass project.

```sass
@mixin measure() {
  max-width: $lh-measure;
  margin-left: auto;
  margin-right: auto;
}
```

##Coming Soon
After reading a handful of smashing blog posts by [Elliot Jay Stocks](http://www.elliotjaystocks.com/) I plan on bundling in functionality to activate some cool OpenType features like: ligatures, small caps, old style numerals and swashes.

If you have any ideas or just want to say "hi" [give me a shout](https://twitter.com/adam_duckett).
