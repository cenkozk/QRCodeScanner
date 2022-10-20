import React from "react";
import QrScanner from "qr-scanner";
import { Box, Stack, Typography, Button, Alert, Snackbar } from "@mui/material";
import Webcam from "react-webcam";
import { stringify } from "querystring";

export default function Card() {
  const montserrat = "'Montserrat', sans-serif";
  const video = React.useRef<HTMLVideoElement>(null!);

  const [foundedLink, setFoundedLink] = React.useState("Wait until your QR Code recoginezed.");
  const [linkToSite, setLinkToSite] = React.useState("https://github.com/emirhanozk");

  React.useEffect(() => {
    const qrScanner = new QrScanner(video.current, (result: any) => changeLinks(result.data), { highlightCodeOutline: true, highlightScanRegion: true });
    const el = document.getElementsByClassName("scan-region-highlight-svg")[0] as HTMLElement;
    el.style.stroke = "#FFA3AC";
    const elH = document.getElementsByClassName("code-outline-highlight")[0] as HTMLElement;
    elH.style.stroke = "#FFA3AC";
    qrScanner.start();
  }, []);

  function changeLinks(link: string) {
    if (foundedLink == link) return;
    setFoundedLink(link);
    setLinkToSite(linkToSite);
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      rowGap="50px"
      sx={{
        backgroundColor: "white",
        width: "80%",
        maxWidth: "800px",
        height: "auto",
        background: "rgba(255, 255, 255, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(12.5px)",
        borderRadius: "30px",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)",
        padding: "50px 10px 50px 10px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "5px 20px 5px 20px",
          width: "auto",
          height: "30px",
          background: "rgba(255, 255, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          borderRadius: "30px",
        }}
      >
        <Box component="img" src="/camera_icon.svg" sx={{ marginRight: "5px", marginTop: "2px" }} />
        <Typography sx={{ fontFamily: montserrat, fontWeight: "700", opacity: "0.6" }}>QR Code Scanner</Typography>
      </Stack>
      <video style={{ width: "60vw", height: "60vw", maxWidth: "350px", maxHeight: "350px", objectFit: "cover", borderRadius: "30px" }} ref={video}></video>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "5px 20px 5px 20px",
          width: "auto",
          maxWidth: "60%",
          height: "30px",
          background: "rgba(255, 255, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          borderRadius: "30px",
        }}
      >
        <Typography sx={{ fontFamily: montserrat, fontWeight: "500", opacity: "0.7", fontSize: "12px", textAlign: "center" }}>
          <a href={linkToSite}>{foundedLink}</a>{" "}
        </Typography>
      </Stack>
    </Stack>
  );
}
