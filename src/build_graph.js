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

  let mil_5 =    generateVertex("Resolution / Dim. Accuracy", "5 mil");
  let mil_7_5 =  generateVertex("Resolution / Dim. Accuracy", "7.5 mil");
  let mil_10 =   generateVertex("Resolution / Dim. Accuracy", "10+ mil");

  let cost_1 =    generateVertex("Cost (per part)", "$1");
  let cost_10 =   generateVertex("Cost (per part)", "$10");
  let cost_50 =   generateVertex("Cost (per part)", "$50");
  let cost_100 =  generateVertex("Cost (per part)", "$100");

  let len_1 =   generateVertex("Part Length (largest dim)", "1 in");
  let len_3 =   generateVertex("Part Length (largest dim)", "3 in");
  let len_6 =   generateVertex("Part Length (largest dim)", "6 in");
  let len_12 =  generateVertex("Part Length (largest dim)", "12+ in");

  let ori_vert =  generateVertex("Orientation", "Vertical");
  let ori_horiz = generateVertex("Orientation", "Horizontal");
  let ori_steep = generateVertex("Orientation", "Steep Angle");
  let ori_shal =  generateVertex("Orientation", "Shallow Angle");

  let ppc_none =  generateVertex(
    "Post Processing Complexity", "none");
  let ppc_jet =   generateVertex(
    "Post Processing Complexity", "Waterjet req'd");
  let ppc_ipa =   generateVertex(
    "Post Processing Complexity", "IPA Bath req'd");
  let ppc_uv =    generateVertex(
    "Post Processing Complexity", "UV Curing req'd");
  let ppc_sand =  generateVertex(
    "Post Processing Complexity", "Sanding req'd");

  let ppd_0 =   generateVertex("Post Processing Duration", "none");
  let ppd_10 =  generateVertex("Post Processing Duration", "10 min");
  let ppd_30 =  generateVertex("Post Processing Duration", "30 min");
  let ppd_60 =  generateVertex("Post Processing Duration", "1 hour");
  let ppd_ovn = generateVertex("Post Processing Duration", "overnight");

  let sr_70 =   generateVertex("Surface Roughness (Ra)", "70 µin");
  let sr_130 =  generateVertex("Surface Roughness (Ra)", "130 µin");
  let sr_190 =  generateVertex("Surface Roughness (Ra)", "190 µin");
  let sr_250 =  generateVertex("Surface Roughness (Ra)", ">250 µin");

  let plate_vg = generateVertex("Platability", "Very Good");
  let plate_gd = generateVertex("Platability", "Good");
  let plate_bd = generateVertex("Platability", "Bad");
  let plate_np = generateVertex("Platability", "Not Platable");

  let vswr_placeholder = generateVertex("VSWR", "[placeholder]");
  let loss_placeholder = generateVertex("dB Loss", "[placeholder]");

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

  gobj.addVertex(mil_5.id, mil_5.v);
  gobj.addVertex(mil_7_5.id, mil_7_5.v);
  gobj.addVertex(mil_10.id, mil_10.v);

  gobj.addVertex(cost_1.id, cost_1.v);
  gobj.addVertex(cost_10.id, cost_10.v);
  gobj.addVertex(cost_50.id, cost_50.v);
  gobj.addVertex(cost_100.id, cost_100.v);

  gobj.addVertex(len_1.id, len_1.v);
  gobj.addVertex(len_3.id, len_3.v);
  gobj.addVertex(len_6.id, len_6.v);
  gobj.addVertex(len_12.id, len_12.v);

  gobj.addVertex(ori_vert.id, ori_vert.v);
  gobj.addVertex(ori_horiz.id, ori_horiz.v);
  gobj.addVertex(ori_steep.id, ori_steep.v);
  gobj.addVertex(ori_shal.id, ori_shal.v);

  gobj.addVertex(ppc_none.id, ppc_none.v);
  gobj.addVertex(ppc_jet.id, ppc_jet.v);
  gobj.addVertex(ppc_ipa.id, ppc_ipa.v);
  gobj.addVertex(ppc_uv.id, ppc_uv.v);
  gobj.addVertex(ppc_sand.id, ppc_sand.v);

  gobj.addVertex(ppd_0.id, ppd_0.v);
  gobj.addVertex(ppd_10.id, ppd_10.v);
  gobj.addVertex(ppd_30.id, ppd_30.v);
  gobj.addVertex(ppd_60.id, ppd_60.v);
  gobj.addVertex(ppd_ovn.id, ppd_ovn.v);

  gobj.addVertex(sr_70.id, sr_70.v);
  gobj.addVertex(sr_130.id, sr_130.v);
  gobj.addVertex(sr_190.id, sr_190.v);
  gobj.addVertex(sr_250.id, sr_250.v);

  gobj.addVertex(plate_vg.id, plate_vg.v);
  gobj.addVertex(plate_gd.id, plate_gd.v);
  gobj.addVertex(plate_bd.id, plate_bd.v);
  gobj.addVertex(plate_np.id, plate_np.v);

  gobj.addVertex(vswr_placeholder.id, vswr_placeholder.v);
  gobj.addVertex(loss_placeholder.id, loss_placeholder.v);



  // an Edge is a compatibility (the two vertices are compatible)
  // duplicates are OK - if an edge already exists, addEdge will not do anything
  // define edges in inter-category groups (for example, tech to tech edges,
  // tech to material edges, etc) - this should make for the most concise list

  // tech - material
  gobj.addEdge(sla.id, flclear.id);
  gobj.addEdge(sla.id, fltough.id);
  gobj.addEdge(polyjet.id, vero.id);
  gobj.addEdge(fdm.id, abs.id);
  gobj.addEdge(fdm.id, nylon.id);
  gobj.addEdge(fdm.id, onyx.id);
  gobj.addEdge(sls.id, nylon.id);

  // tech - resolution
  gobj.addEdge(sla.id, mil_5.id)
  gobj.addEdge(sla.id, mil_7_5.id);
  gobj.addEdge(sla.id, mil_10.id);
  gobj.addEdge(polyjet.id, mil_7_5.id);
  gobj.addEdge(polyjet.id, mil_10.id);
  gobj.addEdge(fdm.id, mil_10.id);
  gobj.addEdge(sls.id, mil_10.id);

  // tech - cost
  // <TODO>
  
  // tech - length
  gobj.addEdge(sla.id, len_1.id);
  gobj.addEdge(sla.id, len_3.id);
  gobj.addEdge(sla.id, len_6.id);
  gobj.addEdgeCategory(polyjet.id, len_1.v.category);
  gobj.addEdgeCategory(fdm.id, len_1.v.category);
  gobj.addEdgeCategory(sls.id, len_1.v.category);

  // tech - orientation
  gobj.addEdge(sla.id, ori_vert.id);
  gobj.addEdge(sla.id, ori_steep.id);
  gobj.addEdge(polyjet.id, ori_horiz.id);
  gobj.addEdge(fdm.id, ori_horiz.id);
  gobj.addEdgeCategory(sls.id, ori_horiz.v.category);

  // tech - pp complexity
  gobj.addEdge(sla.id, ppc_ipa.id);
  gobj.addEdge(sla.id, ppc_uv.id);
  gobj.addEdge(sla.id, ppc_sand.id);
  gobj.addEdge(polyjet.id, ppc_jet.id);
  gobj.addEdge(polyjet.id, ppc_sand.id);
  gobj.addEdge(fdm.id, ppc_sand.id);
  gobj.addEdge(sls.id, ppc_none.id);

  // tech - pp duration
  gobj.addEdge(sla.id, ppd_30.id);
  gobj.addEdge(sla.id, ppd_ovn.id);
  gobj.addEdge(polyjet.id, ppd_30.id);
  gobj.addEdge(fdm.id, ppd_60.id);
  gobj.addEdge(sls.id, ppd_0.id);

  // tech - roughness
  gobj.addEdgeCategory(sla.id, sr_70.v.category);
  gobj.addEdgeCategory(polyjet.id, sr_70.v.category);
  gobj.addEdge(fdm.id, sr_190.id);
  gobj.addEdge(fdm.id, sr_250.id);
  gobj.addEdge(sls.id, sr_250.id);

  // tech - platability
  gobj.addEdge(sla.id, plate_gd.id);
  gobj.addEdge(polyjet.id, plate_vg.id);
  gobj.addEdge(fdm.id, plate_gd.id);
  gobj.addEdge(sls.id, plate_bd.id);

  // tech - vswr
  // <TODO>

  // tech - loss
  // <TODO>

  // material edges are the union of the edges of the technologies they're 
  // compatible with
  // material - resolution
  gobj.addEdge(abs.id, mil_10.id);
  gobj.addEdge(vero.id, mil_7_5.id);
  gobj.addEdge(vero.id, mil_10.id);
  gobj.addEdge(flclear.id, mil_5.id);
  gobj.addEdge(flclear.id, mil_7_5.id);
  gobj.addEdge(flclear.id, mil_10.id);
  gobj.addEdge(fltough.id, mil_5.id);
  gobj.addEdge(fltough.id, mil_7_5.id);
  gobj.addEdge(fltough.id, mil_10.id);
  gobj.addEdge(nylon.id, mil_10.id);
  gobj.addEdge(onyx.id, mil_10.id);

  // material - cost
  // <TODO>

  // material - length
  gobj.addEdgeCategory(abs.id, len_1.v.category);
  gobj.addEdgeCategory(vero.id, len_1.v.category);
  gobj.addEdge(flclear.id, len_1.id);
  gobj.addEdge(flclear.id, len_3.id);
  gobj.addEdge(flclear.id, len_6.id);
  gobj.addEdge(fltough.id, len_1.id);
  gobj.addEdge(fltough.id, len_3.id);
  gobj.addEdge(fltough.id, len_6.id);
  gobj.addEdgeCategory(nylon.id, len_1.v.category);
  gobj.addEdgeCategory(onyx.id, len_1.v.category);

  // material - orientation
  gobj.addEdge(abs.id, ori_horiz.id);
  gobj.addEdge(vero.id, ori_horiz.id);
  gobj.addEdge(flclear.id, ori_vert.id);
  gobj.addEdge(flclear.id, ori_steep.id);
  gobj.addEdge(fltough.id, ori_vert.id);
  gobj.addEdge(fltough.id, ori_steep.id);
  gobj.addEdgeCategory(nylon.id, ori_vert.v.category);
  gobj.addEdge(onyx.id, ori_horiz.id);

  // material - pp complexity
  gobj.addEdge(abs.id, ppc_sand.id);
  gobj.addEdge(vero.id, ppc_jet.id);
  gobj.addEdge(vero.id, ppc_sand.id);
  gobj.addEdge(flclear.id, ppc_ipa.id);
  gobj.addEdge(flclear.id, ppc_uv.id);
  gobj.addEdge(flclear.id, ppc_sand.id);
  gobj.addEdge(fltough.id, ppc_ipa.id);
  gobj.addEdge(fltough.id, ppc_uv.id);
  gobj.addEdge(fltough.id, ppc_sand.id);
  gobj.addEdge(nylon.id, ppc_none.id);
  gobj.addEdge(nylon.id, ppc_sand.id);
  gobj.addEdge(onyx.id, ppc_sand.id);

  // material - pp duration
  gobj.addEdge(abs.id, ppd_60.id);
  gobj.addEdge(vero.id, ppd_30.id);
  gobj.addEdge(flclear.id, ppd_30.id);
  gobj.addEdge(flclear.id, ppd_ovn.id);
  gobj.addEdge(fltough.id, ppd_30.id);
  gobj.addEdge(fltough.id, ppd_ovn.id);
  gobj.addEdge(nylon.id, ppd_60.id);
  gobj.addEdge(nylon.id, ppd_0.id);
  gobj.addEdge(onyx.id, ppd_60.id);

  // material - roughness
  gobj.addEdge(abs.id, sr_190.id);
  gobj.addEdge(abs.id, sr_250.id);
  gobj.addEdgeCategory(vero.id, sr_70.v.category);
  gobj.addEdgeCategory(flclear.id, sr_70.v.category);
  gobj.addEdgeCategory(fltough.id, sr_70.v.category);
  gobj.addEdge(nylon.id, sr_190.id);
  gobj.addEdge(nylon.id, sr_250.id);
  gobj.addEdge(onyx.id, sr_190.id);
  gobj.addEdge(onyx.id, sr_250.id);

  // material - platability
  gobj.addEdge(vero.id, plate_vg.id);
  gobj.addEdge(flclear.id, plate_gd.id);
  gobj.addEdge(fltough.id, plate_gd.id);
  gobj.addEdge(nylon.id, plate_bd.id);
  gobj.addEdge(onyx.id, plate_gd.id);

  // material - vswr
  // <TODO>

  // material - loss
  // <TODO>

  // resolution edges are mostly based on the edges of the technologies that
  // operate at that resolution
  // resolution - cost
  // <TODO>

  // resolution - length
  gobj.addEdge(mil_5.id, len_1.id);
  gobj.addEdge(mil_5.id, len_3.id);
  gobj.addEdge(mil_5.id, len_6.id);
  gobj.addEdgeCategory(mil_7_5.id, len_1.v.category);
  gobj.addEdgeCategory(mil_10.id, len_1.v.category);

  // resolution - orientation
  gobj.addEdge(mil_5.id, ori_vert.id);
  gobj.addEdge(mil_5.id, ori_steep.id);
  gobj.addEdge(mil_7_5.id, ori_vert.id);
  gobj.addEdge(mil_7_5.id, ori_horiz.id);
  gobj.addEdge(mil_7_5.id, ori_steep.id);
  gobj.addEdgeCategory(mil_10.id, ori_vert.v.category);

  // resolution - pp complexity
  gobj.addEdge(mil_5.id, ppc_ipa.id);
  gobj.addEdge(mil_5.id, ppc_uv.id);
  gobj.addEdge(mil_5.id, ppc_sand.id);
  gobj.addEdge(mil_7_5.id, ppc_jet.id);
  gobj.addEdge(mil_7_5.id, ppc_ipa.id);
  gobj.addEdge(mil_7_5.id, ppc_uv.id);
  gobj.addEdge(mil_7_5.id, ppc_sand.id);
  gobj.addEdge(mil_10.id, ppc_none.id);
  gobj.addEdge(mil_10.id, ppc_sand.id);

  // resolution - pp duration
  gobj.addEdge(mil_5.id, ppd_30.id);
  gobj.addEdge(mil_5.id, ppd_ovn.id);
  gobj.addEdge(mil_7_5.id, ppd_30.id);
  gobj.addEdge(mil_7_5.id, ppd_ovn.id);
  gobj.addEdge(mil_10.id, ppd_0.id);
  gobj.addEdge(mil_10.id, ppd_30.id);
  gobj.addEdge(mil_10.id, ppd_60.id);
  gobj.addEdge(mil_10.id, ppd_ovn.id);

  // resolution - roughness
  gobj.addEdgeCategory(mil_5.id, sr_70.v.category);
  gobj.addEdgeCategory(mil_7_5.id, sr_70.v.category);
  gobj.addEdgeCategory(mil_10.id, sr_70.v.category);

  // resolution - platability
  gobj.addEdge(mil_5.id, plate_gd.id);
  gobj.addEdge(mil_7_5.id, plate_vg.id);
  gobj.addEdge(mil_7_5.id, plate_gd.id);
  gobj.addEdge(mil_10.id, plate_vg.id);
  gobj.addEdge(mil_10.id, plate_gd.id);
  gobj.addEdge(mil_10.id, plate_bd.id);

  // resolution - vswr
  // <TODO>

  // resolution - loss
  // <TODO>

  // cost - length
  // <TODO>

  // cost - orientation
  // <TODO>

  // cost - pp complexity
  // <TODO>

  // cost - pp duration
  // <TODO>

  // cost - roughness
  // <TODO>

  // cost - platability
  // <TODO>

  // cost - vswr
  // <TODO>

  // cost - loss
  // <TODO>

  // length edges are based on the technologies that support each length
  // length - orientation
  gobj.addEdgeCategory(len_1.id, ori_vert.v.category);
  gobj.addEdgeCategory(len_3.id, ori_vert.v.category);
  gobj.addEdgeCategory(len_6.id, ori_vert.v.category);
  gobj.addEdgeCategory(len_12.id, ori_vert.v.category);

  // length - pp complexity
  gobj.addEdgeCategory(len_1.id, ppc_none.v.category);
  gobj.addEdgeCategory(len_3.id, ppc_none.v.category);
  gobj.addEdgeCategory(len_6.id, ppc_none.v.category);
  gobj.addEdge(len_12.id, ppc_none.id);
  gobj.addEdge(len_12.id, ppc_jet.id);
  gobj.addEdge(len_12.id, ppc_sand.id);

  // length - pp duration
  gobj.addEdge(len_1.id, ppd_0.id);
  gobj.addEdge(len_1.id, ppd_30.id);
  gobj.addEdge(len_1.id, ppd_60.id);
  gobj.addEdge(len_1.id, ppd_ovn.id);
  gobj.addEdge(len_3.id, ppd_0.id);
  gobj.addEdge(len_3.id, ppd_30.id);
  gobj.addEdge(len_3.id, ppd_60.id);
  gobj.addEdge(len_3.id, ppd_ovn.id);
  gobj.addEdge(len_6.id, ppd_0.id);
  gobj.addEdge(len_6.id, ppd_30.id);
  gobj.addEdge(len_6.id, ppd_60.id);
  gobj.addEdge(len_6.id, ppd_ovn.id);
  gobj.addEdge(len_12.id, ppd_0.id);
  gobj.addEdge(len_12.id, ppd_30.id);
  gobj.addEdge(len_12.id, ppd_60.id);

  // length - roughness
  gobj.addEdgeCategory(len_1.id, sr_70.v.category);
  gobj.addEdgeCategory(len_3.id, sr_70.v.category);
  gobj.addEdgeCategory(len_6.id, sr_70.v.category);
  gobj.addEdgeCategory(len_12.id, sr_70.v.category);

  // length - platability
  gobj.addEdge(len_1.id, plate_vg.id);
  gobj.addEdge(len_1.id, plate_gd.id);
  gobj.addEdge(len_1.id, plate_bd.id);
  gobj.addEdge(len_3.id, plate_vg.id);
  gobj.addEdge(len_3.id, plate_gd.id);
  gobj.addEdge(len_3.id, plate_bd.id);
  gobj.addEdge(len_6.id, plate_vg.id);
  gobj.addEdge(len_6.id, plate_gd.id);
  gobj.addEdge(len_6.id, plate_bd.id);
  gobj.addEdge(len_12.id, plate_vg.id);
  gobj.addEdge(len_12.id, plate_gd.id);
  gobj.addEdge(len_12.id, plate_bd.id);

  // length - vswr
  // <TODO>

  // length - loss
  // <TODO>

  // orientation edges are based on the technologies that support each
  // orientation
  // orientation - pp complexity
  gobj.addEdge(ori_vert.id, ppc_none.id);
  gobj.addEdge(ori_vert.id, ppc_ipa.id);
  gobj.addEdge(ori_vert.id, ppc_uv.id);
  gobj.addEdge(ori_vert.id, ppc_sand.id);
  gobj.addEdge(ori_horiz.id, ppc_none.id);
  gobj.addEdge(ori_horiz.id, ppc_jet.id);
  gobj.addEdge(ori_horiz.id, ppc_sand.id);
  gobj.addEdge(ori_steep.id, ppc_none.id);
  gobj.addEdge(ori_steep.id, ppc_ipa.id);
  gobj.addEdge(ori_steep.id, ppc_uv.id);
  gobj.addEdge(ori_steep.id, ppc_sand.id);
  gobj.addEdge(ori_shal.id, ppc_none.id);

  // orientation - pp duration
  gobj.addEdge(ori_vert.id, ppd_0.id);
  gobj.addEdge(ori_vert.id, ppd_30.id);
  gobj.addEdge(ori_vert.id, ppd_ovn.id);
  gobj.addEdge(ori_horiz.id, ppd_0.id);
  gobj.addEdge(ori_horiz.id, ppd_30.id);
  gobj.addEdge(ori_horiz.id, ppd_60.id);
  gobj.addEdge(ori_steep.id, ppd_0.id);
  gobj.addEdge(ori_steep.id, ppd_30.id);
  gobj.addEdge(ori_steep.id, ppd_ovn.id);
  gobj.addEdge(ori_shal.id, ppd_0.id);

  // orientation - roughness
  gobj.addEdgeCategory(ori_vert.id, sr_70.v.category);
  gobj.addEdgeCategory(ori_horiz.id, sr_70.v.category);
  gobj.addEdgeCategory(ori_steep.id, sr_70.v.category);
  gobj.addEdge(ori_shal.id, sr_250.id);

  // orientation - platability
  gobj.addEdge(ori_vert.id, plate_gd.id);
  gobj.addEdge(ori_vert.id, plate_bd.id);
  gobj.addEdge(ori_horiz.id, plate_vg.id);
  gobj.addEdge(ori_horiz.id, plate_gd.id);
  gobj.addEdge(ori_horiz.id, plate_bd.id);
  gobj.addEdge(ori_steep.id, plate_gd.id);
  gobj.addEdge(ori_steep.id, plate_bd.id);
  gobj.addEdge(ori_shal.id, plate_bd.id);

  // orientation - vswr
  // <TODO>

  // orientation - loss
  // <TODO>

  // post-processing edges are based on the technologies that require each type
  // and amount of post-processing
  // pp complexity - pp duration
  gobj.addEdge(ppc_none.id, ppd_0.id);
  gobj.addEdge(ppc_jet.id, ppd_30.id);
  gobj.addEdge(ppc_ipa.id, ppd_30.id);
  gobj.addEdge(ppc_uv.id, ppd_ovn.id);
  gobj.addEdge(ppc_sand.id, ppd_30.id);
  gobj.addEdge(ppc_sand.id, ppd_60.id);

  // pp complexity - roughness
  gobj.addEdge(ppc_none.id, sr_250.id);
  gobj.addEdgeCategory(ppc_jet.id, sr_70.v.category);
  gobj.addEdgeCategory(ppc_ipa.id, sr_70.v.category);
  gobj.addEdgeCategory(ppc_uv.id, sr_70.v.category);
  gobj.addEdgeCategory(ppc_sand.id, sr_70.v.category);

  // pp complexity - platability
  gobj.addEdge(ppc_none.id, plate_bd.id);
  gobj.addEdge(ppc_jet.id, plate_vg.id);
  gobj.addEdge(ppc_ipa.id, plate_gd.id);
  gobj.addEdge(ppc_uv.id, plate_gd.id);
  gobj.addEdge(ppc_sand, plate_vg.id);
  gobj.addEdge(ppc_sand, plate_gd.id);
  gobj.addEdge(ppc_sand, plate_bd.id);

  // pp complexity - vswr
  // <TODO>

  // pp complexity - loss
  // <TODO>

  // pp duration - roughness
  gobj.addEdge(ppd_0.id, sr_250.id);
  gobj.addEdgeCategory(ppd_30.id, sr_70.v.category);
  gobj.addEdge(ppd_60.id, sr_190.id);
  gobj.addEdge(ppd_60.id, sr_250.id);
  gobj.addEdgeCategory(ppd_ovn, sr_70.v.category);

  // pp duration - platability
  gobj.addEdge(ppd_0.id, plate_bd.id);
  gobj.addEdge(ppd_30.id, plate_vg.id);
  gobj.addEdge(ppd_30.id, plate_gd.id);
  gobj.addEdge(ppd_60.id, plate_gd.id);
  gobj.addEdge(ppd_60.id, plate_bd.id);
  gobj.addEdge(ppd_ovn.id, plate_gd.id);

  // pp duration - vswr
  // <TODO>

  // pp duration - loss
  // <TODO>

  // roughness edges are based on the technologies that can produce each sr
  // roughness - platability
  gobj.addEdge(sr_70.id, plate_vg.id);
  gobj.addEdge(sr_70.id, plate_gd.id);
  gobj.addEdge(sr_130.id, plate_vg.id);
  gobj.addEdge(sr_130.id, plate_gd.id);
  gobj.addEdge(sr_190.id, plate_vg.id);
  gobj.addEdge(sr_190.id, plate_gd.id);
  gobj.addEdge(sr_190.id, plate_bd.id);
  gobj.addEdge(sr_250.id, plate_vg.id);
  gobj.addEdge(sr_250.id, plate_gd.id);
  gobj.addEdge(sr_250.id, plate_bd.id);

  // roughness - vswr
  // <TODO>

  // roughness - loss
  // <TODO>

  // platability edges are based on the edges of the materials that have each
  // plating characteristic
  // platability - vswr
  // <TODO>
  
  // platability - loss
  // <TODO>

  // vswr - loss
  // <TODO>

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
