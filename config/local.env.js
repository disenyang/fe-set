
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"local"',
  is_debug: true,
  API_ROOT: '"http://contract.saas.sh-jiuye.com.cn"',
  login_url: '"https://account.saas.sh-jiuye.com.cn/login.html?app=13"',
  logout_url: '"https://account.saas.sh-jiuye.com.cn/logout.html?app=13"',
  login_jiuyescm_ticket: '"cZlwPVd9NbxlCAt3uKHYaIlrt+lQe3hoVq3Ri9tW9EBw0hkBf+aLFoYUaDicd4I4pkS745ZoEUSg53qf/MjvPSxs1LTdyHNPM6/KpDjGA1ElrWihXjH3YM43WP++MEc/SpxMUQfbxkVEKTnS/rur6tEpJoJJEqWK64KBTMYlta0="'
})
