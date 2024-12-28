export function downloadSVG(element: Element, fileName:string, convertToPNG = false, scaling = 1) {
  console.log("a")
  let svgCode = (new XMLSerializer()).serializeToString(element);
  const viewBoundaries = parseFloat((element as HTMLElement).dataset.viewBoundaries ?? "0") * scaling
  svgCode.replaceAll("viewBox", `width="${viewBoundaries * 2}" height="${viewBoundaries * 2}" viewBox`) // injecting width and height

  const svgBlob = new Blob([svgCode], {
    type: 'image/svg+xml;charset=utf-8'
  });
  const url = URL.createObjectURL(svgBlob);

  if (convertToPNG) {
    const img = new Image();
    img.addEventListener('load', () => {
      
      const canvas = document.createElement('canvas');
      canvas.width = viewBoundaries * 2;
      canvas.height = viewBoundaries * 2;
      
      const context = canvas.getContext('2d');
      context?.drawImage(img, 0, 0, viewBoundaries * 2, viewBoundaries * 2);
      
      URL.revokeObjectURL(url);
      
      // trigger a synthetic download operation with a temporary link
      const a = document.createElement('a');
      a.download = fileName + '.png';
      document.body.appendChild(a);
      a.href = canvas.toDataURL();
      a.click();
      a.remove();
    });
    img.src = url;
  } else {
    const a = document.createElement('a');
    a.href = url
    a.download = fileName + '.svg';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}