type HeaderContainerProps = {
  children: React.ReactNode;
};

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <div className="h-16 flex items-center justify-between">{children}</div>
  )
}
