import { Container } from "@mui/material";
import { useState } from "react";
import { Document, pdfjs, Page } from "react-pdf";
import infograph from "./inphograph.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Infography = () => {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  return (
    <Container
      maxWidth="lg"
      className="home"
      sx={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Document
        file={infograph}
        onLoadError={(e) => console.error(e)}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Container>
  );
};

export default Infography;
