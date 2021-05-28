const links = {
  variants: {
    sidebar: {
      borderRadius: "4",
      color: "gray.800",
      textDecoration: "none",
      display: "flex",
      gap: "8px",
      padding: "2",
      width: "100%",

      _hover: {
        backgroundColor: "brand.100",
        textDecoration: "none",
      },

      "&.active": {
        backgroundColor: "brand.50",
        textDecoration: "none",
      },
    },
  },
};

export { links };
