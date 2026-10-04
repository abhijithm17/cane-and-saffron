document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block';this.reset()});

(function(){var l=document.createElement('div');l.className='dots';l.setAttribute('aria-hidden','true');var c=['#EA4A2F','#FF2D2D','#D90429','#FF5A5F'],r=Math.random;
for(var k=0;k<34;k++){var d=document.createElement('i'),s=6+r()*18;
d.style.cssText='left:'+(r()*100)+'%;width:'+s+'px;height:'+s+'px;background:'+c[Math.floor(r()*4)]+';--o:'+(.5+r()*.45)+';animation-duration:'+(10+r()*14)+'s,'+(3+r()*3)+'s;animation-delay:-'+(r()*20)+'s,-'+(r()*5)+'s';
l.appendChild(d)}document.body.appendChild(l)})();
