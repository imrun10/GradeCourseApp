const plainHtml = eid => `<div>Hello ${eid}</div>`
const plainCss = eid => `[${eid}] div{color:red}`
const plainJs = eid => `var a='running ${eid}';`
const plainData = eid => {
  return {
    message: `Message for ${eid}`,
    items: [],
  }
}

const buildWithVersions = ({ eid, data, html, css, js, cssAssets, jsAssets }) => {
  const mod = {
    eid,
    key: eid,
    cssAssets: cssAssets || [],
    jsAssets: jsAssets || [],
    data,
    html,
    css,
    js,
    versions: {
      default: {
        data,
        html,
        css,
      },
      v2: {
        data: JSON.parse(JSON.stringify(data)),
        html: html.replace(/<div>/g, '<div>v2 '),
        css: css.replace(/] /, '] /* v2 */ '),
      },
    },
  }
  Object.keys(mod.versions.v2.data).map(key => {
    if (typeof mod.versions.v2.data[key] === 'string') {
      mod.versions.v2.data[key] = `${mod.versions.v2.data[key]} v2`
    }
  })
  return mod
}

const buildPlainWithEid = eid => {
  return buildWithVersions({
    eid,
    data: plainData(eid),
    html: plainHtml(eid),
    css: plainCss(eid),
    js: plainJs(eid),
  })
}

const buildBasicWithEid = eid => {
  const mod = buildPlainWithEid(eid)
  mod.cssAssets = [`https://example.com/${eid}.css`]
  mod.jsAssets = [`https://example.com/${eid}.js`]
  return mod
}

let mods = {
  buildPlainWithEid,
  buildBasicWithEid,

  // Basic
  basic: buildBasicWithEid('basic'),

  // Plain, no assets
  plainhtml: buildWithVersions({
    eid: 'plainhtml',
    data: {},
    html: '<div>Hello, World!</div>',
    css: '',
    js: '',
  }),
  plaincss: buildWithVersions({
    eid: 'plaincss',
    data: {},
    html: '<div>Hello, World!</div>',
    css: '[plaincss] div{color:red;}',
    js: '',
  }),
  plainjs: buildWithVersions({
    eid: 'plainjs',
    data: {},
    html: '<div>Hello, World!</div>',
    css: '',
    js: "console.log('plainjs')",
  }),

  // CSS assets
  assetcss: {
    key: 'assetcss',
    cssAssets: ['https://example.com/assetcss.css'],
    jsAssets: [],
    html: '<div>Hello, World!</div>',
    css: '',
    js: '',
  },

  // JS assets
  assetjs: {
    key: 'assetjs',
    cssAssets: [],
    jsAssets: ['https://example.com/assetjs.js'],
    html: '<div>Hello, World!</div>',
    css: '',
    js: '',
  },

  // JS & CSS assets
  assetboth: {
    key: 'assetboth',
    cssAssets: ['https://example.com/assetboth.css'],
    jsAssets: ['https://example.com/assetboth.js'],
    html: '<div>Hello, World!</div>',
    css: '[assetboth] div{color:red;}',
    js: "console.log('assetboth')",
  },

  // JS & CSS assets
  assetboth2: {
    key: 'assetboth2',
    cssAssets: ['https://example.com/assetboth2.css'],
    jsAssets: ['https://example.com/assetboth2.js'],
    html: '<div>Hello, World!</div>',
    css: '[assetboth2] div{color:red;}',
    js: "console.log('assetboth2')",
  },
}

export { mods }
