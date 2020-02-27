// this builds a graph object to be passed to the GraphManager in dmm.js
function buildGraph() {
  let gobj = new Graph;

  let sla =     generateVertex("Technology", "SLA (FormLabs)");
  let polyjet = generateVertex("Technology", "PolyJet (Stratasys)");
  let fdm =     generateVertex("Technology", "FDM");
  let sls =     generateVertex("Technology", "SLS");

  let abs =     generateVertex("Material", "ABS");
  let vero =    generateVertex("Material", "Vero");
  let flclear = generateVertex("Material", "FL Clear");
  let fltough = generateVertex("Material", "FL Tough");
  let nylon =   generateVertex("Material", "Nylon");
  let onyx =    generateVertex("Material", "Onyx");

  // a Vertex is a blue box
  gobj.addVertex(sla.id, sla.v);
  gobj.addVertex(polyjet.id, polyjet.v);
  gobj.addVertex(fdm.id, fdm.v);
  gobj.addVertex(sls.id, sls.v);

  gobj.addVertex(abs.id, abs.v);
  gobj.addVertex(vero.id, vero.v);
  gobj.addVertex(flclear.id, flclear.v);
  gobj.addVertex(fltough.id, fltough.v);
  gobj.addVertex(nylon.id, nylon.v);
  gobj.addVertex(onyx.id, onyx.v);

  // an Edge is an incompatibility
  // <TODO> develop guidelines for edge definition
  gobj.addEdge(sla.id, polyjet.id);
  gobj.addEdge(sla.id, fdm.id);
  gobj.addEdge(sla.id, sls.id);
  gobj.addEdge(sla.id, abs.id);
  gobj.addEdge(sla.id, vero.id);
  gobj.addEdge(sla.id, nylon.id);
  gobj.addEdge(sla.id, onyx.id);

  gobj.addEdge(polyjet.id, sla.id);
  gobj.addEdge(polyjet.id, fdm.id);
  gobj.addEdge(polyjet.id, sls.id);
  gobj.addEdge(polyjet.id, abs.id);
  gobj.addEdge(polyjet.id, flclear.id);
  gobj.addEdge(polyjet.id, fltough.id);
  gobj.addEdge(polyjet.id, nylon.id);
  gobj.addEdge(polyjet.id, onyx.id);

  gobj.addEdge(fdm.id, sla.id);
  gobj.addEdge(fdm.id, polyjet.id);
  gobj.addEdge(fdm.id, sls.id);
  gobj.addEdge(fdm.id, vero.id);
  gobj.addEdge(fdm.id, flclear.id);
  gobj.addEdge(fdm.id, fltough.id);
  
  gobj.addEdge(sls.id, sla.id);
  gobj.addEdge(sls.id, polyjet.id);
  gobj.addEdge(sls.id, fdm.id);
  gobj.addEdge(sls.id, abs.id);
  gobj.addEdge(sls.id, vero.id);
  gobj.addEdge(sls.id, flclear.id);
  gobj.addEdge(sls.id, fltough.id);
  gobj.addEdge(sls.id, onyx.id);

  return gobj.graph;
}

function generateVertex( cat, id ) {
  return {id : getUUID(), v : new Vertex(cat, id)};
}

// generate a UUID - https://gist.github.com/LeverOne/1308368
function getUUID ( a, b ) {
  for(
    b=a="";
    a++ < 36;
    b += a * 51 & 52 ?
      ( a ^ 15 ?
        8 ^ Math.random() * (a ^ 20 ? 16 : 4) :
        4
      ).toString(16) :
      '-'
  );
  return b
}
