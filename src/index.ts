// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { antfu } from '@antfu/eslint-config'
import react from 'eslint-plugin-react'
import eslint_config_standard_jsx from 'eslint-config-standard-jsx'
import unocss from '@unocss/eslint-plugin'

export default function (
  options: OptionsConfig & ConfigItem,
  ...userConfigs: (ConfigItem | ConfigItem[])[]
) {
  return antfu({
    ...options,
  }, ...userConfigs, {
    plugins: {
      react,
    },
    rules: {
      ...eslint_config_standard_jsx.rules,
      'react/jsx-max-props-per-line': [2, {
        maximum: 1,
        when: 'always',
      }],
      'react/jsx-indent': [2, 2],
      'react/jsx-sort-props': [2, {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        multiline: 'last',
      }],
      'react/jsx-boolean-value': [2, 'always'],
      'react/jsx-one-expression-per-line': [2, {
        allow: 'literal',
      }],
      'react/jsx-wrap-multilines': [2, {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }],
    },
  }, {
    rules: {
      'jsx-quotes': [2, 'prefer-single'],
      'style/jsx-quotes': [2, 'prefer-single'],
    },
  }, unocss.configs.flat)
}
