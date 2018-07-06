/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const BlockHeader = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
    className={props.class}
    >
    <GridBlock className={props.classNameGrid} align="left" contents={props.children} layout={props.layout} />
  </Container>
);








class Docs extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <BlockHeader class="docsContainer" classNameGrid="docsGridHeader">
        {[
          {
            title: 'Manual',
            content: 'Guias com foco no usuário final. É preciso criar um corpo organizado de documentos para consulta de professores, secretários de escola e administradores do i-educar. Importante ter guias distintos para cada tipo de usuário. Conteúdo dos guias pode conter webcasts.',
            textAlign: 'left',
          }
        ]}
        </BlockHeader>
      </div>
    );
  }
}

module.exports = Docs;
