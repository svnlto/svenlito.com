import React from 'react';
import Radium from 'radium';

import SocialButton from './SocialButton';

const Social = () => (
  <div>
    <SocialButton link='/contact' icon='email' />
    <SocialButton link='http://github.com/svnlto' icon='github' />
    <SocialButton link='http://twitter.com/svenlito' icon='twitter' />
  </div>
);

export default Radium(Social);
