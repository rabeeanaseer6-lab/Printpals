interface PrintItem {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  tags: string[];
  svgContent: string;
  traceText: string;
  description: string;
}

// ════════════════════ NEW VEGETABLE SVGs ════════════════════

function bellPepperSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" width="400" height="460">
  <rect width="400" height="460" fill="white"/>
  <!-- Stem -->
  <rect x="186" y="78" width="28" height="58" rx="11" fill="none" stroke="#111" stroke-width="7"/>
  <!-- Side tendrils from stem -->
  <path d="M208 102 Q252 80 260 58" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <path d="M192 102 Q148 80 140 58" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <!-- Crown / top lobes -->
  <path d="M116 192 Q105 158 128 144 Q154 136 172 154 Q184 138 204 132 Q224 132 236 148 Q248 132 268 132 Q288 136 300 154 Q318 136 346 144 Q369 158 284 192 Z" fill="none" stroke="#111" stroke-width="8" stroke-linejoin="round"/>
  <!-- Body -->
  <path d="M116 192 Q100 248 100 322 Q100 378 136 408 Q166 432 200 434 Q234 432 264 408 Q300 378 300 322 Q300 248 284 192" fill="none" stroke="#111" stroke-width="9"/>
  <!-- Center vertical line -->
  <path d="M200 192 Q200 310 200 412" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Horizontal belly line -->
  <path d="M110 292 Q200 322 290 292" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <text x="200" y="454" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Bell Pepper</text>
</svg>`;
}

function cucumberSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <rect width="400" height="480" fill="white"/>
  <!-- Cucumber body - large vertical oval -->
  <ellipse cx="200" cy="262" rx="100" ry="196" fill="none" stroke="#111" stroke-width="10"/>
  <!-- Flower/blossom end cap at bottom -->
  <path d="M200 448 Q218 436 228 448 Q218 460 200 462 Q182 460 172 448 Q182 436 200 448Z" fill="none" stroke="#111" stroke-width="5"/>
  <!-- Stem crown at top -->
  <path d="M200 66 Q218 58 224 44 Q208 40 200 48 Q192 40 176 44 Q182 58 200 66Z" fill="none" stroke="#111" stroke-width="6" stroke-linejoin="round"/>
  <path d="M178 76 Q162 68 156 54" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <path d="M222 76 Q238 68 244 54" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <!-- Horizontal lines -->
  <line x1="166" y1="155" x2="234" y2="155" stroke="#111" stroke-width="3.5"/>
  <line x1="144" y1="200" x2="256" y2="200" stroke="#111" stroke-width="3.5"/>
  <line x1="136" y1="245" x2="264" y2="245" stroke="#111" stroke-width="3.5"/>
  <line x1="136" y1="292" x2="264" y2="292" stroke="#111" stroke-width="3.5"/>
  <line x1="142" y1="338" x2="258" y2="338" stroke="#111" stroke-width="3.5"/>
  <line x1="162" y1="384" x2="238" y2="384" stroke="#111" stroke-width="3.5"/>
  <!-- Vertical center line -->
  <line x1="200" y1="100" x2="200" y2="430" stroke="#111" stroke-width="3.5"/>
  <!-- Bumps/ridges scattered -->
  <ellipse cx="162" cy="178" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="238" cy="178" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="152" cy="225" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="248" cy="225" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="148" cy="272" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="252" cy="272" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="152" cy="318" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="248" cy="318" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="162" cy="362" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <ellipse cx="238" cy="362" rx="9" ry="6" fill="none" stroke="#111" stroke-width="3"/>
  <text x="200" y="472" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Cucumber</text>
</svg>`;
}

function cauliflowerSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" width="400" height="460">
  <rect width="400" height="460" fill="white"/>
  <!-- Head outline -->
  <path d="M70 268 Q58 218 78 182 Q100 146 140 138 Q158 134 176 148 Q190 128 200 118 Q210 128 224 148 Q242 134 260 138 Q300 146 322 182 Q342 218 330 268 Q312 302 258 318 Q228 326 200 326 Q172 326 142 318 Q88 302 70 268Z" fill="none" stroke="#111" stroke-width="9" stroke-linejoin="round"/>
  <!-- Floret circles - large -->
  <circle cx="136" cy="212" r="46" fill="none" stroke="#111" stroke-width="6"/>
  <circle cx="200" cy="182" r="52" fill="none" stroke="#111" stroke-width="6"/>
  <circle cx="264" cy="212" r="46" fill="none" stroke="#111" stroke-width="6"/>
  <circle cx="106" cy="256" r="36" fill="none" stroke="#111" stroke-width="5.5"/>
  <circle cx="294" cy="256" r="36" fill="none" stroke="#111" stroke-width="5.5"/>
  <!-- Top smaller bumps -->
  <circle cx="160" cy="154" r="28" fill="none" stroke="#111" stroke-width="5"/>
  <circle cx="200" cy="144" r="30" fill="none" stroke="#111" stroke-width="5"/>
  <circle cx="240" cy="154" r="28" fill="none" stroke="#111" stroke-width="5"/>
  <!-- Leaves / base -->
  <path d="M80 268 Q66 318 90 348 Q132 384 200 390 Q268 384 310 348 Q334 318 320 268 Q278 296 200 298 Q122 296 80 268Z" fill="none" stroke="#111" stroke-width="8" stroke-linejoin="round"/>
  <!-- Leaf veins -->
  <path d="M98 342 Q112 396 108 422" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <path d="M302 342 Q288 396 292 422" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <path d="M200 390 Q200 416 200 432" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <text x="200" y="454" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Cauliflower</text>
</svg>`;
}

function eggplantSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <rect width="400" height="480" fill="white"/>
  <!-- Stem -->
  <rect x="185" y="68" width="30" height="65" rx="12" fill="none" stroke="#111" stroke-width="7"/>
  <!-- Crown sepals -->
  <path d="M200 133 Q158 133 142 142 Q126 154 122 168 L122 155 Q128 130 162 124Z" fill="none" stroke="#111" stroke-width="6" stroke-linejoin="round"/>
  <path d="M200 133 Q242 133 258 142 Q274 154 278 168 L278 155 Q272 130 238 124Z" fill="none" stroke="#111" stroke-width="6" stroke-linejoin="round"/>
  <!-- Sepal ear left -->
  <path d="M122 168 Q100 156 100 172 Q100 188 122 182Z" fill="none" stroke="#111" stroke-width="5.5" stroke-linejoin="round"/>
  <!-- Sepal ear right -->
  <path d="M278 168 Q300 156 300 172 Q300 188 278 182Z" fill="none" stroke="#111" stroke-width="5.5" stroke-linejoin="round"/>
  <!-- Body - large oval, fills the card -->
  <ellipse cx="200" cy="322" rx="132" ry="172" fill="none" stroke="#111" stroke-width="10"/>
  <!-- Shine highlight -->
  <path d="M108 242 Q92 278 100 318" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <text x="200" y="474" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Eggplant</text>
</svg>`;
}

function mushroomSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 440" width="400" height="440">
  <rect width="400" height="440" fill="white"/>
  <!-- Cap - large dome -->
  <path d="M58 268 Q52 142 200 92 Q348 142 342 268Z" fill="none" stroke="#111" stroke-width="10" stroke-linejoin="round"/>
  <!-- Cap underside / gills line -->
  <path d="M58 268 Q102 292 200 286 Q298 292 342 268" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <!-- Stem - wide and prominent -->
  <path d="M152 268 Q138 352 136 390 Q134 420 158 430 Q200 440 242 430 Q266 420 264 390 Q262 352 248 268 Z" fill="none" stroke="#111" stroke-width="9" stroke-linejoin="round"/>
  <!-- Stem center line -->
  <path d="M200 268 Q200 352 200 416" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Spots on cap -->
  <ellipse cx="166" cy="188" r="32" fill="none" stroke="#111" stroke-width="6"/>
  <ellipse cx="248" cy="158" r="36" fill="none" stroke="#111" stroke-width="6"/>
  <ellipse cx="320" cy="194" r="28" fill="none" stroke="#111" stroke-width="5.5"/>
  <!-- Gill lines under cap -->
  <path d="M72 272 Q118 300 152 300" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M328 272 Q282 300 248 300" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <text x="200" y="436" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Mushroom</text>
