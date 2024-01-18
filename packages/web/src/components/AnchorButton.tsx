interface AnchorButtonProps {
  id: string;
}

const AnchorButton = ({ id }: AnchorButtonProps) => {
  const scrollToAllMenus = (id: string) => {
    const allMenusSection = document.getElementById(id);
    if (allMenusSection) {
      allMenusSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={() => scrollToAllMenus(id)}
      className="block text-blue-500 mb-4"
    >
      View All Menus
    </button>
  );
};

export default AnchorButton;
