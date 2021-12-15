const req = require.context('../../../icons/svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const re = /\.\/(.*)\.svg/

const svgIcons = requireAll(req).map(i => {
  console.log('i: ', i);
  return i.match(re)[1]
})

export default svgIcons