</svg>`;
}

function garlicSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" width="400" height="460">
  <rect width="400" height="460" fill="white"/>
  <!-- Outer bulb -->
  <ellipse cx="200" cy="290" rx="130" ry="140" fill="none" stroke="#111" stroke-width="10"/>
  <!-- Clove division lines -->
  <path d="M200 152 Q166 158 158 202 Q150 244 176 270 Q200 290 200 290" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M200 152 Q234 158 242 202 Q250 244 224 270 Q200 290 200 290" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M200 152 Q134 155 122 210 Q110 258 140 278 Q170 296 200 290" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M200 152 Q266 155 278 210 Q290 258 260 278 Q230 296 200 290" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <!-- Neck -->
  <path d="M175 152 Q178 116 186 96 Q192 78 200 62 Q208 78 214 96 Q222 116 225 152" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>
  <!-- Sprouts -->
  <path d="M190 64 Q184 36 180 14" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <path d="M210 64 Q216 36 220 14" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <!-- Roots -->
  <path d="M148 424 Q142 440 138 452" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M172 428 Q170 444 168 456" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M200 430 Q200 446 200 458" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M228 428 Q230 444 232 456" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M252 424 Q258 440 262 452" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <text x="200" y="456" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Garlic</text>
</svg>`;
}

function pumpkinSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 460" width="420" height="460">
  <rect width="420" height="460" fill="white"/>
  <!-- Stem -->
  <rect x="197" y="68" width="26" height="60" rx="11" fill="none" stroke="#111" stroke-width="7"/>
  <!-- Vine tendrils -->
  <path d="M216 88 Q260 70 268 44" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M204 88 Q160 70 152 44" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <!-- Leaf -->
  <path d="M270 44 Q304 38 308 60 Q292 58 270 44Z" fill="none" stroke="#111" stroke-width="5" stroke-linejoin="round"/>
  <!-- Pumpkin ribs - 5 large lobes -->
  <ellipse cx="210" cy="298" rx="56" ry="158" fill="none" stroke="#111" stroke-width="9.5"/>
  <ellipse cx="148" cy="308" rx="54" ry="130" fill="none" stroke="#111" stroke-width="8.5"/>
  <ellipse cx="272" cy="308" rx="54" ry="130" fill="none" stroke="#111" stroke-width="8.5"/>
  <ellipse cx="93" cy="318" rx="50" ry="108" fill="none" stroke="#111" stroke-width="7.5"/>
  <ellipse cx="327" cy="318" rx="50" ry="108" fill="none" stroke="#111" stroke-width="7.5"/>
  <!-- Equator line -->
  <path d="M55 330 Q210 364 365 330" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
  <text x="210" y="454" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Pumpkin</text>
</svg>`;
}

function radishSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <rect width="400" height="480" fill="white"/>
  <!-- Leafy tops - 5 leaves fanning out -->
  <path d="M182 112 Q178 70 195 46 Q216 24 205 50 Q220 32 200 62 Q215 40 195 72Z" fill="none" stroke="#111" stroke-width="6.5" stroke-linejoin="round"/>
  <path d="M194 110 Q185 64 195 38 Q200 22 205 38 Q210 24 215 44 Q224 68 218 108Z" fill="none" stroke="#111" stroke-width="6.5" stroke-linejoin="round"/>
  <path d="M200 110 Q200 68 200 40" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M206 110 Q215 64 205 38 Q202 22 200 38 Q196 22 204 44 Q196 68 182 108Z" fill="none" stroke="#111" stroke-width="6.5" stroke-linejoin="round"/>
  <path d="M218 112 Q222 70 205 46 Q184 24 195 50 Q180 32 200 62 Q185 40 205 72Z" fill="none" stroke="#111" stroke-width="6.5" stroke-linejoin="round"/>
  <!-- Leaf midribs -->
  <path d="M190 64 Q192 88 194 110" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <path d="M210 64 Q208 88 206 110" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <!-- Bulb - large and round -->
  <ellipse cx="200" cy="298" rx="148" ry="158" fill="none" stroke="#111" stroke-width="10"/>
  <!-- Shoulder line where leaves meet bulb -->
  <path d="M170 110 Q162 128 152 140" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <path d="M230 110 Q238 128 248 140" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <!-- Root tail -->
  <path d="M200 456 Q196 470 194 480" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <!-- Side root hairs -->
  <path d="M168 450 Q160 464 157 472" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <path d="M232 450 Q240 464 243 472" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <text x="200" y="476" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Radish</text>
</svg>`;
}

function asparagusSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <rect width="400" height="480" fill="white"/>
  <!-- 5 asparagus spears of varying heights -->
  <!-- Spear 1 (left, medium) -->
  <rect x="92" y="105" width="26" height="330" rx="10" fill="none" stroke="#111" stroke-width="7.5"/>
  <ellipse cx="105" cy="90" rx="16" ry="22" fill="none" stroke="#111" stroke-width="6"/>
  <path d="M105 118 Q91 128 89 144" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M105 118 Q119 128 121 144" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M105 152 Q91 162 89 178" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M105 152 Q119 162 121 178" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M105 188 Q91 198 89 214" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M105 188 Q119 198 121 214" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Spear 2 (tall) -->
  <rect x="143" y="70" width="26" height="365" rx="10" fill="none" stroke="#111" stroke-width="7.5"/>
  <ellipse cx="156" cy="55" rx="16" ry="22" fill="none" stroke="#111" stroke-width="6"/>
  <path d="M156 84 Q142 94 140 110" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 84 Q170 94 172 110" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 120 Q142 130 140 146" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 120 Q170 130 172 146" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 158 Q142 168 140 184" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 158 Q170 168 172 184" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 196 Q142 206 140 222" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M156 196 Q170 206 172 222" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Spear 3 (tallest, center) -->
  <rect x="188" y="52" width="26" height="383" rx="10" fill="none" stroke="#111" stroke-width="7.5"/>
  <ellipse cx="201" cy="37" rx="16" ry="22" fill="none" stroke="#111" stroke-width="6"/>
  <path d="M201 66 Q187 76 185 92" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 66 Q215 76 217 92" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 104 Q187 114 185 130" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 104 Q215 114 217 130" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 142 Q187 152 185 168" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 142 Q215 152 217 168" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 180 Q187 190 185 206" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M201 180 Q215 190 217 206" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Spear 4 -->
  <rect x="234" y="72" width="26" height="363" rx="10" fill="none" stroke="#111" stroke-width="7.5"/>
  <ellipse cx="247" cy="57" rx="16" ry="22" fill="none" stroke="#111" stroke-width="6"/>
  <path d="M247 86 Q233 96 231 112" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M247 86 Q261 96 263 112" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M247 122 Q233 132 231 148" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M247 122 Q261 132 263 148" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M247 160 Q233 170 231 186" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M247 160 Q261 170 263 186" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Spear 5 (right, shorter) -->
  <rect x="280" y="110" width="26" height="325" rx="10" fill="none" stroke="#111" stroke-width="7.5"/>
  <ellipse cx="293" cy="95" rx="16" ry="22" fill="none" stroke="#111" stroke-width="6"/>
  <path d="M293 124 Q279 134 277 150" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M293 124 Q307 134 309 150" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M293 162 Q279 172 277 188" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M293 162 Q307 172 309 188" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Rubber band / tie -->
  <rect x="82" y="416" width="236" height="25" rx="10" fill="none" stroke="#111" stroke-width="7.5"/>
  <text x="200" y="472" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Asparagus</text>
</svg>`;
}

function greenBeansSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440" width="440" height="440">
  <rect width="440" height="440" fill="white"/>
  <!-- Bean pod 1 - main large horizontal -->
  <path d="M54 188 Q74 154 120 150 Q240 136 360 150 Q406 154 426 188 Q446 224 432 258 Q416 298 368 294 Q244 278 120 294 Q76 298 56 258 Q38 222 54 188Z" fill="none" stroke="#111" stroke-width="9.5" stroke-linejoin="round"/>
  <!-- Bean bumps inside -->
  <circle cx="148" cy="222" r="22" fill="none" stroke="#111" stroke-width="5.5"/>
  <circle cx="208" cy="216" r="22" fill="none" stroke="#111" stroke-width="5.5"/>
  <circle cx="268" cy="214" r="22" fill="none" stroke="#111" stroke-width="5.5"/>
  <circle cx="328" cy="216" r="22" fill="none" stroke="#111" stroke-width="5.5"/>
  <circle cx="382" cy="222" r="20" fill="none" stroke="#111" stroke-width="5.5"/>
  <!-- Stem end left -->
  <path d="M54 188 Q36 148 44 136" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>
  <!-- Tip end right -->
  <path d="M426 188 Q448 148 436 134" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>
  <!-- Bean pod 2 - angled below -->
  <path d="M88 310 Q108 276 154 270 Q246 258 320 275 Q356 282 370 310 Q384 340 366 362 Q348 382 296 378 Q198 370 118 378 Q82 380 72 355 Q62 332 88 310Z" fill="none" stroke="#111" stroke-width="8.5" stroke-linejoin="round"/>
  <circle cx="156" cy="328" r="18" fill="none" stroke="#111" stroke-width="5"/>
  <circle cx="210" cy="322" r="18" fill="none" stroke="#111" stroke-width="5"/>
  <circle cx="264" cy="320" r="18" fill="none" stroke="#111" stroke-width="5"/>
  <circle cx="318" cy="322" r="18" fill="none" stroke="#111" stroke-width="5"/>
  <path d="M88 310 Q72 278 80 265" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <path d="M370 310 Q388 278 380 265" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <text x="220" y="434" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Green Beans</text>
</svg>`;
}

function peasSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440" width="440" height="440">
  <rect width="440" height="440" fill="white"/>
  <!-- Pea pod - large kidney shape -->
  <path d="M48 220 Q62 148 178 132 Q240 124 300 132 Q414 148 428 220 Q442 278 414 322 Q384 372 296 378 Q240 382 184 378 Q96 372 66 322 Q38 278 48 220Z" fill="none" stroke="#111" stroke-width="10" stroke-linejoin="round"/>
  <!-- 4 large pea circles inside -->
  <circle cx="138" cy="255" r="46" fill="none" stroke="#111" stroke-width="6.5"/>
  <circle cx="216" cy="246" r="46" fill="none" stroke="#111" stroke-width="6.5"/>
  <circle cx="294" cy="246" r="46" fill="none" stroke="#111" stroke-width="6.5"/>
  <circle cx="368" cy="255" r="42" fill="none" stroke="#111" stroke-width="6.5"/>
  <!-- Stem end left -->
  <path d="M48 220 Q28 172 36 156" fill="none" stroke="#111" stroke-width="7.5" stroke-linecap="round"/>
  <!-- Curling vine tip right (pointed end) -->
  <path d="M428 220 Q448 172 440 156" fill="none" stroke="#111" stroke-width="7.5" stroke-linecap="round"/>
  <!-- Top stem with leaf -->
  <path d="M240 124 Q238 98 252 82 Q248 98 268 88" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>
  <text x="220" y="432" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Peas</text>
</svg>`;
}

function zucchiniSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <rect width="400" height="480" fill="white"/>
  <!-- Zucchini body - large vertical oval -->
  <ellipse cx="200" cy="268" rx="96" ry="210" fill="none" stroke="#111" stroke-width="10"/>
  <!-- Blossom end at bottom -->
  <path d="M200 468 Q220 454 232 468 Q220 480 200 482 Q180 480 168 468 Q180 454 200 468Z" fill="none" stroke="#111" stroke-width="5.5" stroke-linejoin="round"/>
  <!-- Flower top (crown/calyx) -->
  <path d="M200 58 Q220 48 225 32 Q208 28 200 36 Q192 28 175 32 Q180 48 200 58Z" fill="none" stroke="#111" stroke-width="6.5" stroke-linejoin="round"/>
  <path d="M177 62 Q160 52 154 38" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <path d="M223 62 Q240 52 246 38" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>
  <!-- Stripe lines down the body -->
  <path d="M214 88 Q226 95 234 270 Q228 395 218 454" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <path d="M186 88 Q174 95 166 270 Q172 395 182 454" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <path d="M230 92 Q248 108 256 272 Q250 388 238 450" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <path d="M170 92 Q152 108 144 272 Q150 388 162 450" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
  <!-- Horizontal texture marks -->
  <path d="M116 180 Q200 170 284 180" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M106 242 Q200 232 294 242" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M106 304 Q200 294 294 304" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M114 366 Q200 356 286 366" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <text x="200" y="474" font-family="Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#444">Zucchini</text>
</svg>`;
}

function leekSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="215" y="230" width="70" height="215" rx="12" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <line x1="215" y1="265" x2="285" y2="265" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="295" x2="285" y2="295" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="325" x2="285" y2="325" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="355" x2="285" y2="355" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="385" x2="285" y2="385" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M215 230 Q205 200 215 100 Q218 55 230 30" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M250 230 Q250 200 250 120 Q250 70 258 40" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M285 230 Q295 200 285 100 Q282 55 270 30" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M200 230 Q185 200 195 90 Q198 50 212 25" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M300 230 Q315 200 305 90 Q302 50 288 25" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="472" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Leek</text>
</svg>`;
}

function celerySVG(): string {
  const stalks = [168,196,224,252,280,308,336];
  const stalkSVG = stalks.map((x,i) => {
    const h = 265 + (i<2 || i>4 ? -30 : 0);
    const y1 = 440-h;
    return `<path d="M${x} 440 Q${x+(i<3?-8:8)} ${y1+h/2} ${x} ${y1}" fill="none" stroke="#1a1a1a" stroke-width="${i===3?'4.5':'3.5'}"/>
  <path d="M${x} ${y1} Q${x+(i<3?-30:30)} ${y1-40} ${x+(i<3?-42:42)} ${y1-25}" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${stalkSVG}
  <path d="M145 440 Q250 450 355 440 Q355 455 250 462 Q145 455 145 440Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Celery</text>
