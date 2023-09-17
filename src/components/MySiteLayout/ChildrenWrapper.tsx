type ChildrenWrapperProps = {
  children: React.ReactNode;
};

export default function ChildrenWrapper({ children }: ChildrenWrapperProps) {
  return (
    <div className="min-w-[calc(100%-theme('width.80'))]">{children}</div>
  )
}
