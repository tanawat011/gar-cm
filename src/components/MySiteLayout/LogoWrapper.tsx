type LogoWrapperProps = {
  children: React.ReactNode;
};

export default function LogoWrapper({ children }: LogoWrapperProps) {
  return (
    <div className="w-80">{children}</div>
  )
}
