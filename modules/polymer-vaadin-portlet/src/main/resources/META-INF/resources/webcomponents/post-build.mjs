import fs from 'fs';
import { lstatSync, readdirSync } from 'fs';
const REF_BUILD = 'esm-unbundled'
,   patchBuild = build=>
{
    const fPath = `./build/${build}/index.html`;
    fs.readFile( fPath, 'utf8', (err, txt)=>
    {   txt = txt.split(REF_BUILD).join(build)
            .replace("document.write","0 && ")
            .replace("<html>" ,"")
            .replace("</html>","")
            .replace("<body>" ,"")
            .replace("</body>","");
        err || fs.writeFileSync( fPath, txt );
    });
};
readdirSync('./build')
    .filter( name=> name !== REF_BUILD )
    .map(name => patchBuild(name) );
