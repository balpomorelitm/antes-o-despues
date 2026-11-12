export function normalizeCode(value){
  const raw=String(value).trim();
  if(!/^\d{1,3}$/.test(raw)||Number(raw)<1||Number(raw)>100)return null;
  return String(Number(raw)).padStart(3,'0');
}
export function shuffled(items,code){
  let seed=Number(code)*7919+202611;
  const random=()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};
  const result=[...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
export function deal(events,code,players){
  if(!normalizeCode(code)||![2,3].includes(players))throw Error('Invalid game settings');
  const cards=shuffled(events,code);
  return Array.from({length:players},(_,seat)=>cards.slice(seat*5,seat*5+5));
}
export function sorted(cards){return [...cards].sort((a,b)=>a.year-b.year||a.id.localeCompare(b.id));}
export function scoreOrder(cards){const correct=sorted(cards);return cards.reduce((score,c,i)=>score+Number(c.id===correct[i].id),0);}
export function moveCard(cards,from,to){const result=[...cards];if(from<0||from>=cards.length||to<0||to>=cards.length)return result;const [card]=result.splice(from,1);result.splice(to,0,card);return result;}
export function yearLabel(year){return year<0?`${Math.abs(year).toLocaleString('es-ES')} a. C.`:String(year);}
export function gameKey(code,players,mode){return `aod-v1-${normalizeCode(code)}-${players}-${mode}`;}
