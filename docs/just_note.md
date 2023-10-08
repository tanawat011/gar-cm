# Todo

- Breadcrumb navigation
  - Level 1 and 2 have to be merge into one in case level 1 is no link and level 2 is a link not empty or slash
    - example :

      ```javascript
      {
        title: 'lv1',
        link: 'lv1',
        subItems: [
          {
            title: 'lv2-1',
            link: '/'
          },
          {
            title: 'lv2-2',
            link: '/lv2-2'
          }
        ]
      }

      // Result1 : Home > lv1
      // Result2 : Home > lv1 > lv2-2
      -------------------------------
      {
        title: 'lv1',
        link: 'lv1',
        subItems: [
          {
            title: 'lv2-1',
            link: '/lv2-1'
          },
          {
            title: 'lv2-2',
            link: '/lv2-2'
          }
        ]
      }

      // Result1 : Home > lv1 : lv2-1
      // Result2 : Home > lv1 : lv2-2
      ```
