import { SubCategory } from '../types'

export const navbar: SubCategory = {
  name: 'Navbar',
  id: 'navbar',
  children: [
    {
      name: 'With Sub-Navigation & CTA',
      filename: 'withSubnavigation',
    },
    {
      name: 'Simple with user dropdown',
      filename: 'simple',
    },
    {
      name: 'With action button & user dropdown',
      filename: 'withAction',
    },
    {
      name: 'With user dropdown and Dark theme switcher',
      filename: 'withDarkModeSwitcher',
    },
    {
      name: 'With MutliLevel Navbar, Sidebar & CTA',
      filename: 'withMultiLevel',
    },
  ],
}
