import fs from 'fs';
import { lstatSync, readdirSync } from 'fs';
const REF_BUILD = 'esm-unbundled'
,   patchBuild = build=>
{
    const fPath = `./build/${build}/index.html`;
    fs.readFile( fPath, 'utf8', (err, txt)=>
    {
        err || fs.writeFileSync( fPath, txt.split(REF_BUILD).join(build) );
    });
};
readdirSync('./build')
    .filter( name=> name !== REF_BUILD )
    .map(name => patchBuild(name) );
