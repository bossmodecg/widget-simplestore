import React from 'react';
import BossmodeCGM from '@bossmodecg/management-react';
import { JsonEditor } from 'react-json-edit';

export default class DebugPanel extends BossmodeCGM.Components.Widget {
  constructor(props) {
    super(props);

    this._jsonChanges = this._jsonChanges.bind(this);

    this.setWidgetOptions({
      title: "SimpleStore Debug",

      panelSize: 'full'
    });
  }

  _jsonChanges(changes) {
    const client = this.props.bossmodecgClient;
    client.module("simplestore").setState(changes);
  }

  _renderWidget() {
    const client = this.props.bossmodecgClient;
    const simplestore = client.module("simplestore");

    return (
      <div style={{ height: '16rem', overflow: 'scroll' }}>
        <JsonEditor value={ simplestore.state } propagateChanges={this._jsonChanges} />
      </div>
    );
  }
}
