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

- Toggle sidebar
  - can toggle sidebar
  - can toggle sidebar with button
  - can toggle sidebar with keyboard
- Global search
  - can search
  - can search with button
  - can search with keyboard
- Add jest test
  - snapshot test
  - unit test
- Add more theme
  - can switch theme
  - can add custom theme
- Add more language
  - can switch language
    - thai language
    - english language
- Install firebase
- Setup environment
- Login and register
  - Login and register page
  - can login
  - can register
  - can logout
- Add page todo list
  - can add todo list
  - can edit todo list
  - can delete todo list
  - can mark todo list as done
  - can mark todo list as undone
  - can sort todo list
  - can filter todo list
  - can search todo list
  - can export todo list
  - can import todo list
- Deploy with vercel or netlify?
- Loading page
- Skeleton loading page
- Setup github action
- Setup cz-conventional-changelog
- Setup commitlint
- Setup auto versioning
- Setup auto changelog
- Setup auto release
- Setup auto deploy
