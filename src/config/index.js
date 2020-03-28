const serverType = 'dev'
import dev from './dev'
import stage from './stage'
import product from './product'

let exported_object = dev
if (serverType === 'dev') exported_object = dev
else if (serverType === 'stage') exported_object = stage
else if (serverType === 'product') exported_object = product

export default {
  LANCHING_URL: exported_object.LANCHING_URL,
  HOST: exported_object.HOST,
  HTTPS: exported_object.HTTPS,
  OPEN: exported_object.OPEN,
  PORT: exported_object.PORT,
  MAX_RETRY_JOIN: exported_object.MAX_RETRY_JOIN
}

