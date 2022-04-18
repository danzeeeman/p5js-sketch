let table;

function preload() {
  table = loadTable('14thStreet.csv', 'csv', 'header');
}

function setup() {
  createCanvas(512, 512);
  //count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
}

function draw(){
  text("IT RUNS NUM ROWS "+table.getRowCount(), width/2, height/2);
}
