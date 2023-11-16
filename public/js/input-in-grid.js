import columns from '/js/input-in-grid-column-config.js'

const gridData = null;

let gridInstance = window.gridInstance = new tui.Grid({
  el: document.getElementById('grid'),
  scrollX: false,
  scrollY: true,
  bodyHeight: 600,
  // minBodyHeight: 600,
  rowHeaders: ['rowNum'],
  useClientSort: false,
  data: {
    api: {
      readData: { url: '/read-grid.data', method: 'GET' },
    },
  },
  pageOptions: {
    perPage: 50
  },
  columns,
});

function readData() {
  gridInstance.readData(1);
}

window.g = gridInstance;
