var postcss = require('postcss');

module.exports = postcss.plugin('postcss-format-standards', function (opts) {

  opts = opts || {};

  return function (root, result) {

    root.walk(node => {

      if (opts.lowercase) {
 
        if (node.type === 'rule' && node.selector) {
          node.selector = node.selector.toLowerCase();

          if (opts.dashed) {
            node.selector = node.selector.replace(/_/g, "-");
          }

          node.walk(node => {
            if (node.type === 'decl') {
              node.prop = node.prop.toLowerCase();
              node.value = node.value.toLowerCase();
            }
          });
        };
      }
    });
  };
});
