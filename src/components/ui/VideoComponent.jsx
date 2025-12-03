import { Card } from "@mui/material";

export default function VideoCard({ src }) {
    return (
        <Card
            key={src}
            sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
        >
            <video
                controls
                src={src}
                style={{
                    width: "100%",
                    borderRadius: "12px",
                    height: "100%",
                    objectFit: "cover"
                }}
                preload="metadata"
            />
        </Card>
    );
}
