(function(){
const S=window.SITE,P=(window.PROJECTS||[]).filter(p=>p.visible!==false);
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ph=s=>/\[.*\]/.test(s)?`<span class="ph">${esc(s)}</span>`:esc(s);
const tags=a=>`<ul class="tags">${a.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>`;
const ext=(u,l)=>`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(l)}</a>`;
const IN='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.500v6.200zM5.300 7.400a2.100 2.100 0 110-4.200 2.100 2.100 0 010 4.200zM7.100 20.500H3.600V9h3.500v11.500z"/></svg>';
const GH='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.500 11.500 0 00-3.600 22.400c.6.100.8-.2.8-.6v-2c-3.200.7-3.900-1.500-3.900-1.500-.5-1.300-1.300-1.700-1.300-1.700-1-.7.100-.7.100-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.700 1.300 3.400 1 .1-.8.400-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 015.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.800 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.300c0 .3.200.7.800.6A11.500 11.500 0 0012 .5z"/></svg>';
const social=()=>`<a class="icon" href="${esc(S.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${IN}</a><a class="icon" href="${esc(S.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${GH}</a>`;
const resumeBtn=`<a class="btn" href="${esc(S.resume)}" download>Download resume</a>`;

document.title=`${S.name} | Data Science, Analytics & AI`;
$("#brand").textContent=S.name;
$("#hero").innerHTML=`<div><h1>${esc(S.name)}</h1><p class="headline">${esc(S.headline)} · ${esc(S.location)}</p><p class="bio">${esc(S.bio)}</p><div class="actions">${resumeBtn}${social()}</div></div>
<div class="photo"><img src="${esc(S.photo)}" alt="${esc(S.photoAlt)}" width="340" height="340"></div>`;
$("#lenses").innerHTML=S.lenses.map(l=>`<div class="lens"><h2>${esc(l.title)}</h2><p>${esc(l.text)}</p>${tags(l.tags)}</div>`).join("");
$("#experience-list").innerHTML=S.experience.map(e=>`<article class="entry"><div class="dates"><span>${esc(e.dates)}</span><span class="place">${esc(e.place)}</span></div><div><h3>${esc(e.company)}</h3><p class="role">${esc(e.title)}</p><ul class="pts">${e.bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul>${tags(e.tags)}</div></article>`).join("");
$("#education-list").innerHTML=S.education.map(e=>`<article class="entry"><div class="dates">${esc(e.dates)}</div><div><h3>${esc(e.school)}</h3><p class="role">${esc(e.degree)}</p><ul class="pts">${e.notes.map(n=>`<li>${ph(n)}</li>`).join("")}</ul></div></article>`).join("");
$("#project-grid").innerHTML=P.map((p,i)=>`<article class="card" data-i="${i}"><img src="${esc(p.thumb)}" alt="${esc(p.alt)}" width="1200" height="750" loading="lazy"><div class="cb">${p.status==="in-progress"?'<span class="status">In progress</span>':""}<h3><button type="button" class="open" data-i="${i}" aria-haspopup="dialog">${esc(p.title)}</button></h3><p>${esc(p.summary)}</p>${tags(p.tags)}<div class="links">${p.github?ext(p.github,"GitHub"):""}${p.demo?ext(p.demo,p.demoLabel||"Live demo"):""}</div></div></article>`).join("");
$("#skills-list").innerHTML=S.skills.map(g=>`<div class="skill"><h3>${esc(g.group)}</h3>${tags(g.items)}</div>`).join("");
$("#recognition-list").innerHTML=S.recognition.map(r=>`<article class="rec"><h3>${esc(r.title)}</h3><p class="meta">${esc(r.kind)} · ${ph(r.venue)} · ${ph(r.date)}</p><p>${ph(r.text)}</p>${r.link?`<p>${ext(r.link,r.linkLabel||"Link")}</p>`:""}</article>`).join("");
$("#contact-inner").innerHTML=`<h2>${esc(S.contactMessage)}</h2><a class="mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a><div class="actions">${resumeBtn}${social()}</div>`;
$("#footer").innerHTML=`© ${new Date().getFullYear()} ${esc(S.name)}`;

/* project modal */
const dlg=$("#modal");
const field=(l,t)=>t?`<h4>${l}</h4><p>${ph(t)}</p>`:"";
function openProject(i){const p=P[i];
 $("#modal-body").innerHTML=`<div class="m"><button class="close" aria-label="Close">&times;</button><h2 id="m-title">${esc(p.title)}</h2>${p.status==="in-progress"?'<span class="status">In progress</span>':""}${field("Problem",p.problem)}${field("Objective",p.objective)}${field("Approach",p.approach)}<h4>Technologies</h4>${tags(p.tags)}${field("Outcome",p.results)}<div class="links" style="margin-top:22px">${p.github?ext(p.github,"GitHub"):""}${p.demo?ext(p.demo,p.demoLabel||"Live demo"):""}</div></div>`;
 dlg.showModal();}
$("#project-grid").addEventListener("click",e=>{if(e.target.closest("a"))return;const c=e.target.closest(".card");if(c)openProject(+c.dataset.i)});
dlg.addEventListener("click",e=>{if(e.target===dlg||e.target.closest(".close"))dlg.close()});

/* mobile nav */
const burger=$(".burger"),menu=$("#menu");
burger.addEventListener("click",()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
menu.addEventListener("click",e=>{if(e.target.matches("a")){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});

/* active section + reveal */
if("IntersectionObserver" in window){
 const links=[...menu.querySelectorAll("a")];
 const spy=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+en.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
 document.querySelectorAll("main section").forEach(s=>spy.observe(s));
 if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
  const rv=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");rv.unobserve(en.target)}}),{threshold:.08});
  document.querySelectorAll(".sec .wrap").forEach(s=>{s.classList.add("reveal");rv.observe(s)});
 }
}
})();
