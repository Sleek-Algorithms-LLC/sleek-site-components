// Import vue component
// import component from './my-component.vue';
import SleekTest from './components/SleekTest/SleekTest.vue'

export {
  SleekTest
}

export function install(Vue, options) {
  options = {
    installComponents: true,
    ...options
  }

  if(options.installComponents) {
    Vue.component('SleekTest', SleekTest)
  }
}

