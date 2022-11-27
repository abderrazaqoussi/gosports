const themeConfig = {
  // ** Layout Configs
  templateName: 'Go Sports' /* App Name */,
  navBrandLogo: { Logo: 'G', Type: 'text', Path: '/', Style: { display: { xs: 'none', md: 'grid' } } },
  mode: 'light' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: {
    xs: '60%',
    sm: '40%',
    md: '100%'
  } /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */
}

export default themeConfig
