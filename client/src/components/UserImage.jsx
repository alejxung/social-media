import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        // src={`http://localhost:3001/assets/${image}`}
        src={`https://xterid-3001.csb.app/assets/p2.jpeg`}
      />
    </Box>
  );
};

export default UserImage;
