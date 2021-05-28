const input = {
  defaultProps: {
    variant: "default",
  },
  baseStyle: {
    field: {
      border: "1px solid",
      borderColor: "gray.300",
    },
  },
  variants: {
    default: {
      field: {
        "&:focus": {
          borderColor: "purple.300",
          boxShadow: "0 0 0 1px var(--chakra-colors-purple-300)",
        },
      },
    },
    search: {
      field: {
        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: "8",
      },
    },
  },
};

export { input };
