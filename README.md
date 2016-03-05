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

As you can see, if you're happy to roll with default browser font-size and the fairly common line-height of 1.5 you can pretty much just leave these be. Score!

##Coming Soon
After reading a handful of smashing blog posts by [Elliot Jay Stocks](http://www.elliotjaystocks.com/) I plan on bundling in functionality to activate some cool OpenType features like: ligatures, small caps, old style numerals and swashes.

If you have any ideas or just want to say "hi" [give me a shout](https://twitter.com/adam_duckett).
