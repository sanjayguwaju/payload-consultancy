export type ExtendedCMSLinkType = {
  link: {
    label: string
    href: string
    subLinks?: ExtendedCMSLinkType[] | null
  }
}

export type MobileNavProps = {
  navItems: ExtendedCMSLinkType[]
}