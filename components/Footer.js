export default function Footer() {
  return (
    <footer>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>© {new Date().getFullYear()} Micheal Nwgbolu</span>
        <span>github.com/micminem-glitch</span>
      </div>
    </footer>
  );
}
