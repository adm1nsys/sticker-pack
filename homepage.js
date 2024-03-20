body = document.body;
body.style.background = "black";
body.style.alignItems = "center";
body.style.alignContent = "center";
body.style.justifyItems = "start";
body.style.justifyContent = "start";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.margin = "0px";

const homepage1page = document.createElement("div");
homepage1page.style.display = "flex";
homepage1page.style.flexDirection = "column";
homepage1page.style.fontFamily = "Roboto-Thin";
homepage1page.style.fontSize = "500%";
homepage1page.style.width = "100%";
homepage1page.style.height = "100vh";
homepage1page.style.position = "relative";
homepage1page.style.color = "white";
homepage1page.style.alignItems = "center";
homepage1page.style.alignContent = "center";
homepage1page.style.justifyItems = "center";
homepage1page.style.justifyContent = "center";
homepage1page.style.transition = "4s";
homepage1page.style.background = "linear-gradient(0deg, #000 0%, #9e00ff 100%)";


document.body.appendChild(homepage1page);




function getFontSizeRelativeToWindow1(baseSize) {
    return (window.innerWidth * baseSize / 1000);
}

const homepage1paget = document.createElement("div");
homepage1paget.textContent = "sticker-pack";
homepage1paget.style.fontSize = getFontSizeRelativeToWindow(55, 55, 200);
homepage1page.appendChild(homepage1paget);

const homepage1paget1 = document.createElement("div");
homepage1paget1.textContent = "The best sticker pack ever made!";
homepage1paget1.style.fontSize = getFontSizeRelativeToWindow(13, 13, 200);
homepage1paget1.style.opacity = "0.5";
homepage1page.appendChild(homepage1paget1);


const homepage1pageb0 = document.createElement("div");
homepage1pageb0.style.border = "2px solid white";
homepage1pageb0.style.fontSize = "20px"
homepage1pageb0.style.padding = "10px"
homepage1pageb0.style.marginTop = "20px"
homepage1pageb0.style.display = "flex"
homepage1pageb0.style.flexDirection = "row"
homepage1pageb0.style.transition = "1s"
homepage1page.appendChild(homepage1pageb0);

homepage1pageb0.addEventListener('mouseover', function() {
    homepage1pageb0.style.opacity = "0,5";
homepage1pageb0.style.textDecoration = "underline";
homepage1pageb0.style.cursor = "pointer";
homepage1pageb0.style.background = "rgba(255, 255, 255, 0.2)";
});
homepage1pageb0.addEventListener('mouseout', function() {
    homepage1pageb0.style.opacity = "1";
homepage1pageb0.style.textDecoration = "none";
homepage1pageb0.style.cursor = "normal";

homepage1pageb0.style.background = "rgba(255, 255, 255, 0)";
});
homepage1pageb0.addEventListener('mousedown', function() {
    homepage1pageb0.style.opacity = "0.3";
});
homepage1pageb0.addEventListener('mouseup', function() {
       homepage1pageb0.style.opacity = "1";

});


