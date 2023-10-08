# Modify Basic Components

## Application Container Component

- Application container component is the root component of the application.
- Application container component is located in `src/components/AppContainer.tsx`.
- Application container component is a wrapper component for the application.
- Application container component can be setting up the theme, the language and the layout

## Loading Component(SSR)

- Loading component is the component that will be displayed when the application is loading the page from the server(SSR).
- Loading component is located in `src/components/BaseLayout/Loading.tsx`.

## Error Component(SSR)

- Error component is the component that will be displayed when the application is error while loading the page from the server(SSR).
- Error component is located in `src/components/BaseLayout/Error.tsx`.

## Not Found Component(SSR)

- Not found component is the component that will be displayed when the application is error when the page is not found while loading the page from the server(SSR).
- Not found component is located in `src/components/BaseLayout/NotFound.tsx`.

## Navbar Component

- Navbar component is the component that will be displayed on the top of the page.
- Navbar component is located in `src/components/BaseLayout/Navbar/Container.tsx`.
- Navbar center component is located in `src/components/BaseLayout/Navbar/CenterContainer.tsx`.
- Navbar left component is located in `src/components/BaseLayout/Navbar/LeftContainer.tsx`.
- Navbar right component is located in `src/components/BaseLayout/Navbar/RightContainer.tsx`.

## Sidebar Component

- Sidebar component is the component that will be displayed on the left of the page.
- Sidebar component is located in `src/components/BaseLayout/Sidebar/Container.tsx`.
- Sidebar content component is located in `src/components/BaseLayout/Sidebar/Content.tsx`.
- Sidebar item component is located in `src/components/BaseLayout/Sidebar/Item.tsx`.
- Sidebar footer component is located in `src/components/BaseLayout/Sidebar/Footer.tsx`.

## Content Component

- Content component is the component that will be displayed on the center of the page.
- Content component is located in `src/components/BaseLayout/Content/Container.tsx`.
- Content component is a wrapper children component for the content.

## Children Component

- Children component is the component that will be displayed on the center of the page.
  - This component is the children of the content component.
- Children component is located in `src/components/BaseLayout/Children/Container.tsx`.
- Children component is a wrapper component for the children component.

## Footer Component

- Footer component is the component that will be displayed on the bottom of the page.
- Footer component is located in `src/components/BaseLayout/Footer/Container.tsx`.
