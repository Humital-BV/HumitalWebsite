/*exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
/*
exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-cookie-consent/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
*/
