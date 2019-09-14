# Tomu Animation
[![Build Status](https://dev.azure.com/neilpturley/build-tomu-animation/_apis/build/status/nturley.tomu-animation?branchName=master)](https://dev.azure.com/neilpturley/build-tomu-animation/_build/latest?definitionId=2&branchName=master)

The goal of this exercise is to add animations to the tomu logo.

The rules of the game are

 1. No using proprietary animation software. Probably just Inkscape and Javascript.
 2. If Javascript is disabled, then the image should look as it was when the artist created it.
 3. The SVG file must be one file (javascript is inline)
 4. The SVG and Javascript shouldn't make any requests to the internet (so that it works offline).
 5. The SVG file must be minified to be as small as possible (I should be able to fit it into 150KB or so).
 6. There should be enough random delays so when several of these are being viewed simultaneously, they should NOT appear to be synchronized.
 7. External javascript should be able to easily trigger robot behaviors

Here is my vision for how this will work.

 * There should be some "actions" the robot performs such as waving, dancing, fidgeting, scratching, etc.
 * in between actions, the robot will be doing the idle action.
 * Each action will start and end in the starting position of the logo
