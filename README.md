#LiGHTHOUSE: A Simple Web Typography Starter Pack
[LiGHTHOUSE]('https://adamduckett.github.io/lighthouse/') is a dead simple starting point for beautiful web typography.

But really, there's nothing crazy going on here. Vertical rhythm is maintained simply by making sure the font-size, line-height (leading) and margins of each element keeps to the baseline. Max-width (measure) is the icing on the cake by making sure your line length is just right.

TL;DR your text will look awesome and will be easier to read :)

[View an Example](http://adamduckett.io/)

##Installation
LiGHTHOUSE gets on well with tools like [Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/). It's built with Sass and
should integrate into your own build process seamlessly. Simply fork or download this repository to get started :)

##Getting Started
As it stands LiGHTHOUSE is nothing more than a sole ```lighthouse.scss``` file. I've mulled over separating it out into multiple files (I actually started the project in this manner) but in the end decided to keep things as simple as possible. But as the project grows I may go back on that decision and tear the fucker apart.

While I've tried to keep configuration to a minimum, you still have to do some shit yourself to get LiGHTHOUSE up and running (sorry!). But it won't take long, I promise :)

###Toggle all the Things!
The first thing you need to do is disable any modules you don't wish to use. Baseline guides is the only features disables by default so avoid unexpected baseline guides appearing on a live website should a hasty developer overlook the documentation o_O

```sass
$lh-use-baseline-guides:       false; // [ true / false ]
$lh-use-modular-scale:         true;  // [ true / false ]
$lh-use-vertical-rhythm:       true;  // [ true / false ]
$lh-use-measure:               true;  // [ true / false ]
$lh-use-font-features:         true;  // [ true / false ]
```

###Variables
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

This ensures your good visual hierarchy by scaling heading (`h1-5`) and paragraph font sizes based on your chosen ratio. LiGHTHOUSE comes bundled with the following modular scale ratios:

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

*Please note: to get the best out LiGHTOUSE you should configure Sass to round to at least 6 decimal places. Otherwise some elements may not stick to the baseline. Because browsers.*

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
When ```$lh-use-measure``` is set to `true` LiGHTHOUSE will help keep text readable by controlling the number of characters on each line.

The measure is applied to the `body` of the page but feel free to edit this if you need to. LiGHTHOUSE also comes with a handy mixin which you can apply to any element in your Sass project.

```sass
@mixin measure() {
  max-width: $lh-measure;
  margin-left: auto;
  margin-right: auto;
}
```

###Font Features
And finally we have some toggle-able features for OpenType fonts. Now let me be clear, this stuff is a bit experimental but browser support is steadily getting better :)

####Ligatures, Old Style Numbers, Swashes and Kerning

Activating font features will turn on ligatures, old style numbers, swashes (1) and kerning straight out-of-the-box.

```sass
h1, h2, h3 ,h4 ,h5,
p {
  -webkit-font-feature-settings: "liga", "onum", "swsh" 1, "kern";
     -moz-font-feature-settings: "liga", "onum", "swsh" 1, "kern";
      -ms-font-feature-settings: "liga", "onum", "swsh" 1, "kern";
       -o-font-feature-settings: "liga", "onum", "swsh" 1, "kern";
          font-feature-settings: "liga", "onum", "swsh" 1, "kern";
}
```

####Small Caps and Stylesets
To use small caps or stylesets you will need to apply one (or more) of the helper classes LiGHTHOUSE provides.

```sass
.small-caps {
  -webkit-font-feature-settings: "smcp";
     -moz-font-feature-settings: "smcp";
      -ms-font-feature-settings: "smcp";
       -o-font-feature-settings: "smcp";
          font-feature-settings: "smcp";
}
```

The reason for the slight variation in how you apply these last two font features comes down to the fact you would more than likely wish to pick and choose which elements you'd like to use small caps and alternate stylesets on.

##Coming Soon
Two things:

1. Remove widows and orphans (JS)
2. Resize images so their height is a multiple of the baseline (JS)

They're both really important issues for me but because they require a little JS
I wanted to get the CSS/Sass-only side of this project up and running first before I started adding scripts.

If you have any ideas or just want to say "hi" [give me a shout](https://twitter.com/adam_duckett).
