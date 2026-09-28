export default function TreatmentVisual() {
  return (
    <figure className="treatment-visual" aria-label="Conceptual process: hazardous gas enters a VUV chamber, pollutants break down, and treated gas exits.">
      <div className="visual-heading">
        <span><i /> ASTRA / TREATMENT SYSTEM</span>
        <span>VUV</span>
      </div>
      <svg viewBox="0 0 600 380" className="chamber-diagram" role="img" aria-label="VUV treatment chamber with gas inlet on the left and clean gas outlet on the right">
        <defs>
          <linearGradient id="chamber-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#294a44" /><stop offset="1" stopColor="#102a25" /></linearGradient>
          <linearGradient id="vuv-light"><stop stopColor="#b5e8be" stopOpacity="0" /><stop offset=".5" stopColor="#b5e8be" stopOpacity=".3" /><stop offset="1" stopColor="#b5e8be" stopOpacity="0" /></linearGradient>
          <pattern id="engineering-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0v24" fill="none" stroke="#b9d3c7" strokeOpacity=".08" /></pattern>
        </defs>
        <path fill="url(#engineering-grid)" d="M0 0h600v380H0z" />
        <g fill="none" stroke="#71998c" strokeWidth="1"><path d="M24 201h130m294 0h128M24 230h130m294 0h128" /><path strokeDasharray="4 5" opacity=".5" d="M20 216h560M300 50v288" /><path d="M167 301h269l44-28M167 310v-18m269 18v-18" /></g>
        <path d="m151 155 42-44h251l-42 44Z" fill="#32574e" stroke="#6c9486" />
        <path d="m402 155 42-44v136l-42 44Z" fill="#183b32" stroke="#6c9486" />
        <rect x="151" y="155" width="251" height="136" rx="3" fill="url(#chamber-fill)" stroke="#86a99a" />
        <rect x="171" y="174" width="211" height="86" rx="3" fill="#102720" stroke="#527e68" />
        <g className="vuv-glow"><rect x="184" y="180" width="183" height="72" fill="url(#vuv-light)" />{[192, 224, 256, 288, 320, 352].map(x => <g key={x}><path d={`M${x} 188v55`} stroke="#a6e2ad" strokeWidth="3" /><path d={`M${x} 188v55`} stroke="#caffcd" strokeOpacity=".12" strokeWidth="13" /></g>)}</g>
        <g fill="#a8c4b6"><circle cx="160" cy="164" r="2" /><circle cx="393" cy="164" r="2" /><circle cx="160" cy="282" r="2" /><circle cx="393" cy="282" r="2" /></g>
        <text x="174" y="280" fill="#cee4d8" fontSize="11" letterSpacing="3">ASTRA</text><circle cx="367" cy="276" r="3" fill="#b9ecac" />
        <g fill="none" stroke="#9fc3b1"><path d="M242 112V67h70M348 263v65h63M482 204V139h47" /></g>
        <g fill="#d6e6dc" fontSize="11"><text x="243" y="55">VUV TECHNOLOGY</text><text x="354" y="349">POLLUTANT BREAKDOWN</text><text x="470" y="123">CLEAN GAS OUTLET</text></g>
        <text x="23" y="181" fill="#cbb7a1" fontSize="10" letterSpacing="1">GAS INLET</text>
        <g className="inlet-particles" fill="#d3ab81"><circle cx="39" cy="213" r="4" /><circle cx="72" cy="221" r="3" /><circle cx="103" cy="210" r="4" /><circle cx="131" cy="221" r="2" /></g>
        <g className="outlet-particles" fill="#b9ecac"><circle cx="469" cy="214" r="2" /><circle cx="491" cy="220" r="2" /><circle cx="517" cy="214" r="2" /><circle cx="543" cy="220" r="2" /></g>
      </svg>
      <figcaption className="visual-process"><span>Hazardous gas</span><b>→</b><span>VUV treatment</span><b>→</b><span>Cleaner gas</span></figcaption>
      <p className="visual-note">Conceptual treatment process · Not to scale</p>
    </figure>
  );
}
