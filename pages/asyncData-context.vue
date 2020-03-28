<template>
  <div>
    <h1> Context usage </h1>
    <div v-if="isMacOS">
      Content for MacOS
    </div>
    <div v-else-if="isWindows">
      Content for Windows
    </div>
    <div v-else>
      Content for crawlers and linux devs ;-)
    </div>
  </div>
</template>
<script>
function isWindows (a) {
  return /Windows/.test(a)
}
function isMacOS (a) {
  return /Mac OS X/.test(a)
}
export default {
  asyncData (context) {
    let agent = 'Googlebot/2.1 (+http://www.google.com/bot.html)'

    if (process.server) {
      const { req } = context
      agent = req.headers['user-agent']
    } else if (process.client && typeof navigator !== 'undefined') {
      agent = navigator.userAgent
    }

    return {
      isWindows: isWindows(agent),
      isMacOS: isMacOS(agent)
    }
  }
}
</script>
