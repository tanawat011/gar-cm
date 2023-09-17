import ChildrenWrapper from '@/components/MySiteLayout/ChildrenWrapper'
import Container from '@/components/MySiteLayout/Container'
import ContentContainer from '@/components/MySiteLayout/ContentContainer'
import HeaderContainer from '@/components/MySiteLayout/HeaderContainer'
import HeaderWrapper from '@/components/MySiteLayout/HeaderWrapper'
import LogoWrapper from '@/components/MySiteLayout/LogoWrapper'
import SidebarWrapper from '@/components/MySiteLayout/SidebarWrapper'

type MySiteLayoutProps = {
  children: React.ReactNode;
};

export default function MySiteLayout({ children }: MySiteLayoutProps) {
  return (
    <Container>
      <HeaderContainer>
        <LogoWrapper>Logo Header</LogoWrapper>

        <HeaderWrapper>Header</HeaderWrapper>
      </HeaderContainer>

      <ContentContainer>
        <SidebarWrapper>Sidebar</SidebarWrapper>

        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ContentContainer>

    </Container>
  )
}
