const Category = ({ name, isSelected, ...divProps }) => {
  return (
    <div
      css={{
        width: 0,
        flexGrow: 1,
        cursor: "pointer",
      }}
      {...divProps}
    >
      <div
        css={{
          height: "54px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: 700,
          color: isSelected ? "#444CE7" : "#667085",
          transition: "color 0.2s ease-in-out",
        }}
      >
        {name}
      </div>
      <div
        css={{
          height: "2px",
          background: "#444CE7",
          opacity: isSelected ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      />
    </div>
  );
};

export default Category;
