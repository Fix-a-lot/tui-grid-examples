import {Renderer} from '/js/Renderer.js';


class RadioButtonRenderer extends Renderer {
  createElement(props) {
    let $div = document.createElement('div');
    this.el = $div

    let $input = document.createElement('input');
    $input.setAttribute('type', 'radio');
    $input.setAttribute('name', 'rdobtns');
    $div.appendChild($input); 

    $input.addEventListener('input', e => {
      console.debug('checked:', true);
      console.debug('rowKey:', props.rowKey);
      props.grid.uncheckAll(true);
      props.grid.check(props.rowKey);
    });
  }
}

export default [
  {
    header: "RowIndex",
    name: "rowIndex",
    align: 'center'
  },
  {
    header: 'radio test',
    name: 'radio',
    align: 'center',
    renderer: {
      type: RadioButtonRenderer
    }
  },
  {
    header: "Name",
    name: "name",
    sortable: true
  },
  {
    header: "Artist",
    name: "artist",
  },
  {
    header: "Type",
    name: "type",
    align: 'center'
  },
  {
    header: "Release",
    name: "release",
    align: 'center'
  },
  {
    header: "Genre",
    name: "genre",
    align: 'center'
  },
];
