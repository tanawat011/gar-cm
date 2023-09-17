type HeaderWrapperProps = {
  children: React.ReactNode;
};

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  return (
    <div className="min-w-[calc(100%-theme('width.80'))]">{children}</div>
  )
}
