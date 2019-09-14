const JSDOM = require("jsdom").JSDOM;
const fs = require('fs');
const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'javascript', alias: 'j', type: String },
    { name: 'svg', alias: 's', type: String },
    { name: 'output', alias: 'o', type: String }
  ];  
const options = commandLineArgs(optionDefinitions)

console.log('reading svg file...')
const svgInput = fs.readFileSync(options.svg);

console.log('reading javascript...');
var script_contents = fs.readFileSync(options.javascript);

console.log('inlining javascript...');
const { document } = (new JSDOM(`...`)).window;
svgElement = JSDOM.fragment(svgInput).querySelector('svg');
var script_tag = document.createElement('script');
script_tag.type = 'text/javascript';
script_tag.text = '//<![CDATA[ \n ' + script_contents + '\n//]]>\n';
svgElement.appendChild(script_tag)
new_svg = svgElement.outerHTML;
if (new_svg) {
    console.log('writing svg...');
    fs.writeFileSync(options.output, new_svg);
    console.log('complete');
} else {
    console.error('svg output:' + new_svg);
}