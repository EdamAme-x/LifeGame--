export default function Draw(Stage) {
  let html = `
    
  `;

  for (let i = 0; i < Stage.length; i++) {
    html += `<div id="flexBox">`;
    for (let k = 0; k < Stage.length; k++) {
      html += `<div id="State-${Stage[i][k]}"></div>`;
    }
    html += `</div>`;
  }

  document.getElementById('app').innerHTML = html;
}