function syslogo() {


if (navigator.userAgent.indexOf("Mac") !== -1) {
	homepage1pageb0.addEventListener('click', function() {
    window.location.href = macv;
});
	const leftBarC0 = document.createElement("div");
leftBarC0.style.display = "flex";
leftBarC0.style.flexDirection = "column";
leftBarC0.style.height = "21px";
leftBarC0.style.width = "21px";
leftBarC0.style.position = "relative";
leftBarC0.style.zIndex = "999";
homepage1pageb0.appendChild(leftBarC0);
const svglogo = `
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
  <g clip-path="url(#clip0_1_12)">
    <path d="M12 10H137L126.244 35.6829C117.102 57.5109 110.07 80.1635 105.244 103.331L101.254 122.48C100.607 125.585 102.977 128.5 106.149 128.5H119C122.314 128.5 125 131.186 125 134.5V165.836C125 180.233 126.619 194.584 129.827 208.619L137 240H12V10Z" fill="white"/>
    <rect x="6.5" y="6.5" width="237" height="237" rx="27.5" stroke="white" stroke-width="13"/>
  </g>
  <defs>
    <clipPath id="clip0_1_12">
      <rect width="250" height="250" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;
const svglogoc = document.createElement('div');
svglogoc.innerHTML = svglogo;

const svglogoelement = svglogoc.querySelector('svg');
svglogoelement.style.marginLeft = '0px';
svglogoelement.style.marginTop = '2px';
svglogoelement.style.width = '20px';
svglogoelement.style.height = '20px';
svglogoelement.style.position = 'absolute';
leftBarC0.appendChild(svglogoc);
const homepage1pageb0t0 = document.createElement("div");
homepage1pageb0t0.textContent = "Download";
homepage1pageb0t0.style.fontFamily = "Roboto-Regular"
homepage1pageb0t0.style.fontSize = "20px"
homepage1pageb0t0.style.marginLeft = "5px"
homepage1pageb0.appendChild(homepage1pageb0t0);
} else if (navigator.userAgent.indexOf("Win") !== -1) {
	homepage1pageb0.addEventListener('click', function() {
    window.location.href = winv;
});
	const leftBarC0 = document.createElement("div");
leftBarC0.style.display = "flex";
leftBarC0.style.flexDirection = "column";
leftBarC0.style.height = "21px";
leftBarC0.style.width = "21px";
leftBarC0.style.position = "relative";
leftBarC0.style.zIndex = "999";
homepage1pageb0.appendChild(leftBarC0);
const svglogo = `
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
  <g clip-path="url(#clip0_1_21)">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" fill="white"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" fill="url(#paint0_linear_1_21)" fill-opacity="0.43"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" stroke="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_1_21" x1="-3.5" y1="250" x2="250" y2="-2.3609e-06" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="clip0_1_21">
      <rect width="250" height="250" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;
const svglogoc = document.createElement('div');
svglogoc.innerHTML = svglogo;
const svglogoelement = svglogoc.querySelector('svg');
svglogoelement.style.marginLeft = '0px';
svglogoelement.style.marginTop = '2px';
svglogoelement.style.width = '20px';
svglogoelement.style.height = '20px';
svglogoelement.style.position = 'absolute';
leftBarC0.appendChild(svglogoc);
const homepage1pageb0t0 = document.createElement("div");
homepage1pageb0t0.textContent = "Pre-release";
homepage1pageb0t0.style.fontFamily = "Roboto-Regular"
homepage1pageb0t0.style.fontSize = "20px"
homepage1pageb0t0.style.marginLeft = "5px"
homepage1pageb0.appendChild(homepage1pageb0t0);
} else if (navigator.userAgent.indexOf("Linux") !== -1) {
	homepage1pageb0.addEventListener('click', function() {
    window.location.href = linv;
});
	const leftBarC0 = document.createElement("div");
leftBarC0.style.display = "flex";
leftBarC0.style.flexDirection = "column";
leftBarC0.style.height = "21px";
leftBarC0.style.width = "21px";
leftBarC0.style.position = "relative";
leftBarC0.style.zIndex = "999";
homepage1pageb0.appendChild(leftBarC0);
const svglogo = `
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
  <g clip-path="url(#clip0_1_21)">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" fill="white"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" fill="url(#paint0_linear_1_21)" fill-opacity="0.43"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" stroke="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_1_21" x1="-3.5" y1="250" x2="250" y2="-2.3609e-06" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="clip0_1_21">
      <rect width="250" height="250" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;
const svglogoc = document.createElement('div');
svglogoc.innerHTML = svglogo;

const svglogoelement = svglogoc.querySelector('svg');
svglogoelement.style.marginLeft = '0px';
svglogoelement.style.marginTop = '2px';
svglogoelement.style.width = '20px';
svglogoelement.style.height = '20px';
svglogoelement.style.position = 'absolute';
leftBarC0.appendChild(svglogoc);
const homepage1pageb0t0 = document.createElement("div");
homepage1pageb0t0.textContent = "Download";
homepage1pageb0t0.style.fontFamily = "Roboto-Regular"
homepage1pageb0t0.style.fontSize = "20px"
homepage1pageb0t0.style.marginLeft = "5px"
homepage1pageb0.appendChild(homepage1pageb0t0);
} else {
		homepage1pageb0.addEventListener('click', function() {
    window.location.href = othv;
});
	const leftBarC0 = document.createElement("div");
leftBarC0.style.display = "flex";
leftBarC0.style.flexDirection = "column";
leftBarC0.style.height = "21px";
leftBarC0.style.width = "21px";
leftBarC0.style.position = "relative";
leftBarC0.style.zIndex = "999";
homepage1pageb0.appendChild(leftBarC0);
const svglogo = `
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
  <g clip-path="url(#clip0_1_21)">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" fill="white"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" fill="url(#paint0_linear_1_21)" fill-opacity="0.43"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H109C115.627 0 121 5.37258 121 12V109C121 115.627 115.627 121 109 121H12C5.37258 121 0 115.627 0 109V12ZM129 12C129 5.37258 134.373 0 141 0H238C244.627 0 250 5.37258 250 12V109C250 115.627 244.627 121 238 121H141C134.373 121 129 115.627 129 109V12ZM141 129C134.373 129 129 134.373 129 141V238C129 244.627 134.373 250 141 250H238C244.627 250 250 244.627 250 238V141C250 134.373 244.627 129 238 129H141ZM0 141C0 134.373 5.37258 129 12 129H109C115.627 129 121 134.373 121 141V238C121 244.627 115.627 250 109 250H12C5.37258 250 0 244.627 0 238V141Z" stroke="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_1_21" x1="-3.5" y1="250" x2="250" y2="-2.3609e-06" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="clip0_1_21">
      <rect width="250" height="250" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;
const svglogoc = document.createElement('div');
svglogoc.innerHTML = svglogo;

const svglogoelement = svglogoc.querySelector('svg');
svglogoelement.style.marginLeft = '0px';
svglogoelement.style.marginTop = '2px';
svglogoelement.style.width = '20px';
svglogoelement.style.height = '20px';
svglogoelement.style.position = 'absolute';
svglogoelement.style.fill = 'white';
leftBarC0.appendChild(svglogoc);
const homepage1pageb0t0 = document.createElement("div");
homepage1pageb0t0.textContent = "Download";
homepage1pageb0t0.style.fontSize = "20px"
homepage1pageb0t0.style.fontFamily = "Roboto-Regular"
homepage1pageb0t0.style.marginLeft = "5px"
homepage1pageb0.appendChild(homepage1pageb0t0);
}

}

