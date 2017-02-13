import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import stylesheet from '../style.css';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    return { ...props };
  }

  render() {

    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1' />
          <meta name='description' content='' />
          <link rel='icon' href='/images/favicon.png' type='image/x-icon' />
          <title>Sven Lito - FullStack JavaScript/NodeJS Developer</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
