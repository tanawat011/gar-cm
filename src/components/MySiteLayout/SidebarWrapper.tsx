type SidebarWrapperProps = {
  children: React.ReactNode;
};

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
  return (
    <div className="w-80 h-[calc(100vh-theme('height.16'))]">{children}</div>
  )
}
