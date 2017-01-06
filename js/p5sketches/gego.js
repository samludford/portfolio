
// APPLICATION

var mag_threshold = 200;
var rows = 35;
var columns = 35;
var nodes;
var padding = 100;

function setup() {

  var canvasDiv = document.getElementById("myCanvas");
  var divWidth = document.getElementById("myCanvas").clientWidth;
  var sketchCanvas = createCanvas(divWidth,divWidth);
  sketchCanvas.parent("myCanvas");

  nodes = new Array();

  var horizontalSpacing = (width - padding*2)/(rows-1);
  var verticalSpacing = (height - padding*2)/(columns-1);

  for(var i=0 ; i < (rows * columns) ; i++) {
    var currentRow = i % columns;
    var currentColumn = floor(i/rows);
    var x = padding + (currentRow * horizontalSpacing);
    var y = padding + (currentColumn * verticalSpacing);
    var n = new Node(createVector(x,y));
    nodes.push(n);
  }

}

function draw() {
  background(255);
  stroke(0);

  var target_pos;

  for(var i=0 ; i<nodes.length ; i++) {
    var n = nodes[i];
    target_pos = get_target_pos(n);
    update_node(n, target_pos);
  }

  for(var i=0 ; i<rows ; i++) {
    var nodes_at_row = get_nodes_at_row(i);
    draw_line(nodes_at_row);
  }
}

// OBJECTS & BEHAVIOURS

function Node(pos) {
  this.base_pos = pos;
  this.pos = pos.copy();
  this.diff = 3;
  this.dist_mult = 1.0;
}

function get_target_pos(n) {
  var mouse = createVector(mouseX,mouseY);
  var dir = p5.Vector.sub(n.base_pos, mouse);
  var mag = dir.mag();
  var target_pos;
  if(mag < mag_threshold) {
    var scaleFactor = map(mag, 0, mag_threshold, 50, 0);
    dir.normalize();
    dir.mult(scaleFactor);
    target_pos = p5.Vector.add(n.base_pos, dir);
  } else {
    target_pos = n.base_pos;
  }
  return target_pos;
}

function update_node(n, target_pos) {
  var dist = p5.Vector.sub(target_pos, n.pos);
  dist.mult(n.dist_mult);
  n.pos.add(dist);
}

function draw_line(nodes) {
  for(var i=0 ; i<nodes.length-1 ; i++) {
    var n0 = nodes[i];
    var n1 = nodes[i+1];
    var x0 = n0.pos.x + random(-n0.diff, n0.diff);
    var y0 = n0.pos.y + random(-n0.diff, n0.diff);
    var x1 = n1.pos.x + random(-n1.diff, n1.diff);
    var y1 = n1.pos.x + random(-n1.diff, n1.diff);
    line(x0, y0, x1, y1);
  }
}

function get_nodes_at_row(row) {
  var nodes_at_row = new Array();
  for(var i=0 ; i<columns ; i++) {
    nodes_at_row.push(nodes[i + (columns * row)]);
  }
  return nodes_at_row;
}
