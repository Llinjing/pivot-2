/*
 * Copyright 2015-2016 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { expect } from 'chai';
import * as sinon from 'sinon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../../utils/test-utils/index';

import * as TestUtils from 'react-addons-test-utils';
import { TimekeeperMock } from '../../../common/models/mocks';

import { LinkView } from './link-view';

describe('LinkView', () => {
  it.skip('adds the correct class', () => {
    var renderedComponent = TestUtils.renderIntoDocument(
      <LinkView
        timekeeper={TimekeeperMock.fixed()}
        collection={null}
        hash={null}
        updateViewHash={null}
        changeHash={null}
        stateful={true}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((ReactDOM.findDOMNode(renderedComponent) as any).className, 'should contain class').to.contain('link-view');

  });
});


