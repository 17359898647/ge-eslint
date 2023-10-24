// @ts-nocheck
import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'
import { antfu } from '@antfu/eslint-config'
import react from 'eslint-plugin-react'
import eslint_config_standard_jsx from 'eslint-config-standard-jsx'
import unocss from '@unocss/eslint-plugin'
import sortKeys from 'eslint-plugin-sort-keys'

export default function (
  options?: OptionsConfig & ConfigItem,
  ...userConfigs: (ConfigItem | ConfigItem[])[]
) {
  return antfu(
    {
      ignores: [
        'dist',
        'node_modules',
        'public',
        'src/assets',
        'src/types/auto-imports.d.ts',
        'src/types/auto-component.d.ts',
        'src/types/.eslintrc-auto-import.d.ts',
      ],
      jsonc: true,
      jsx: true,
      overrides: {
        javascript: {
          'no-console': 0,
        },
        typescript: {
          'ts/ban-ts-comment': 'off',
        },
        vue: {
          '@typescript-eslint/ban-ts-comment': 'off',
          '@typescript-eslint/consistent-type-assertions': 0,
          '@typescript-eslint/no-namespace': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
          'import/order': [
            2,
            {
              'alphabetize': {
                caseInsensitive: true,
                order: 'asc',
              },
              'newlines-between': 'never',
            },
          ],
          'linebreak-style': [2, 'unix'],
          'no-console': 'off',
          'prefer-promise-reject-errors': 'off',
          'quote-props': [2, 'as-needed'],
          'ts/ban-ts-comment': 'off',
          'vue/attribute-hyphenation': [1, 'never', {
            ignore: ['custom-prop'],
          }],
          'vue/attributes-order': [
            2,
            {
              alphabetical: true,
              order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                ['UNIQUE', 'SLOT'],
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT',
              ],
            },
          ],
          'vue/component-name-in-template-casing': [2, 'PascalCase'],
          'vue/custom-event-name-casing': [2, 'camelCase', {
            ignores: [],
          }],
          'vue/first-attribute-linebreak': [2, {
            multiline: 'below',
            singleline: 'beside',
          }],
          'vue/html-closing-bracket-spacin': 0,
          'vue/html-indent': [2, 2],
          'vue/max-attributes-per-line': [2, {
            multiline: {
              max: 1,
            },
            singleline: {
              max: 1,
            },
          }],
          'vue/multi-word-component-names': 'off',
          'vue/one-component-per-file': 'off',
          'vue/prefer-true-attribute-shorthand': [2, 'never'],
          'vue/prop-name-casing': [1, 'camelCase'],
          'vue/v-on-event-hyphenation': [2, 'never', {
            autofix: true,
          }],
          'yml/no-empty-mapping-value': 'off',
        },
      },
      stylistic: true,
      yaml: false,
      ...options,
    },
    {
      plugins: {
        react,
      },
      rules: {
        ...eslint_config_standard_jsx.rules,
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-indent': [2, 2],
        'react/jsx-max-props-per-line': [2, {
          maximum: 1,
          when: 'always',
        }],
        'react/jsx-one-expression-per-line': [2, {
          allow: 'literal',
        }],
        'react/jsx-sort-props': [2, {
          callbacksLast: true,
          ignoreCase: false,
          multiline: 'last',
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
          shorthandLast: false,
        }],
        'react/jsx-wrap-multilines': [2, {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
          return: 'parens-new-line',
        }],
      },
    },
    {
      rules: {
        'jsx-quotes': [2, 'prefer-single'],
        'style/jsx-quotes': [2, 'prefer-single'],
      },
    },
    unocss.configs.flat,
    {
      plugins: {
        'sort-keys': sortKeys,
      },
      rules: {
        'sort-keys/sort-keys-fix': 'error',
      },
    },
    ...userConfigs,
  )
}
