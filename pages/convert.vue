<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-textarea
        box
        name="input-7-1"
        label="Input"
        v-model="inputText"
        spellcheck="false"
      ></v-textarea>
      <v-combobox
        v-model="comboSelection"
        :items="items"
        item-text="label"
        label="Convert from one thing to another thing"
        v-on:select="comboSelected"
        :error-messages="comboError"
      ></v-combobox>
      <v-btn color="info" v-on:click="convert">Convert</v-btn>
      <v-textarea
        box
        name="input-7-1"
        label="Output"
        v-model="outputText"
        spellcheck="false"
      ></v-textarea>
    </v-flex>
  </v-layout>
</template>

<script>
import converters from '../converters';
let converterList = [
  { label: 'xml -> json', converter: converters.xmlToJson },
  { label: 'json -> xml', converter: '2' },
  { label: 'csv -> json', converter: converters.csvToJson },
  { label: 'json -> csv', converter: '4' },
  { label: 'text -> binary', converter: '5' },
  { label: 'binary -> text', converter: '6' },
  { label: 'text -> hex', converter: converters.textToHex },
  { label: 'hex -> text', converter: '8' },
  { label: 'plist -> json', converter: converters.plistToJson },
  { label: 'json -> plist', converter: '9' },
  { label: 'text -> base64', converter: '10' },
  { label: 'base64 -> text', converter: '11' },
  { label: 'binary -> base64', converter: '12' },
  { label: 'hex -> rgb', converter: '13' },
  { label: 'rgb -> hex', converter: '14' },
  { label: 'hex -> hsv', converter: '15' },
  { label: 'hsv -> hex', converter: '16' },
  { label: 'json -> single-quote object', converter: '17' },
  { label: 'single-quote object -> json', converter: '18' },
  { label: 'json -> double-quote object', converter: '19' },
  { label: 'double-quote object -> json', converter: '20' },
  { label: 'list -> comma separated with quotes', converter: '21' }
];
export default {
  data () {
    return {
      inputText: '',
      outputText: '',
      items: converterList,
      comboSelection: '',
      comboError: []
    };
  },
  methods: {
    comboSelected () {
      this.comboError = [];
    },
    convert () {
      this.comboError = [];
      if (!this.comboSelection) {
        this.comboError.push('Please select one');
      } else {
        if (typeof this.comboSelection.converter === 'function') {
          this.outputText = this.comboSelection.converter(this.inputText.trim());
        } else {
          this.comboError.push('Not yet implemented');
        }
      }
    }
  }
};
</script>
