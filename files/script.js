let rating=0;
function rate(v){rating=v;document.querySelectorAll('.star').forEach((s,i)=>s.classList.toggle('on',i<v));}
function filt(cat,btn){
  document.querySelectorAll('.filt').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  document.querySelectorAll('.comment').forEach(c=>c.style.display=(cat==='all'||c.dataset.cat===cat)?'block':'none');
}
function submit(){document.getElementById('the-form').style.display='none';document.getElementById('success').style.display='block';}