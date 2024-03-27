const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hero min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800">
      <div className="hero-content">{children}</div>
    </div>
  );
};

export default AuthLayout;
