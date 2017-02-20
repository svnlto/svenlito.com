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
          <meta name='description' content='JavaScript, Development, Consultancy, React-Native, React.js, Redux, Node.js, NodeJS, Creative Coding' />
          <meta name='author' content='Sven Lito' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1' />
          <link rel='icon' href='/images/favicon.png' type='image/x-icon' />
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
