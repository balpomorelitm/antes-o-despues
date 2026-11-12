// Original editorial illustrations. Everything is drawn locally as SVG.
const ink = '#214d49';
const coral = '#df765c';
const gold = '#dba84d';
const teal = '#739a8d';
const pale = '#e8eadc';
const cream = '#fff8e9';

const artwork = {
  fire: {
    label: 'A campfire with glowing flames',
    body: `<path d="M80 164l135-18 2 17-135 18z" fill="${teal}"/><path d="M89 143l123 26-4 15-124-26z" fill="${gold}"/><path d="M91 144l18 4m-7 20l16-2m68-8l16 3m-12 12l11 3"/><path d="M151 32c15 35 52 42 49 80-1 32-20 48-50 48-35 0-58-24-50-52 4-18 23-31 29-52 3 15 5 19 11 25 5-20 18-27 11-49z" fill="${coral}"/><path d="M151 95c4 16 26 25 22 44-3 12-13 20-26 20-17 0-26-10-25-23 1-13 14-20 15-35 7 9 8 12 9 18 5-7 6-13 5-24z" fill="${gold}"/><path d="M117 63l-5-9m68-3l6-8m24 48l10-4"/>`
  },
  electricity: {
    label: 'A lightning bolt above an electrical experiment',
    body: `<path d="M151 26l-33 62h29l-14 52 52-78h-31l18-36z" fill="${gold}"/><path d="M106 125H84v41h132v-41h-21" fill="none"/><path d="M80 166h141v14H80z" fill="${teal}"/><path d="M97 125V83h13v42m78 0V83h13v42" fill="${coral}"/><path d="M103 82V68m92 14V68m-17 57c-8 17-14 16-24 2s-19-12-27 0" fill="none"/><circle cx="103" cy="64" r="9" fill="${gold}"/><circle cx="195" cy="64" r="9" fill="${gold}"/><path d="M68 103l-10-3m173 3l11-3m-88 48v8"/>`
  },
  dna: {
    label: 'A double helix and a scientific photograph',
    body: `<path d="M106 25c0 38 88 36 88 74s-88 36-88 74m88-148c0 38-88 36-88 74s88 36 88 74" fill="none" stroke-width="8"/><path d="M110 37h80m-65 19h50m-50 23h50m-65 21h80m-66 22h52m-51 23h50m-64 19h78" stroke="${coral}" stroke-width="6"/><path d="M216 58l33 5-10 56-33-5z" fill="${ink}" stroke="${ink}"/><path d="M217 75l22 23m3-20l-29 17" stroke="${cream}" stroke-width="1.5"/><path d="M211 130l24 3m-23 7l16 2M62 81h18m-9-9v18" stroke="${teal}"/>`
  },
  penicillin: {
    label: 'A petri dish with a colony of penicillin mould',
    body: `<ellipse cx="151" cy="117" rx="84" ry="51" fill="${teal}"/><path d="M67 109v15c0 29 38 52 84 52s84-23 84-52v-15" fill="${pale}"/><ellipse cx="151" cy="109" rx="84" ry="51" fill="${cream}"/><ellipse cx="151" cy="109" rx="72" ry="40" fill="${pale}" stroke-width="1.5"/><path d="M144 81l13-3 9 9 15 1 5 12-5 11-1 11-16 7-12-6-14 2-5-13-12-7 7-14 16-1z" fill="${teal}" stroke-width="2"/><circle cx="151" cy="103" r="12" fill="${gold}"/><g fill="${coral}" stroke-width="1.5"><circle cx="108" cy="100" r="4"/><circle cx="127" cy="127" r="3"/><circle cx="194" cy="110" r="4"/><circle cx="180" cy="86" r="3"/><circle cx="170" cy="137" r="3"/></g><path d="M92 49l18 13m-7-26l12 18m94-12l-13 16"/>`
  },
  wheel: {
    label: 'An early wooden wheel with an axle',
    body: `<path d="M85 164h152" stroke="${teal}"/><path d="M147 98l78-14 5 17-78 17z" fill="${gold}"/><ellipse cx="145" cy="105" rx="61" ry="68" fill="${gold}"/><ellipse cx="132" cy="105" rx="61" ry="68" fill="${coral}"/><ellipse cx="132" cy="105" rx="48" ry="54" fill="${cream}"/><path d="M132 51v108m-47-54h94M99 68l66 75m0-75l-66 75" stroke-width="10" stroke="${gold}"/><ellipse cx="132" cy="105" rx="14" ry="16" fill="${teal}"/><ellipse cx="130" cy="102" rx="5" ry="6" fill="${ink}"/><path d="M220 126l8 8m-6 8l12-1M64 58l7 7"/>`
  },
  printing: {
    label: 'A wooden printing press and a printed page',
    body: `<path d="M91 177V45h18v132m84 0V45h18v132M82 44h137v18H82z" fill="${teal}"/><path d="M111 93h82v19h-82z" fill="${gold}"/><path d="M139 62h23v31h-23z" fill="${coral}"/><path d="M150 42V26m-25 6h51" stroke-width="5"/><path d="M80 147h142v17H80z" fill="${coral}"/><path d="M113 117h74v29h-74z" fill="${cream}"/><path d="M122 125h28m6 0h22m-56 7h55m-55 7h39" stroke-width="2"/><path d="M211 94h28v8h-28m-130 74h38m65 0h37" fill="${gold}"/><path d="M239 88v20" stroke-width="7"/>`
  },
  vaccines: {
    label: 'A vaccine vial and a syringe',
    body: `<path d="M107 71h56v13c0 9 11 13 11 25v49c0 11-8 18-20 18h-37c-12 0-20-7-20-18v-49c0-12 10-16 10-25z" fill="${teal}"/><path d="M104 53h62v21h-62z" fill="${gold}"/><path d="M98 113h76v41H98z" fill="${cream}"/><path d="M136 122v24m-12-12h24" stroke="${coral}" stroke-width="7"/><path d="M194 71l36 17-37 77-35-17z" fill="${cream}"/><path d="M167 130l35 17-9 18-35-17z" fill="${coral}"/><path d="M204 72l10-20 17 8-10 21m-14-31l28 14m-59 96l-12 24m29-80l10 5m-16 7l10 5m-16 7l10 5"/><path d="M74 94l-9-5m13-29l-7-8"/>`
  },
  telescope: {
    label: 'A brass telescope pointing at the stars',
    body: `<path d="M89 106l104-63 20 33-104 63z" fill="${gold}"/><path d="M183 45l14-8 26 43-14 8z" fill="${coral}"/><path d="M75 117l17-10 14 23-17 10z" fill="${teal}"/><path d="M118 126l21 10 17-14-16-11z" fill="${teal}"/><path d="M139 136v39m0-36l-32 36m33-36l35 36" stroke-width="6"/><path d="M109 94l16 27m-3-34l17 26" stroke-width="1.5"/><path d="M66 49v19m-9-10h19m152 48v15m-7-8h15m-79-91v10m-5-5h10" stroke="${gold}"/><circle cx="238" cy="38" r="3" fill="${coral}"/>`
  },
  gunpowder: {
    label: 'Gunpowder, a wooden barrel, and a firework',
    body: `<path d="M88 93c-13 19-13 61 0 79h65c13-18 13-60 0-79z" fill="${gold}"/><ellipse cx="121" cy="93" rx="33" ry="11" fill="${cream}"/><path d="M85 109h72m-75 47h78m-54-51v48m29-48v48" fill="none"/><path d="M176 127l37-65 22 13-37 65z" fill="${coral}"/><path d="M213 62l22 13-3-29z" fill="${gold}"/><path d="M177 127l22 13-20 9z" fill="${teal}"/><path d="M187 133l-16 34m-3-14l-7 20m20-15l-4 17" stroke="${gold}"/><path d="M111 83c-3-18 18-17 17-34m-2-6v-9m-7 10l-7-5m22 5l7-5" stroke="${coral}"/><path d="M57 172h20m148-20l9 7"/>`
  },
  tourism: {
    label: 'A traveller’s suitcase with a boat and sun',
    body: `<path d="M81 94h137v76H81z" fill="${coral}"/><path d="M126 94V77h46v17m-35-1v-7h24v7" fill="${gold}"/><path d="M95 94v76m109-76v76" stroke="${gold}" stroke-width="9"/><path d="M137 128h27v17h-27z" fill="${cream}"/><path d="M82 107h13m109 0h14M82 156h13m109 0h14"/><path d="M93 77l12-13h75l15 13z" fill="${teal}"/><path d="M149 29v34h-31z" fill="${cream}"/><path d="M153 39v24h26z" fill="${gold}"/><circle cx="210" cy="43" r="15" fill="${gold}"/><path d="M72 82c11 5 20 4 30 0m94 0c9 5 18 4 28 0" stroke="${teal}"/>`
  },
  money: {
    label: 'Ancient coins and a balance scale',
    body: `<path d="M150 40v106m-35 18h70l-12-18h-47z" fill="${teal}"/><path d="M97 69h110m-57-29l-10 17h20z" fill="${gold}"/><path d="M103 69l-21 50h42zm94 0l-21 50h42z" fill="none" stroke-width="2"/><path d="M79 119h48c-1 18-13 26-24 26s-22-9-24-26zm94 0h48c-1 18-13 26-24 26s-22-9-24-26z" fill="${coral}"/><ellipse cx="98" cy="169" rx="28" ry="10" fill="${gold}"/><path d="M70 158v10c0 6 12 11 28 11s28-5 28-11v-10" fill="${gold}"/><ellipse cx="98" cy="158" rx="28" ry="10" fill="${cream}"/><ellipse cx="208" cy="159" rx="22" ry="25" fill="${gold}"/><path d="M202 147h12v24h-12z" fill="${cream}"/>`
  },
  media: {
    label: 'A newspaper, a loudspeaker, and broadcast waves',
    body: `<path d="M84 59h106v108H84z" fill="${cream}"/><path d="M84 59h106v21H84z" fill="${coral}"/><path d="M95 93h35v30H95z" fill="${teal}"/><path d="M141 94h37m-37 11h37m-37 11h37m-83 21h83m-83 11h83m-83 10h56" stroke-width="2"/><path d="M166 100l49-29v68l-49-25z" fill="${gold}"/><path d="M154 98h14v20h-14z" fill="${teal}"/><path d="M173 116l13 30h14l-14-26" fill="${coral}"/><path d="M226 88c11 11 11 23 0 34m9-44c18 18 18 38 0 56" fill="none" stroke="${teal}"/><path d="M99 43h32m-23-9h15"/>`
  },
  gravity: {
    label: 'An apple falling beside an orbiting planet',
    body: `<path d="M93 174l11-37 8-65h19l4 65 14 37z" fill="${gold}"/><path d="M96 87C49 86 50 40 82 41c-1-28 35-37 48-14 22-15 49 5 44 28 31 8 20 44-10 42l-30-9z" fill="${teal}"/><path d="M130 79l15-15m-30 30l-16-20m14 45l20-18"/><path d="M181 129c-7-14-27-5-26 10 0 15 10 27 22 26 10 2 21-11 21-25 0-14-11-20-17-11z" fill="${coral}"/><path d="M179 127l2-14m1 4c5-9 14-10 19-7-3 8-10 11-19 7" fill="${teal}"/><path d="M178 88v17m-6-6l6 7 6-7"/><circle cx="229" cy="54" r="17" fill="${gold}"/><ellipse cx="229" cy="54" rx="32" ry="9" transform="rotate(-25 229 54)" fill="none"/>`
  },
  radio: {
    label: 'A vintage radio with an aerial',
    body: `<path d="M79 82h143v85H79z" fill="${coral}"/><path d="M93 96h54v56H93z" fill="${gold}"/><path d="M101 103h38m-38 8h38m-38 8h38m-38 8h38m-38 8h38m-38 8h38" stroke-width="2"/><path d="M161 96h45v17h-45z" fill="${cream}"/><path d="M167 101v7m8-7v7m8-7v7m8-7v7m8-7v7" stroke-width="1.5"/><circle cx="174" cy="137" r="12" fill="${teal}"/><circle cx="202" cy="137" r="8" fill="${gold}"/><path d="M174 137l6-5m-90 36v8m117-8v8M115 81l61-50" stroke-width="4"/><path d="M190 38c8 9 8 18 0 27m9-37c15 15 15 31 0 46" fill="none" stroke="${teal}"/><circle cx="177" cy="30" r="4" fill="${gold}"/>`
  },
  neon: {
    label: 'A glowing neon tube in a glass laboratory apparatus',
    body: `<path d="M97 55h-8c-14 0-20 8-20 21v53c0 15 9 22 23 22h116c14 0 22-9 22-23V75c0-13-8-20-20-20h-10" fill="none" stroke="${ink}" stroke-width="16"/><path d="M97 55h-8c-14 0-20 8-20 21v53c0 15 9 22 23 22h116c14 0 22-9 22-23V75c0-13-8-20-20-20h-10" fill="none" stroke="${coral}" stroke-width="9"/><path d="M101 42h19v27h-19zm79 0h19v27h-19z" fill="${teal}"/><path d="M120 55h61" stroke-width="4"/><path d="M96 175h109m-75-23v23m42-23v23"/><path d="M149 83l-11 20h15l-7 21 22-29h-17l11-12z" fill="${gold}"/><path d="M49 89H38m16 41l-9 5m197-45h12m-16 40l10 5" stroke="${gold}"/>`
  },
  bulb: {
    label: 'An incandescent light bulb',
    body: `<path d="M150 39c-35 0-56 26-51 55 2 15 10 24 20 35 7 7 9 12 9 20h45c0-8 2-13 9-20 10-11 18-20 20-35 5-29-17-55-52-55z" fill="${gold}"/><path d="M126 149h49v21h-49z" fill="${teal}"/><path d="M133 170h35l-9 10h-17z" fill="${ink}"/><path d="M128 156h44m-44 7h44" stroke="${cream}" stroke-width="2"/><path d="M139 149l-9-52 13 8 8-11 9 11 13-8-11 52" fill="none"/><path d="M115 81c3-13 11-22 24-25" fill="none" stroke="${cream}" stroke-width="5"/><path d="M150 16v12m-59 9l9 10m101-10l-9 10m-123 43h15m133 0h15m-135 47l-10 9m120-9l10 9" stroke="${coral}"/>`
  },
  wifi: {
    label: 'A wireless router with a Wi-Fi signal',
    body: `<path d="M83 139h136v32H83z" fill="${teal}"/><path d="M96 139V97m110 42V97" stroke-width="6"/><path d="M92 171v7m117-7v7"/><circle cx="104" cy="155" r="3" fill="${gold}"/><circle cx="117" cy="155" r="3" fill="${gold}"/><circle cx="130" cy="155" r="3" fill="${gold}"/><path d="M78 59c41-40 105-40 146 0m-128 20c31-29 77-29 108 0m-88 21c20-18 48-18 68 0" fill="none" stroke="${coral}" stroke-width="8"/><circle cx="150" cy="118" r="8" fill="${gold}"/><path d="M178 154h27" stroke="${cream}" stroke-width="2"/>`
  },
  engine: {
    label: 'The gears and punch cards of the analytical engine',
    body: `<path d="M72 148h160v24H72z" fill="${teal}"/><path d="M87 65h133v83H87z" fill="${gold}"/><path d="M93 50h121v19H93z" fill="${coral}"/><path d="M102 79v59m17-59v59m17-59v59m17-59v59m17-59v59m17-59v59m17-59v59" stroke-width="4"/><g fill="${cream}"><circle cx="113" cy="106" r="25"/><circle cx="178" cy="117" r="22"/></g><path d="M113 82v48m-24-24h48m-41-17l34 34m0-34l-34 34m82-28v44m-22-22h44m-38-16l32 32m0-32l-32 32" stroke-width="5" stroke="${coral}"/><circle cx="113" cy="106" r="8" fill="${gold}"/><circle cx="178" cy="117" r="7" fill="${gold}"/><path d="M226 79h24v54h-24z" fill="${cream}"/><path d="M233 88h3m5 0h3m-11 10h3m5 0h3m-11 10h3m5 0h3m-11 10h3" stroke-width="4"/><path d="M70 172v7m162-7v7"/>`
  },
  paperbag: {
    label: 'A flat-bottomed paper shopping bag',
    body: `<path d="M99 73h100l14 98H84z" fill="${gold}"/><path d="M99 73l12 87 88 11H84z" fill="${coral}"/><path d="M111 160l14-87m74 0l-13 87m-75 0h75l27 11" fill="none" stroke-width="2"/><path d="M122 72V54c0-17 12-27 26-27s26 10 26 27v18" fill="none" stroke-width="9"/><path d="M122 72V54c0-17 12-27 26-27s26 10 26 27v18" fill="none" stroke="${cream}" stroke-width="4"/><path d="M132 108h35v30h-35z" fill="${cream}"/><path d="M141 120l8-7 8 7m-8-7v17" stroke="${teal}"/><path d="M66 92l-11-4m17-23l-7-8m161 41l13-3"/>`
  },
  cinema: {
    label: 'An early cinema camera with two film reels',
    body: `<circle cx="118" cy="64" r="34" fill="${teal}"/><circle cx="181" cy="64" r="34" fill="${coral}"/><g fill="${cream}" stroke-width="1.5"><circle cx="118" cy="49" r="8"/><circle cx="103" cy="70" r="8"/><circle cx="133" cy="70" r="8"/><circle cx="181" cy="49" r="8"/><circle cx="166" cy="70" r="8"/><circle cx="196" cy="70" r="8"/></g><path d="M91 88h119v59H91z" fill="${gold}"/><path d="M210 102l28-13v58l-28-13z" fill="${teal}"/><path d="M140 147v30m0-25l-29 25m29-25l31 25" stroke-width="5"/><path d="M105 106h42v24h-42z" fill="${cream}"/><path d="M159 107h36m-36 10h36m-36 10h23" stroke-width="2"/><circle cx="118" cy="64" r="3" fill="${ink}"/><circle cx="181" cy="64" r="3" fill="${ink}"/>`
  },
  movable: {
    label: 'Movable printing type blocks and a Chinese printed sheet',
    body: `<path d="M153 32h83v117h-83z" fill="${cream}"/><path d="M164 46h61m-61 11h61m-61 67h61m-61 11h40" stroke-width="2"/><path d="M173 71v33m-10-26h21m-23 12h23m-22 14h22m17-34h18m-9 0v34m-9-19h18m-18 19h18" stroke="${teal}" stroke-width="3"/><path d="M72 83l38-10 31 16-38 10z" fill="${gold}"/><path d="M72 83v49l31 17V99z" fill="${coral}"/><path d="M103 99l38-10v49l-38 11z" fill="${teal}"/><path d="M87 88l18-5 14 7m-17-7v9" stroke-width="2"/><path d="M119 139l36-10 30 16-36 10z" fill="${gold}"/><path d="M119 139v28l30 16v-28z" fill="${coral}"/><path d="M149 155l36-10v28l-36 10z" fill="${teal}"/><path d="M135 143l15-4 14 8m-16-8v10" stroke-width="2"/><path d="M66 164l22-6m-5 14l22-6"/>`
  },
  airplane: {
    label: 'An early biplane flying through the clouds',
    body: `<path d="M52 65h166l-16 15H66z" fill="${gold}"/><path d="M65 111h166l-17 15H81z" fill="${coral}"/><path d="M75 80l15 31m105-31l15 31m-101-31l15 31m-27-31l-7 31m118-31l-9 31" stroke-width="2"/><path d="M108 100l100-7 25 18-124 3-29-18 17-2z" fill="${teal}"/><path d="M109 100l-5-27h-13l3 24m121-2l8-17h12l-2 32" fill="${gold}"/><path d="M235 100v25m-5-13h12" stroke-width="5"/><path d="M143 115l-9 20m41-20l9 20"/><circle cx="132" cy="139" r="9" fill="${ink}"/><circle cx="185" cy="139" r="9" fill="${ink}"/><path d="M70 42h37m-51 12h37m91 107h40m-53 10h36" stroke="${teal}" stroke-width="2"/>`
  },
  thermometer: {
    label: 'A glass thermometer showing the temperature',
    body: `<path d="M133 123V41c0-23 34-23 34 0v82c13 7 20 20 17 33-3 15-17 26-34 26s-31-11-34-26c-3-13 4-26 17-33z" fill="${cream}"/><path d="M145 128V71h11v57c11 3 16 10 16 20 0 12-10 22-22 22s-22-10-22-22c0-10 6-17 17-20z" fill="${coral}"/><path d="M151 40v21" stroke="${teal}" stroke-width="3"/><path d="M167 51h14m-14 15h9m-9 15h14m-14 15h9m-9 15h14" stroke-width="2"/><circle cx="91" cy="57" r="16" fill="${gold}"/><path d="M91 30v-7m-27 34h-7m34 27v7m27-34h7m-53-20l-5-5m44 45l5 5m-44-5l-5 5m44-45l5-5" stroke="${gold}"/><path d="M204 123v30m-13-22l26 14m-26 0l26-14" stroke="${teal}"/>`
  },
  microscope: {
    label: 'A microscope with a glass slide',
    body: `<path d="M103 177h112v-17H103z" fill="${teal}"/><path d="M172 160c45-30 39-78 6-96l-11 18c22 13 26 47-10 67z" fill="${coral}"/><path d="M109 44l37-15 28 69-37 15z" fill="${gold}"/><path d="M107 43l38-15 6 13-38 15z" fill="${teal}"/><path d="M137 112l37-15 4 10-37 15z" fill="${teal}"/><path d="M142 121l-6 17m22-23l10 15" stroke-width="6"/><path d="M91 141h92v11H91z" fill="${gold}"/><path d="M114 133h39v8h-39z" fill="${cream}"/><circle cx="184" cy="104" r="12" fill="${cream}"/><circle cx="184" cy="104" r="4" fill="${teal}"/><path d="M140 153v7M76 89v17m-8-9h16" stroke="${teal}"/>`
  },
  paper: {
    label: 'Handmade paper on a wooden screen',
    body: `<path d="M78 61l128-24 25 126-128 25z" fill="${gold}"/><path d="M89 69l108-21 21 106-108 21z" fill="${teal}"/><path d="M96 78l96-18 17 84-97 19z" fill="${cream}"/><path d="M110 89l68-13m-64 27l76-15m-73 29l76-14m-73 28l57-11m-54 24l68-13" stroke="${teal}" stroke-width="1.5"/><path d="M63 53l15 11m136 108l10 12"/><path d="M65 132c-14-10-23-5-20 7 4 10 12 14 20 14 8-3 15-12 12-21-3-11-9-10-12 0z" fill="${coral}"/><path d="M65 132v-13m1 3c6-9 14-8 17-4-5 6-10 8-17 4" fill="${teal}"/>`
  },
  writing: {
    label: 'A clay tablet with early writing and a reed stylus',
    body: `<path d="M85 42c26-9 75-10 108-1 9 28 10 83 1 123-31 10-75 10-109 0-9-39-10-88 0-122z" fill="${gold}"/><path d="M99 60h17l-10 12m19-12h17l-10 12m20-12h17l-10 12m19-12h9m-88 27h17l-10 12m19-12h17l-10 12m20-12h17l-10 12m-61 15h17l-10 12m19-12h17l-10 12m20-12h17l-10 12m19-12h9m-88 26h17l-10 12m19-12h17l-10 12m20-12h17" fill="none" stroke-width="2.5"/><path d="M211 65l15 5-34 105-15 15-2-21z" fill="${teal}"/><path d="M177 165l15 10m-7-11l30-88" stroke-width="1.5"/><path d="M75 179h78m73-145l-8 8m18 7l-11 4"/>`
  },
  petroleum: {
    label: 'An oil pumpjack and a barrel of petroleum',
    body: `<path d="M81 168l26-91h16l28 91m-57-44h44m-34-33l30 53m-16-52l-22 52" fill="none" stroke-width="5"/><path d="M86 69l13-19 100 16 6 20-105-15z" fill="${coral}"/><path d="M194 63l18-1 11 18-9 35-15-5 5-24-10-2z" fill="${gold}"/><path d="M216 113v56M76 170h91" stroke-width="4"/><path d="M175 136c0-6 44-6 44 0v34c0 8-44 8-44 0z" fill="${teal}"/><ellipse cx="197" cy="136" rx="22" ry="6" fill="${cream}"/><path d="M175 145h44m-44 18h44" stroke-width="2"/><path d="M197 146c-2 6-8 10-8 14a8 8 0 0016 0c0-4-6-8-8-14z" fill="${ink}"/><circle cx="110" cy="66" r="6" fill="${gold}"/><path d="M56 53h23m-14-9h22" stroke="${teal}"/>`
  },
  mobile: {
    label: 'An early handheld mobile telephone with an antenna',
    body: `<path d="M130 48V20h13v28" fill="${gold}"/><path d="M115 48h62l11 112c1 10-5 17-15 17h-48c-10 0-16-7-15-17z" fill="${teal}"/><path d="M123 62h47l3 29h-52z" fill="${cream}"/><path d="M132 70h28m-27 8h26m-25 8h24" stroke-width="2"/><path d="M124 104h13v10h-13zm21 0h13v10h-13zm21 0h13v10h-13zm-43 18h13v10h-13zm21 0h13v10h-13zm21 0h13v10h-13zm-43 18h13v10h-13zm21 0h13v10h-13zm21 0h13v10h-13z" fill="${gold}" stroke-width="1.5"/><path d="M135 163h28" stroke="${cream}" stroke-width="3"/><path d="M193 56c9 10 9 21 0 31m10-41c15 15 15 34 0 50" fill="none" stroke="${coral}"/><path d="M90 89c-9-10-9-21 0-31m-10 41c-15-15-15-34 0-50" fill="none" stroke="${coral}"/><path d="M89 172h-16m143-26h15" stroke="${gold}"/>`
  },
  radiation: {
    label: 'A laboratory flask and the paths of radioactive particles',
    body: `<path d="M123 42h54v13h-7v43l40 62c8 13-1 22-15 22h-90c-14 0-23-9-15-22l40-62V55h-7z" fill="${cream}"/><path d="M110 133h80l20 31c4 7-2 13-13 13h-94c-11 0-17-6-13-13z" fill="${teal}"/><path d="M130 55h40m-33 50h25" stroke-width="2"/><circle cx="150" cy="143" r="5" fill="${gold}"/><circle cx="130" cy="157" r="3" fill="${cream}"/><circle cx="170" cy="160" r="4" fill="${cream}"/><path d="M88 92c-24 22-34 32-29 40 8 13 52-2 99-32s77-60 69-73c-5-8-24-6-51 5M90 32c-27-9-46-10-51-2-8 13 22 44 69 74s92 44 100 31c5-8-5-21-25-41" fill="none" stroke="${coral}" stroke-width="2.5"/><circle cx="222" cy="48" r="7" fill="${gold}"/><circle cx="66" cy="119" r="6" fill="${gold}"/><path d="M150 12v12m-27-2l5 11m49-11l-5 11" stroke="${gold}"/>`
  }
};

const escapeAttribute = value => String(value).replace(/[&<>"']/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character]));

/** Return an original, self-contained illustration for a historical event. */
export function illustration(id, className = '') {
  const art = artwork[id];
  if (!art) return '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" class="${escapeAttribute(className)}" role="img" aria-label="${escapeAttribute(art.label)}" focusable="false"><rect width="300" height="200" fill="#f4f0e5"/><circle cx="150" cy="102" r="83" fill="#e3e7d9"/><path d="M27 163h33m-20 8h12m190-130h31m-19 8h9" fill="none" stroke="#bac8b4" stroke-width="2"/><g fill="#b8c5af"><circle cx="40" cy="118" r="1.4"/><circle cx="46" cy="126" r="1.4"/><circle cx="33" cy="129" r="1.4"/><circle cx="262" cy="102" r="1.4"/><circle cx="269" cy="111" r="1.4"/><circle cx="256" cy="114" r="1.4"/></g><g stroke="${ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${art.body}</g></svg>`;
}

export const illustrationCount = Object.keys(artwork).length;
