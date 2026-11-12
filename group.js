import {groupDeal, sorted, scoreOrder, yearLabel} from './core.js';

const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function createGroupSession(events,code){
  return {version:2,order:groupDeal(events,code).map(card=>card.id),checked:false,revealed:false};
}

export function validGroupSession(saved,fresh){
  return saved?.version===2&&Array.isArray(saved.order)&&
    saved.order.length===fresh.order.length&&
    JSON.stringify([...saved.order].sort())===JSON.stringify([...fresh.order].sort())&&
    typeof saved.checked==='boolean'&&typeof saved.revealed==='boolean';
}

export function groupMarkup({events,session,code,art}){
  const byId=new Map(events.map(card=>[card.id,card]));
  const correctOrder=sorted(events);
  const score=scoreOrder(session.order.map(id=>byId.get(id)));
  const count=events.length;
  const cardMarkup=(id,index)=>{
    const event=byId.get(id),correct=correctOrder[index].id===id;
    const state=session.checked?(correct?'correct':'incorrect'):'';
    return `<article class="game-card group-card ${state}" data-card-index="${index}" draggable="true">
      <div class="card-position"><span>${String(index+1).padStart(2,'0')}</span><span>${session.checked?(correct?'✓':'↔'):'↔'}</span></div>
      <button class="card-content" ${session.revealed?`data-detail="${id}"`:`data-group-clue="${id}"`} aria-label="${session.revealed?'Read about':'Read the clue for'} ${escape(event.title)}">
        <div class="card-art">${art(id)}</div><span class="card-category">${escape(event.category)}</span>
        <h3 lang="es">${escape(event.title)}</h3>
        ${session.revealed?`<div class="card-date" lang="es"><strong>${yearLabel(event.year)}</strong><span>${escape(event.approx)}</span></div>`:'<span class="hidden-date">Read the clue ↗ · Date hidden</span>'}
      </button>
      <div class="group-card-controls"><div class="card-moves"><button data-move="${index},${index-1}" ${index===0?'disabled':''} aria-label="Move ${escape(event.title)} earlier">← Antes</button><button data-move="${index},${index+1}" ${index===count-1?'disabled':''} aria-label="Move ${escape(event.title)} later">Después →</button></div>
      <label class="position-control"><span>Position</span><select data-position="${index}" aria-label="Position of ${escape(event.title)}">${Array.from({length:count},(_,position)=>`<option value="${position}" ${position===index?'selected':''}>${position+1}</option>`).join('')}</select></label></div>
    </article>`;
  };
  return `<section class="game-view group-view">
    <div class="game-top"><button class="text-link" data-action="setup">← Game setup</button><div class="game-code-badge">GAME <strong>${code}</strong><span>· Group activity</span><button data-action="share" aria-label="Copy game link" title="Copy game link">↗</button></div></div>
    <div class="game-heading"><div><p class="eyebrow">GAME 01 / PAIRS & GROUPS</p><h1 lang="es">Antes o Después</h1></div><button class="secondary" data-action="language">Language reference ↗</button></div>
    <div class="board-instruction"><div><h2>One group. All ${count} cards.</h2><p>Agree on the order together. Drag cards or choose a position. Open a card for a simple Spanish clue.</p></div><span class="direction-label" lang="es">ANTES <span>→</span> DESPUÉS</span></div>
    <div class="group-toolbar"><div class="group-status" role="status">${session.checked?`<strong>${score}<small> / ${count}</small></strong><span>${score===count?'All cards are in order.':'cards in the correct position. Keep working together.'}</span>`:`<strong>${count} cards</strong><span>${session.revealed?'Dates revealed. You can still move the cards.':'Dates hidden. Work together on one screen.'}</span>`}</div><div class="group-actions"><button class="primary" data-action="check">Check group order ✓</button><button class="secondary" data-action="reveal-dates">${session.revealed?'Hide dates':'Reveal dates'}</button><button class="secondary" data-action="solution">Show correct order</button></div></div>
    <div class="timeline-track" aria-hidden="true" lang="es"><span>ANTES</span><i></i><span>DESPUÉS</span></div>
    <div class="hand-grid group-hand">${session.order.map(cardMarkup).join('')}</div>
    <div class="board-bottom"><p lang="es">«La rueda apareció antes que el papel.»<br><span class="small-note" lang="en">Say your ideas in Spanish. Check as often as you need.</span></p><button class="primary" data-action="check">Check group order ✓</button></div>
    <div class="game-note"><span>No turns or individual scores. The group orders the complete deck.</span><button class="text-link" data-action="restart">Restart group game</button></div>
  </section>`;
}
