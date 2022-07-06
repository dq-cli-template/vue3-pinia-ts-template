module.exports = {
  extends: [
    // 对css的属性进行排序
    'stylelint-config-rational-order',
    // Stylelint推荐的可共享 Vue 配置
    'stylelint-config-recommended-vue',
    // 解决stylelint和prettier之间的冲突
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-selector-no-empty'],
  rules: { 'plugin/stylelint-selector-no-empty': true },
  // 使用postcss-less对less文件进行转换,让stylelint能lint less文件,
  // 这里使用overrides只对less文件使用post- less, 否则lint   .vue文件时会报错
  overrides: [
    {
      files: ['*.less', '**/*.{less}'],
      customSyntax: 'postcss-less',
    },
  ],
  // 自动fix
  fix: true,
}
