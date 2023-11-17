
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

class CustomTextEditor extends Renderer {
  createElement(props) {
    const $el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;
    $el.type = 'text';
    $el.maxLength = maxLength;
    $el.value = String(props.value);
    this.el = $el;
  }

  getValue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
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
    editor: {
      type: CustomTextEditor,
      options: {
        maxLength: 10
      }
    }
  },
  {
    header: "Artist",
    name: "artist",
    editor: {
      type: 'select',
      options: {
        listItems: [
          { text: 'Deluxe', value: '1' },
          { text: 'EP', value: '2' },
          { text: 'Single', value: '3' }
        ]
      }
    }
  },
  {
    header: "Type",
    name: "type",
    // align: 'center',
    editor: 'text',
    className: 'border-input'
  },
  {
    header: "Release",
    name: "release",
    // align: 'center',
    editor: 'text',
    className: 'border-input'
  },
  {
    header: "Genre",
    name: "genre",
    align: 'center',
    formatter: 'listItemText',
    editor: {
      type: 'checkbox',
      options: {
        listItems: [
          { text: 'Pop', value: '1' },
          { text: 'Rock', value: '2' },
          { text: 'R&B', value: '3' },
          { text: 'Electronic', value: '4' },
          { text: 'etc.', value: '5' }
        ]
      }
    },
    copyOptions: {
      useListItemText: true // when this option is used, the copy value is concatenated text
    }
  },
  {
    header: 'Grade',
    name: 'grade',
    copyOptions: {
      useListItemText: true
    },
    formatter: 'listItemText',
    editor: {
      type: 'radio',
      options: {
        listItems: [
          { text: '★☆☆', value: '1' },
          { text: '★★☆', value: '2' },
          { text: '★★★', value: '3' }
        ]
      }
    }
  }
];
