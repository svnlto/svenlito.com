import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import stylesheet from '../style.css';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const { req } = ctx;
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { ...props, userAgent };
  }

  render() {
    const { userAgent } = this.props;

    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <title>Sven Lito - FullStack JavaScript/NodeJS Developer</title>
          <meta name='keywords' content='Sven Lito Software Ltd, JavaScript Development and Consulting' />
          <meta name='description' content='JavaScript, Development, Consultancy, Node.js, GraphQL, Elixir, Erlang, React-Native, React.js, Redux, NodeJS, Creative Coding' />
          <meta name='author' content='Sven Lito' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1' />
          <link rel='icon' type='image/png' sizes='64x64' href='/static/favicon-64x64.png' />
          <link rel='icon' type='image/png' sizes='48x48' href='/static/favicon-48x48.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <Main radiumConfig={{ userAgent }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
