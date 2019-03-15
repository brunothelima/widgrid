import { createLocaleEnv } from 'wg_core/Wg.js'

const messages =  createLocaleEnv(
  'WgFoundation',
  require.context(
    './locales', 
    true, 
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
);

export default messages 
