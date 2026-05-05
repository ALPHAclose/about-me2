import * as lucide from 'lucide-react';
const socialIcons = Object.keys(lucide).filter(k => 
  ['twitter', 'github', 'linkedin', 'mail', 'external', 'social', 'brand', 'x'].some(s => k.toLowerCase() === s || k.toLowerCase().startsWith(s))
);
console.log(socialIcons.sort());


