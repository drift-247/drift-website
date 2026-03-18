interface WaitlistModalProps {
  children: React.ReactNode;
}

export function WaitlistModal({ children }: WaitlistModalProps) {
  const handleClick = () => {
    const section = document.getElementById("early-access");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}