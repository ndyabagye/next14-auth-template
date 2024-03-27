interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">Next Landlord</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