</svg>`;
}

function sweetPotatoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M95 235 Q90 160 155 130 Q210 110 250 115 Q290 110 345 130 Q410 160 405 235 Q415 310 360 360 Q305 400 250 402 Q195 400 140 360 Q85 310 95 235Z" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <path d="M95 235 Q82 220 80 205" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M405 235 Q418 220 420 205" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M160 132 Q145 110 152 90" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M340 132 Q355 110 348 90" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M110 280 Q140 310 120 330" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M390 280 Q360 310 380 330" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M155 375 Q145 400 148 420" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M345 375 Q355 400 352 420" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M250 400 Q248 420 250 435" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="480" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Sweet Potato</text>
</svg>`;
}

// ════════════════════ MASTER TRACING SHEETS ════════════════════

function masterAlphabetTraceSVG(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const cols = 5, cellW = 140, cellH = 148, startY = 78;
  const cells = letters.map((L, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = col * cellW + cellW / 2;
    const cy = startY + row * cellH;
    return `<rect x="${col * cellW}" y="${cy}" width="${cellW}" height="${cellH}" fill="none" stroke="#e8e8e8" stroke-width="1"/>
  <line x1="${col * cellW + 8}" y1="${cy + cellH - 32}" x2="${col * cellW + cellW - 8}" y2="${cy + cellH - 32}" stroke="#d0d0d0" stroke-width="1" stroke-dasharray="4 5"/>
  <text x="${cx}" y="${cy + cellH - 36}" font-family="Arial Black, Arial, sans-serif" font-size="88" font-weight="900" text-anchor="middle" fill="#ececec">${L}</text>
  <text x="${cx}" y="${cy + cellH - 36}" font-family="Arial Black, Arial, sans-serif" font-size="88" font-weight="900" text-anchor="middle" fill="none" stroke="#aaaaaa" stroke-width="2" stroke-dasharray="6 5">${L}</text>
  <text x="${cx}" y="${cy + cellH - 10}" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#bbb">${L}</text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 970" width="700" height="970">
  <rect width="700" height="970" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="350" y="52" font-family="Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#1a1a2e">✏️  Ultimate Alphabet Trace  —  A to Z</text>
  ${cells}
  <text x="350" y="958" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#ccc">printpals.com  •  Free for classroom &amp; home use</text>
</svg>`;
}

function masterNumberTraceSVG(): string {
  const cols = 10, cellW = 88, cellH = 145, startY = 75;
  const cells = Array.from({length: 50}, (_, i) => {
    const n = i + 1;
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = col * cellW + cellW / 2;
    const cy = startY + row * cellH;
    const fs = n >= 10 ? 62 : 78;
    return `<rect x="${col * cellW}" y="${cy}" width="${cellW}" height="${cellH}" fill="none" stroke="#e8e8e8" stroke-width="1"/>
  <line x1="${col * cellW + 5}" y1="${cy + cellH - 30}" x2="${col * cellW + cellW - 5}" y2="${cy + cellH - 30}" stroke="#d0d0d0" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="${cx}" y="${cy + cellH - 34}" font-family="Arial Black, Arial, sans-serif" font-size="${fs}" font-weight="900" text-anchor="middle" fill="#eeeeee">${n}</text>
  <text x="${cx}" y="${cy + cellH - 34}" font-family="Arial Black, Arial, sans-serif" font-size="${fs}" font-weight="900" text-anchor="middle" fill="none" stroke="#aaaaaa" stroke-width="2" stroke-dasharray="5 4">${n}</text>
  <text x="${cx}" y="${cy + cellH - 9}" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#bbb">${n}</text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 825" width="880" height="825">
  <rect width="880" height="825" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="440" y="52" font-family="Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#1a1a2e">✏️  Number Master Trace  —  1 to 50</text>
  ${cells}
  <text x="440" y="815" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#ccc">printpals.com  •  Free for classroom &amp; home use</text>
</svg>`;
}

function masterShapeTraceSVG(): string {
  type ShapeDef = { name: string; svg: string };
  const shapes: ShapeDef[] = [
    { name: 'Circle',    svg: `<circle cx="88" cy="95" r="68" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Square',    svg: `<rect x="26" y="33" width="124" height="124" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Triangle',  svg: `<polygon points="88,18 168,155 8,155" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Rectangle', svg: `<rect x="10" y="55" width="156" height="90" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Oval',      svg: `<ellipse cx="88" cy="95" rx="80" ry="52" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Diamond',   svg: `<polygon points="88,14 168,95 88,176 8,95" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Pentagon',  svg: `<polygon points="88,14 166,70 138,158 38,158 10,70" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Hexagon',   svg: `<polygon points="88,10 162,52 162,136 88,178 14,136 14,52" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Star',      svg: `<polygon points="88,8 106,62 164,62 118,98 135,155 88,122 41,155 58,98 12,62 70,62" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Heart',     svg: `<path d="M88 160 C25 118 5 78 5 52 C5 28 22 12 44 12 C62 12 76 22 88 38 C100 22 114 12 132 12 C154 12 171 28 171 52 C171 78 151 118 88 160Z" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Arrow',     svg: `<path d="M8 82 L110 82 L110 42 L168 95 L110 148 L110 108 L8 108 Z" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Crescent',  svg: `<path d="M88 10 A75 75 0 1 0 88 165 A50 50 0 1 1 88 10Z" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
  ];
  const cols = 4, cellW = 175, cellH = 255, startY = 75;
  const cells = shapes.map((s, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const ox = col * cellW;
    const oy = startY + row * cellH;
    return `<rect x="${ox}" y="${oy}" width="${cellW}" height="${cellH}" fill="none" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="${ox+5}" y="${oy+5}" width="${s.name.length > 7 ? 165 : 165}" height="${cellH-10}" rx="12" fill="#fafafa" stroke="none"/>
  <g transform="translate(${ox + (cellW-176)/2}, ${oy + 30})">${s.svg}</g>
  <text x="${ox + cellW/2}" y="${oy + cellH - 20}" font-family="Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle" fill="#555">${s.name}</text>
  <text x="${ox + cellW/2}" y="${oy + cellH - 5}" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#bbb">trace the outline</text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 845" width="700" height="845">
  <rect width="700" height="845" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="350" y="52" font-family="Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#1a1a2e">✏️  Shape Master  —  Trace &amp; Learn</text>
  ${cells}
  <text x="350" y="836" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#ccc">printpals.com  •  Free for classroom &amp; home use</text>
</svg>`;
}

// ════════════════════ EXPORT ════════════════════

export const V3Library: PrintItem[] = [
  // ---- Vegetables ----
  { id:'veg-bell-pepper', category:'vegetables', title:'Bell Pepper', subtitle:'Sweet & colorful', tags:['bell pepper','capsicum','pepper','vegetable','colorful'],
    svgContent:bellPepperSVG(), traceText:'BELL PEPPER', description:'A sweet bell-shaped pepper with multiple lobes.' },
  { id:'veg-cucumber', category:'vegetables', title:'Cucumber', subtitle:'Cool & crisp', tags:['cucumber','green','vegetable','salad'],
    svgContent:cucumberSVG(), traceText:'CUCUMBER', description:'A long green cucumber with bumpy skin and fresh tips.' },
  { id:'veg-cauliflower', category:'vegetables', title:'Cauliflower', subtitle:'White florets', tags:['cauliflower','white','vegetable','florets'],
    svgContent:cauliflowerSVG(), traceText:'CAULIFLOWER', description:'A cloud-like head of white florets surrounded by green leaves.' },
  { id:'veg-eggplant', category:'vegetables', title:'Eggplant', subtitle:'Purple & glossy', tags:['eggplant','aubergine','purple','vegetable'],
    svgContent:eggplantSVG(), traceText:'EGGPLANT', description:'A deep purple glossy eggplant with a green star-shaped calyx.' },
  { id:'veg-mushroom', category:'vegetables', title:'Mushroom', subtitle:'Umbrella cap', tags:['mushroom','fungi','umbrella','vegetable'],
    svgContent:mushroomSVG(), traceText:'MUSHROOM', description:'A classic mushroom with wide umbrella cap and cylindrical stem.' },
  { id:'veg-garlic', category:'vegetables', title:'Garlic', subtitle:'Bulb & cloves', tags:['garlic','cloves','bulb','vegetable','herb'],
    svgContent:garlicSVG(), traceText:'GARLIC', description:'A garlic bulb showing cloves wrapped in papery skin.' },
  { id:'veg-pumpkin', category:'vegetables', title:'Pumpkin', subtitle:'Autumn harvest', tags:['pumpkin','autumn','halloween','vegetable','squash'],
    svgContent:pumpkinSVG(), traceText:'PUMPKIN', description:'A round pumpkin with five segments and a curly stem.' },
  { id:'veg-radish', category:'vegetables', title:'Radish', subtitle:'Round & red', tags:['radish','red','root','vegetable'],
    svgContent:radishSVG(), traceText:'RADISH', description:'A bright round radish with leaves and a thin taproot.' },
  { id:'veg-asparagus', category:'vegetables', title:'Asparagus', subtitle:'Fresh spears', tags:['asparagus','spear','green','vegetable'],
    svgContent:asparagusSVG(), traceText:'ASPARAGUS', description:'A bundle of fresh asparagus spears with scaly tips.' },
  { id:'veg-green-beans', category:'vegetables', title:'Green Beans', subtitle:'Pod & seeds', tags:['green beans','string beans','pod','vegetable'],
    svgContent:greenBeansSVG(), traceText:'GREEN BEANS', description:'A curved green bean pod with visible seeds inside.' },
  { id:'veg-peas', category:'vegetables', title:'Peas', subtitle:'Round in a pod', tags:['peas','pod','green','vegetable','round'],
    svgContent:peasSVG(), traceText:'PEAS', description:'A plump pea pod showing four round peas inside.' },
  { id:'veg-zucchini', category:'vegetables', title:'Zucchini', subtitle:'Summer squash', tags:['zucchini','courgette','squash','vegetable','green'],
    svgContent:zucchiniSVG(), traceText:'ZUCCHINI', description:'A long ribbed zucchini with a flower end and short stem.' },
  { id:'veg-leek', category:'vegetables', title:'Leek', subtitle:'White & green', tags:['leek','allium','white','green','vegetable'],
    svgContent:leekSVG(), traceText:'LEEK', description:'A tall leek with white cylindrical base and long flat green leaves.' },
  { id:'veg-celery', category:'vegetables', title:'Celery', subtitle:'Crunchy stalks', tags:['celery','stalk','green','vegetable','crunchy'],
    svgContent:celerySVG(), traceText:'CELERY', description:'A bunch of celery stalks with leafy tops and joined base.' },
  { id:'veg-sweet-potato', category:'vegetables', title:'Sweet Potato', subtitle:'Orange & sweet', tags:['sweet potato','yam','orange','vegetable','root'],
    svgContent:sweetPotatoSVG(), traceText:'SWEET POTATO', description:'A plump sweet potato with root tendrils and bumpy skin.' },
  // ---- Master Tracing Sheets ----
  { id:'master-alphabet-trace', category:'master', title:'Ultimate Alphabet Trace', subtitle:'A–Z all 26 letters', tags:['alphabet','trace','tracing','A-Z','letters','master','dotted'],
    svgContent:masterAlphabetTraceSVG(), traceText:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    description:'All 26 letters A–Z in dashed outline format on one A4 page — perfect for tracing practice.' },
  { id:'master-number-trace', category:'master', title:'Number Master Trace', subtitle:'1–50 all on one page', tags:['numbers','trace','tracing','1-50','counting','master','dotted'],
    svgContent:masterNumberTraceSVG(), traceText:'1 2 3 4 5 6 7 8 9 10 11 12 ... 50',
    description:'Numbers 1 to 50 in dashed outline format — trace each number to master writing them.' },
  { id:'master-shape-trace', category:'master', title:'Shape Master Trace', subtitle:'12 shapes to trace', tags:['shapes','trace','tracing','geometry','circle','square','master'],
    svgContent:masterShapeTraceSVG(), traceText:'CIRCLE SQUARE TRIANGLE RECTANGLE OVAL DIAMOND PENTAGON HEXAGON STAR HEART ARROW CRESCENT',
    description:'All 12 key geometric shapes in dashed outline format on one A4 page — trace and learn their names.' },
];
