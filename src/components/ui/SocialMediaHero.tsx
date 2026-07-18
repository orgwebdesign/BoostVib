"use client";

export function SocialMediaHero() {
  return (
    <div className="relative w-full aspect-[5/6] max-w-[480px]">
      <div className="absolute inset-0 bg-[#22C55E]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "4s" }} />

      <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 drop-shadow-[0_0_40px_rgba(34,197,94,0.15)]">
        <defs>
          <filter id="coin-shadow" x="-30%" y="-20%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.3" />
          </filter>
          <filter id="smoke-blur"><feGaussianBlur stdDeviation="12" /></filter>
          <filter id="smoke-blur-sm"><feGaussianBlur stdDeviation="8" /></filter>

          <linearGradient id="cyl-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4ADE80" /><stop offset="0.3" stopColor="#22C55E" /><stop offset="0.7" stopColor="#16A34A" /><stop offset="1" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="cyl-body-rev" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#4ADE80" /><stop offset="0.3" stopColor="#22C55E" /><stop offset="0.7" stopColor="#16A34A" /><stop offset="1" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="cyl-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#86EFAC" /><stop offset="1" stopColor="#4ADE80" />
          </linearGradient>
          <linearGradient id="cyl-btm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22C55E" /><stop offset="1" stopColor="#15803D" />
          </linearGradient>
          <radialGradient id="pipe-glow" cx="50%" cy="50%">
            <stop offset="0" stopColor="#86EFAC" stopOpacity="0.6" /><stop offset="0.6" stopColor="#22C55E" stopOpacity="0.2" /><stop offset="1" stopColor="#22C55E" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="coin-ig" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F58529" /><stop offset="0.3" stopColor="#DD2A7B" /><stop offset="0.7" stopColor="#8134AF" /><stop offset="1" stopColor="#515BD4" />
          </linearGradient>
          <linearGradient id="coin-yt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF0000" /><stop offset="1" stopColor="#CC0000" />
          </linearGradient>
          <linearGradient id="coin-wa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#25D366" /><stop offset="1" stopColor="#128C7E" />
          </linearGradient>
          <linearGradient id="coin-li" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0A66C2" /><stop offset="1" stopColor="#004182" />
          </linearGradient>
          <linearGradient id="coin-spot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1ED760" /><stop offset="1" stopColor="#158F3C" />
          </linearGradient>
          <linearGradient id="coin-twitch" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9146FF" /><stop offset="1" stopColor="#6441A5" />
          </linearGradient>
          <linearGradient id="coin-sc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF5500" /><stop offset="1" stopColor="#FF8800" />
          </linearGradient>
          <linearGradient id="coin-kick" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#53F32B" /><stop offset="1" stopColor="#2CC610" />
          </linearGradient>
          <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0.4" /><stop offset="0.5" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* TOP CYLINDER */}
        <g>
          <g opacity="0.5">
            <circle cx="230" cy="115" r="28" fill="#86EFAC" filter="url(#smoke-blur)">
              <animate attributeName="cy" values="115;85;115" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.12;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="105" r="22" fill="#bbf7d0" filter="url(#smoke-blur)">
              <animate attributeName="cy" values="105;70;105" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0.08;0.35" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="95" r="32" fill="#86EFAC" filter="url(#smoke-blur)">
              <animate attributeName="cy" values="95;55;95" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.06;0.3" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="210" cy="100" r="18" fill="#d9f99d" filter="url(#smoke-blur-sm)">
              <animate attributeName="cy" values="100;65;100" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="290" cy="108" r="20" fill="#bbf7d0" filter="url(#smoke-blur-sm)">
              <animate attributeName="cy" values="108;72;108" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0.06;0.25" dur="4.2s" repeatCount="indefinite" />
            </circle>
          </g>
          <rect x="180" y="120" width="140" height="50" fill="url(#cyl-body)" />
          <ellipse cx="250" cy="120" rx="70" ry="25" fill="url(#cyl-top)" />
          <ellipse cx="250" cy="120" rx="60" ry="20" fill="url(#pipe-glow)" />
          <ellipse cx="250" cy="120" rx="70" ry="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <ellipse cx="250" cy="170" rx="70" ry="25" fill="url(#cyl-btm)" />
        </g>

        {/* FLOWING COINS - emerge from top cylinder, fall slowly into bottom cylinder */}
        {/* Instagram */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="20,-155;25,-80;15,0;10,80;5,155;0,215" keyTimes="0;0.15;0.4;0.65;0.85;1" dur="7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="7s" repeatCount="indefinite" />
          <ellipse cx="120" cy="308" rx="28" ry="10" fill="#515BD4" opacity="0.5" />
          <rect x="92" y="298" width="56" height="10" fill="#515BD4" opacity="0.35" />
          <ellipse cx="120" cy="294" rx="28" ry="28" fill="url(#coin-ig)" />
          <ellipse cx="120" cy="294" rx="28" ry="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="110" cy="284" rx="14" ry="14" fill="url(#shimmer)" opacity="0.5" />
          <rect x="106" y="280" width="28" height="28" rx="8" fill="none" stroke="white" strokeWidth="2.5" />
          <circle cx="120" cy="294" r="8" fill="none" stroke="white" strokeWidth="2.5" />
          <circle cx="131" cy="284" r="2.5" fill="white" />
        </g>

        {/* YouTube */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="-20,-145;-15,-70;-10,0;-15,70;-20,145;-10,215" keyTimes="0;0.15;0.4;0.65;0.85;1" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="8s" repeatCount="indefinite" />
          <ellipse cx="380" cy="298" rx="26" ry="9" fill="#CC0000" opacity="0.5" />
          <rect x="354" y="289" width="52" height="9" fill="#CC0000" opacity="0.35" />
          <ellipse cx="380" cy="280" rx="26" ry="26" fill="url(#coin-yt)" />
          <ellipse cx="380" cy="280" rx="26" ry="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="371" cy="271" rx="13" ry="13" fill="url(#shimmer)" opacity="0.5" />
          <polygon points="372,271 372,289 390,280" fill="white" />
        </g>

        {/* WhatsApp */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="30,-160;20,-85;10,-5;0,75;-10,150;-15,220" keyTimes="0;0.15;0.38;0.62;0.85;1" dur="9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="9s" repeatCount="indefinite" />
          <ellipse cx="170" cy="350" rx="24" ry="8.5" fill="#128C7E" opacity="0.5" />
          <rect x="146" y="341.5" width="48" height="8.5" fill="#128C7E" opacity="0.35" />
          <ellipse cx="170" cy="333" rx="24" ry="24" fill="url(#coin-wa)" />
          <ellipse cx="170" cy="333" rx="24" ry="24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="162" cy="325" rx="12" ry="12" fill="url(#shimmer)" opacity="0.5" />
          <path d="M162,325C162,321 165,319 168,319L172,319C175,319 178,321 178,325L178,341C178,345 175,347 172,347L168,347C165,347 162,345 162,341Z" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="170" cy="340" r="1.5" fill="white" />
        </g>

        {/* LinkedIn */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="-25,-150;-20,-75;-10,-5;5,65;15,140;10,205" keyTimes="0;0.15;0.38;0.62;0.85;1" dur="7.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="7.5s" repeatCount="indefinite" />
          <ellipse cx="340" cy="345" rx="25" ry="9" fill="#004182" opacity="0.5" />
          <rect x="315" y="336" width="50" height="9" fill="#004182" opacity="0.35" />
          <ellipse cx="340" cy="327" rx="25" ry="25" fill="url(#coin-li)" />
          <ellipse cx="340" cy="327" rx="25" ry="25" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="332" cy="319" rx="12.5" ry="12.5" fill="url(#shimmer)" opacity="0.5" />
          <rect x="330" y="321" width="4" height="14" rx="1" fill="white" />
          <circle cx="332" cy="317" r="2.5" fill="white" />
          <rect x="337" y="321" width="10" height="2" rx="1" fill="white" />
          <path d="M337,327L337,335" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Spotify */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="15,-170;10,-95;5,-15;0,60;-5,135;-10,195" keyTimes="0;0.15;0.38;0.62;0.85;1" dur="8.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="8.5s" repeatCount="indefinite" />
          <ellipse cx="130" cy="440" rx="22" ry="8" fill="#158F3C" opacity="0.5" />
          <rect x="108" y="432" width="44" height="8" fill="#158F3C" opacity="0.35" />
          <ellipse cx="130" cy="422" rx="22" ry="22" fill="url(#coin-spot)" />
          <ellipse cx="130" cy="422" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="123" cy="415" rx="11" ry="11" fill="url(#shimmer)" opacity="0.5" />
          <path d="M120,418Q130,412 140,418" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M122,424Q130,419 138,424" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M124,429Q130,425 136,429" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Twitch */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="-15,-155;-10,-80;-5,-10;0,60;5,135;10,200" keyTimes="0;0.15;0.38;0.62;0.85;1" dur="9.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="9.5s" repeatCount="indefinite" />
          <ellipse cx="390" cy="425" rx="23" ry="8" fill="#6441A5" opacity="0.5" />
          <rect x="367" y="417" width="46" height="8" fill="#6441A5" opacity="0.35" />
          <ellipse cx="390" cy="407" rx="23" ry="23" fill="url(#coin-twitch)" />
          <ellipse cx="390" cy="407" rx="23" ry="23" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="383" cy="400" rx="11.5" ry="11.5" fill="url(#shimmer)" opacity="0.5" />
          <path d="M382,399L382,413L386,413L390,417L390,413L400,413L400,403L382,403Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <rect x="386" y="405" width="3" height="5" rx="1.5" fill="white" />
          <rect x="392" y="405" width="3" height="5" rx="1.5" fill="white" />
        </g>

        {/* SoundCloud */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="25,-165;15,-90;5,-10;-5,70;-10,145;-5,210" keyTimes="0;0.15;0.38;0.62;0.85;1" dur="10s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="10s" repeatCount="indefinite" />
          <ellipse cx="260" cy="378" rx="21" ry="7.5" fill="#CC4400" opacity="0.5" />
          <rect x="239" y="370.5" width="42" height="7.5" fill="#CC4400" opacity="0.35" />
          <ellipse cx="260" cy="358" rx="21" ry="21" fill="url(#coin-sc)" />
          <ellipse cx="260" cy="358" rx="21" ry="21" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="253" cy="351" rx="10.5" ry="10.5" fill="url(#shimmer)" opacity="0.5" />
          <path d="M248,356Q248,350 254,350Q254,344 260,346Q264,344 268,348Q274,348 274,354Q276,354 276,358Q276,362 272,362L250,362Q246,362 246,358Q246,356 248,356Z" fill="white" />
        </g>

        {/* Kick */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="-10,-148;-5,-73;0,-3;5,67;10,142;5,212" keyTimes="0;0.15;0.38;0.62;0.85;1" dur="6.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;1;1;0.3;0" keyTimes="0;0.1;0.2;0.75;0.9;1" dur="6.5s" repeatCount="indefinite" />
          <ellipse cx="220" cy="290" rx="20" ry="7" fill="#1F9B0D" opacity="0.5" />
          <rect x="200" y="283" width="40" height="7" fill="#1F9B0D" opacity="0.35" />
          <ellipse cx="220" cy="273" rx="20" ry="20" fill="url(#coin-kick)" />
          <ellipse cx="220" cy="273" rx="20" ry="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="213" cy="266" rx="10" ry="10" fill="url(#shimmer)" opacity="0.5" />
          <path d="M215,265L215,283M215,275L225,265M215,275L225,283" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* BOTTOM CYLINDER (in front of coins) */}
        <g>
          <ellipse cx="250" cy="490" rx="70" ry="25" fill="url(#cyl-top)" />
          <ellipse cx="250" cy="490" rx="60" ry="20" fill="url(#pipe-glow)" />
          <rect x="180" y="490" width="140" height="50" fill="url(#cyl-body-rev)" />
          <ellipse cx="250" cy="540" rx="70" ry="25" fill="url(#cyl-btm)" />
          <ellipse cx="250" cy="490" rx="70" ry="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        </g>

        {/* DECORATIVE PARTICLES */}
        <circle cx="95" cy="200" r="2.5" fill="#22C55E" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="420" cy="190" r="2" fill="#86EFAC" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="380" r="2" fill="#4ADE80" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="435" cy="310" r="2.5" fill="#bbf7d0" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <g opacity="0.3">
          <line x1="75" y1="155" x2="82" y2="162" stroke="#86EFAC" strokeWidth="1" />
          <line x1="82" y1="155" x2="75" y2="162" stroke="#86EFAC" strokeWidth="1" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </g>
        <g opacity="0.25">
          <line x1="425" y1="455" x2="432" y2="462" stroke="#4ADE80" strokeWidth="1" />
          <line x1="432" y1="455" x2="425" y2="462" stroke="#4ADE80" strokeWidth="1" />
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="2.5s" repeatCount="indefinite" />
        </g>
      </svg>
    </div>
  );
}