syslogo()





var btn = document.createElement("a");
btn.textContent = "Go to GitHub repo";
btn.style.position = "absolute";
btn.style.bottom = "10px";
btn.style.fontSize = getFontSizeRelativeToWindow(15, 15, 200);
btn.style.color = "white";
btn.style.opacity = "0.5";
btn.style.textDecoration = "none";
btn.style.transition = "1s";

btn.addEventListener('click', function() {
    window.location.href = "https://github.com/adm1nsys/sticker-pack";
});

btn.addEventListener('mouseover', function() {
    btn.style.opacity = "1";
btn.style.textDecoration = "underline";
btn.style.cursor = "pointer";
});

btn.addEventListener('mouseout', function() {
    btn.style.opacity = "0.5";
btn.style.textDecoration = "none";
btn.style.cursor = "normal";

});

btn.addEventListener('mousedown', function() {
    btn.style.opacity = "0.3";
});

btn.addEventListener('mouseup', function() {
       btn.style.opacity = "1";

});

homepage1page.appendChild(btn);

var btn1 = document.createElement("a");
btn1.textContent = "Go to Admin inc.";
btn1.style.position = "relative";
btn1.style.fontFamily = "Roboto-Thin";
btn1.style.bottom = "10px";
btn1.style.fontSize = getFontSizeRelativeToWindow(15, 15, 200);
btn1.style.color = "white";
btn1.style.opacity = "0.5";
btn1.style.textDecoration = "none";
btn1.style.marginTop = "10px";
btn1.style.transition = "1s";

btn1.addEventListener('click', function() {
    window.location.href = "https://adm1nsys.github.io/inc/";
});

btn1.addEventListener('mouseover', function() {
    btn1.style.opacity = "1";
btn1.style.textDecoration = "underline";
btn1.style.cursor = "pointer";
});

btn1.addEventListener('mouseout', function() {
    btn1.style.opacity = "0.5";
btn1.style.textDecoration = "none";
btn1.style.cursor = "normal";

});

btn1.addEventListener('mousedown', function() {
    btn1.style.opacity = "0.3";
});

btn1.addEventListener('mouseup', function() {
       btn1.style.opacity = "1";

});
document.body.appendChild(btn1);

var footer = document.createElement("div");
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.background = "black";
footer.style.alignItems = "center";
footer.style.alignContent = "center";
footer.style.justifyItems = "center";
footer.style.justifyContent = "center";
footer.style.display = "flex";
footer.style.fontSize = getFontSizeRelativeToWindow(15, 15, 200);
footer.style.fontFamily = "Roboto-Thin";
footer.style.color = "#9e00ff";
document.body.appendChild(footer);
function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}

function updateYear() {
  const currentYear = getCurrentYear();
  var footert = document.createElement("div");
  footert.textContent = `© Copyright By sticker-pack 2023 - ${currentYear}`;

  footer.appendChild(footert);
}

updateYear();
